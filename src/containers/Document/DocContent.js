import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Block from "../../components/Common/Block";
import styled from "styled-components";

const DocContent = () => {
  const [blocks, setBlocks] = useState([
    { id: Date.now().toString(), content: "기본 블록" },
  ]);

  const addBlock = () => {
    setBlocks((prevBlocks) => [
      ...prevBlocks,
      { id: Date.now().toString(), content: "새 블록" },
    ]);
  };

  const moveBlock = (sourceIndex, destinationIndex) => {
    setBlocks((prevBlocks) => {
      const updated = [...prevBlocks];
      const [movedBlock] = updated.splice(sourceIndex, 1);
      updated.splice(destinationIndex, 0, movedBlock);
      return updated;
    });
  };

  const updateContent = (id, newContent) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, content: newContent } : block
      )
    );
  };

  const createNewBlock = (content, afterBlockId) => {
    const newBlockId = Date.now().toString();
    setBlocks((prevBlocks) => {
      const index = prevBlocks.findIndex((block) => block.id === afterBlockId);
      if (index === -1) return prevBlocks;

      const updated = [...prevBlocks];
      updated.splice(index + 1, 0, { id: newBlockId, content });
      return updated;
    });
    return newBlockId;
  };

  const deleteBlock = (id) => {
    setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== id));
  };

  const getPreviousBlockId = (currentBlockId) => {
    const index = blocks.findIndex((b) => b.id === currentBlockId);
    if (index > 0) {
      return blocks[index - 1].id;
    }
    return null;
  };

  const mergeBlocks = (prevBlockId, currentBlockId, currentBlockContent) => {
    setBlocks((prevBlocks) => {
      const currentIndex = prevBlocks.findIndex((b) => b.id === currentBlockId);
      const prevIndex = prevBlocks.findIndex((b) => b.id === prevBlockId);
      if (currentIndex === -1 || prevIndex === -1) return prevBlocks;

      const updated = [...prevBlocks];
      const prevBlock = updated[prevIndex];
      const mergedContent = prevBlock.content + currentBlockContent;

      updated[prevIndex] = { ...prevBlock, content: mergedContent };
      updated.splice(currentIndex, 1);

      setTimeout(() => {
        focusBlock(prevBlockId, mergedContent.length);
      }, 0);

      return updated;
    });
  };

  const focusBlock = (blockId, offset) => {
    const blockElement = document.querySelector(`[data-block-id="${blockId}"]`);
    if (blockElement) {
      const contentEditable = blockElement.querySelector("[contenteditable]");
      contentEditable.focus();

      const selection = window.getSelection();
      const range = document.createRange();
      const textNode = contentEditable.firstChild;
      if (textNode && textNode.length >= offset) {
        range.setStart(textNode, offset);
      } else if (textNode) {
        range.setStart(textNode, textNode.length);
      } else {
        const emptyNode = document.createTextNode("");
        contentEditable.appendChild(emptyNode);
        range.setStart(emptyNode, 0);
      }
      range.collapse(true);

      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (sourceIndex !== destinationIndex) {
      moveBlock(sourceIndex, destinationIndex);
    }
  };

  return (
    <Container>
      <Header>
        <Title>문서 편집</Title>
        <AddButton onClick={addBlock}>+ 블록 추가</AddButton>
      </Header>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="blocks">
          {(provided) => (
            <BlockContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided) => (
                    <Block
                      id={block.id}
                      content={block.content}
                      updateContent={updateContent}
                      deleteBlock={deleteBlock}
                      createNewBlock={createNewBlock}
                      provided={provided}
                      focusBlock={focusBlock}
                      mergeBlocks={mergeBlocks}
                      getPreviousBlockId={getPreviousBlockId}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </BlockContainer>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fefefe;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default DocContent;
