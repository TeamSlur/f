import React, { useState } from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";

const ChatModal = ({ isOpen, onClose, userName, isPinned, togglePin }) => {
  const [messages, setMessages] = useState([
    { sender: "user1", content: "안녕하세요!", isMarkdown: false },
    { sender: "user2", content: "반갑습니다!", isMarkdown: false },
  ]);
  const [content, setContent] = useState("");

  const sendMessage = () => {
    if (!content.trim()) {
      alert("Please enter a message!");
      return;
    }
    setMessages((prev) => [
      ...prev,
      { sender: userName, content, isMarkdown: true },
    ]);
    setContent("");
  };

  if (!isOpen) return null;

  return (
    <ModalWrapper isPinned={isPinned}>
      <ModalContent>
        <Header>
          <h4>Chat Room</h4>
          <HeaderIcons>
            <PinButton onClick={togglePin}>
              <i
                className={`fa-solid fa-thumbtack ${isPinned ? "pinned" : ""}`}
              ></i>
            </PinButton>
            <CloseButton onClick={onClose}>×</CloseButton>
          </HeaderIcons>
        </Header>
        <ChatWindow>
          {messages.map((msg, index) => (
            <Message
              key={index}
              isOwnMessage={msg.sender === userName}
              sender={msg.sender}
              content={msg.content}
            />
          ))}
        </ChatWindow>
        <InputContainer>
          <MDEditorWrapper>
            <MDEditor
              value={content}
              onChange={setContent}
              hideToolbar={true}
              preview="edit"
            />
          </MDEditorWrapper>
          <SendButton onClick={sendMessage}>Send</SendButton>
        </InputContainer>
      </ModalContent>
    </ModalWrapper>
  );
};

const Message = ({ isOwnMessage, sender, content }) => (
  <MessageWrapper isOwnMessage={isOwnMessage}>
    {!isOwnMessage && <SenderName>{sender}</SenderName>}
    <MessageContent isOwnMessage={isOwnMessage}>
      <MDEditor.Markdown height={50} source={content} />
    </MessageContent>
  </MessageWrapper>
);

export default ChatModal;

// 스타일 정의
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ isPinned }) => (isPinned ? "20%" : "20%")};
  height: 100%;
  background: #f7f8fa;
  border-left: 1px solid #ddd;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #aed0f1;
  padding: 20px 15px 10px;
  font-size: 18px;
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PinButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #0078ff;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #ff5e57;
  }
`;

const ChatWindow = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background: #aed0f1;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isOwnMessage }) =>
    isOwnMessage ? "flex-end" : "flex-start"};
  margin: 5px 0;
`;

const SenderName = styled.div`
  font-size: 12px;
  color: #555;
  margin-bottom: 2px;
`;

const MessageContent = styled.div`
  background: #fff; /* 모든 메시지 흰 배경 */
  color: #333; /* 모든 메시지 검은 글자 */
  padding: 10px 15px;
  border-radius: ${({ isOwnMessage }) =>
    isOwnMessage ? "15px 15px 0px 15px" : "15px 15px 15px 0px"};
  border: 2px solid ${({ isOwnMessage }) => (isOwnMessage ? "#0078ff" : "#ddd")};
  max-width: 60%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  /* Markdown 렌더링 스타일 적용 */
  .w-md-editor,
  .w-md-editor * {
    background: transparent !important; /* 투명 배경 */
    color: inherit !important; /* 글자 색상 상속 */
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #fff;
  border-top: 1px solid #ddd;
`;

const MDEditorWrapper = styled.div`
  flex: 1;
  .w-md-editor {
    width: 100%;
    height: 50px;
  }
`;

const SendButton = styled.button`
  padding: 10px 15px;
  background: #0078ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
