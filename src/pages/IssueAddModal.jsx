/* eslint-disable no-unused-expressions */
import React from "react";
import styled from "styled-components";
import IssueAddContainer from "../containers/IssueAddContainer";
const IssueAddModal = ({ isOpen, onClose, type, refetchData }) => {
  if (!isOpen) return null;

  const dummyData = {
    title: "Sample Issue Title",
    content: "This is a description of the issue...",
    primary: "1",
    types: "버그",
    front_work: null,
    end_work: null,
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <IssueAddContainer
          type={type}
          issueData={type === "edit" ? dummyData : null}
          onClose={onClose}
          refetchData={refetchData} // 추가
        />
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  border: 1px solid black;
  background-color: white;
  width: 300px;
  height: ${({ type }) => {
    type === "edit" ? "800px" : "700px";
  }};
  border-radius: 10px;
  padding: 20px;
  position: fixed;
  top: 50%;
  right: 36px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export default IssueAddModal;
