import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Block = ({
  id,
  content,
  updateContent,
  deleteBlock,
  createNewBlock,
  provided,
  focusBlock,
  mergeBlocks,
  getPreviousBlockId,
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && contentRef.current.innerText !== content) {
      contentRef.current.innerText = content;
    }
  }, [content]);

  const setCaret = (node, offset) => {
    const selection = window.getSelection();
    const range = document.createRange();
    const safeOffset = Math.min(offset, node.length);
    range.setStart(node, safeOffset);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleInput = () => {
    const newContent = contentRef.current.innerText;
    if (newContent !== content) {
      updateContent(id, newContent);
    }
  };

  const handleKeyDown = (e) => {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    const caretPosition = range?.startOffset ?? 0;
    const currentText = contentRef.current.innerText;

    if (e.key === "Backspace") {
      if (caretPosition === 0) {
        if (currentText.length > 0) {
          const prevBlockId = getPreviousBlockId(id);
          if (prevBlockId) {
            e.preventDefault();
            mergeBlocks(prevBlockId, id, currentText);
            return;
          }
        } else {
          e.preventDefault();
          deleteBlock(id);
          return;
        }
      }
    }

    if (e.key === "Enter") {
      if (e.shiftKey) {
        // Shift + Enter: caret 위치에 개행 삽입 후 caret 한 칸 뒤로
        e.preventDefault();
        const insertPos = caretPosition;
        const newText =
          currentText.slice(0, insertPos) + "\n" + currentText.slice(insertPos);
        updateContent(id, newText);

        setTimeout(() => {
          const textNode = contentRef.current.firstChild;
          if (textNode) {
            const desiredOffset = insertPos + 1; // 개행 뒤 caret을 한칸 뒤로
            const safeOffset = Math.min(desiredOffset, textNode.length);
            setCaret(textNode, safeOffset);
          }
        }, 0);
      } else {
        // Enter: 새로운 블록 생성
        e.preventDefault();
        const beforeCaret = currentText.slice(0, caretPosition);
        const afterCaret = currentText.slice(caretPosition);
        updateContent(id, beforeCaret);
        const newBlockId = createNewBlock(afterCaret, id);
        setTimeout(() => {
          focusBlock(newBlockId, 0);
        }, 0);
      }
    }
  };

  return (
    <BlockWrapper
      data-block-id={id}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Handle />
      <Content
        contentEditable
        suppressContentEditableWarning
        ref={contentRef}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      />
    </BlockWrapper>
  );
};

const BlockWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Handle = styled.div`
  width: 8px;
  height: 30px;
  background-color: #bbb;
  margin-right: 10px;
  border-radius: 4px;
  cursor: grab;
`;

const Content = styled.div`
  flex: 1;
  font-size: 16px;
  color: #333;
  outline: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  &:focus {
    border-bottom: 1px solid #007bff;
  }
`;

export default Block;
