import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import webSocketService from "../../apis/WebSocketService";

const DocumentEditor = ({ initialContent, onContentChange }) => {
  const [blocks, setBlocks] = useState([
    { id: "1", content: initialContent, isEditing: false },
  ]);

  // 블록 순서 변경 핸들러
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedBlocks = Array.from(blocks);
    const [movedBlock] = reorderedBlocks.splice(result.source.index, 1);
    reorderedBlocks.splice(result.destination.index, 0, movedBlock);

    setBlocks(reorderedBlocks);
    if (onContentChange) {
      onContentChange(reorderedBlocks);
    }
    // 순서 변경 후 서버에 동기화
    webSocketService.sendMessage(
      JSON.stringify({ type: "REORDER", data: reorderedBlocks })
    );
  };

  const handleEditBlock = (id, newContent) => {
    const updatedBlocks = blocks.map((block) =>
      block.id === id ? { ...block, content: newContent } : block
    );
    setBlocks(updatedBlocks);

    if (onContentChange) {
      onContentChange(updatedBlocks);
    }
    // 수정된 블록을 서버에 동기화
    webSocketService.sendMessage(
      JSON.stringify({ type: "EDIT", data: updatedBlocks })
    );
  };

  // 편집 모드 전환
  const toggleEditing = (id) => {
    const updatedBlocks = blocks.map((block) =>
      block.id === id ? { ...block, isEditing: !block.isEditing } : block
    );
    setBlocks(updatedBlocks);
  };

  // 블록 추가 핸들러
  const addBlock = () => {
    const newBlock = { id: `${Date.now()}`, content: "", isEditing: true };
    const updatedBlocks = [...blocks, newBlock];
    setBlocks(updatedBlocks);
    if (onContentChange) {
      onContentChange(updatedBlocks);
    }
    // 추가된 블록을 서버에 동기화
    webSocketService.sendMessage(
      JSON.stringify({ type: "ADD", data: newBlock })
    );
  };

  // 블록 삭제 핸들러
  const deleteBlock = (id) => {
    const updatedBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(updatedBlocks);
    if (onContentChange) {
      onContentChange(updatedBlocks);
    }
    // 삭제된 블록을 서버에 동기화
    webSocketService.sendMessage(JSON.stringify({ type: "DELETE", data: id }));
  };

  const handleKeyDown = (id, event) => {
    const currentIndex = blocks.findIndex((block) => block.id === id);
    if (currentIndex === -1) return; // 블록을 찾을 수 없으면 반환

    const currentBlock = blocks[currentIndex];

    if (event.key === "Enter") {
      if (event.shiftKey) {
        // Shift + Enter: 블록 내에서 줄바꿈
        return; // 기본 동작 유지
      }

      // Enter: 새 블록 추가
      event.preventDefault(); // 기본 Enter 동작 막기

      const newBlock = { id: `${Date.now()}`, content: "", isEditing: true };
      const updatedBlocks = [
        ...blocks.slice(0, currentIndex + 1),
        newBlock,
        ...blocks.slice(currentIndex + 1),
      ];

      setBlocks(updatedBlocks);
      if (onContentChange) {
        onContentChange(updatedBlocks);
      }

      // 추가된 블록을 서버에 동기화
      webSocketService.sendMessage(
        JSON.stringify({ type: "ADD", data: newBlock })
      );
    } else if (event.key === "Backspace") {
      // Backspace 처리
      const isCursorAtStart = event.target.selectionStart === 0;

      if (isCursorAtStart) {
        event.preventDefault(); // 기본 Backspace 동작 막기

        if (currentBlock.content === "") {
          // 현재 블록 내용이 비었으면 블록 삭제
          deleteBlock(id);
        } else if (currentIndex > 0) {
          // 현재 블록에 내용이 있고, 이전 블록이 존재하면 병합
          const previousBlock = blocks[currentIndex - 1];
          const updatedBlocks = [...blocks];

          // 이전 블록의 내용에 현재 블록 내용 추가
          updatedBlocks[currentIndex - 1] = {
            ...previousBlock,
            content: previousBlock.content + currentBlock.content,
          };

          // 현재 블록 삭제
          updatedBlocks.splice(currentIndex, 1);

          setBlocks(updatedBlocks);
          if (onContentChange) {
            onContentChange(updatedBlocks);
          }

          // 병합된 블록을 서버에 동기화
          webSocketService.sendMessage(
            JSON.stringify({ type: "MERGE", data: updatedBlocks })
          );
        }
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="blocks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {blocks.map((block, index) => (
              <Draggable key={block.id} draggableId={block.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                      ...provided.draggableProps.style,
                      border: "1px solid #ccc",
                      padding: "10px",
                      cursor: "pointer",
                      background: "#f9f9f9",
                    }}
                    onClick={() => toggleEditing(block.id)}
                  >
                    {block.isEditing ? (
                      <textarea
                        value={block.content}
                        onChange={(e) =>
                          handleEditBlock(block.id, e.target.value)
                        }
                        onKeyDown={(e) => handleKeyDown(block.id, e)}
                        onBlur={() => toggleEditing(block.id)}
                        placeholder="Enter Markdown here..."
                        style={{
                          width: "100%",
                          fontFamily: "monospace",
                          border: "none",
                          outline: "none",
                          resize: "none",
                          overflow: "hidden",
                        }}
                        autoFocus
                        onInput={(e) => {
                          e.target.style.height = "auto";
                          e.target.style.height = `${e.target.scrollHeight}px`;
                        }}
                      />
                    ) : (
                      <ReactMarkdown>{block.content}</ReactMarkdown>
                    )}
                    <button
                      onClick={() => deleteBlock(block.id)}
                      style={{ marginTop: "5px" }}
                    >
                      Delete Block
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <button
        onClick={() => {
          addBlock();
        }}
        style={{ marginTop: "10px", padding: "5px 10px" }}
      >
        + Add Block
      </button>
    </DragDropContext>
  );
};

export default DocumentEditor;
