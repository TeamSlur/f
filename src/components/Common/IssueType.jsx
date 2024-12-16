import React from "react";
import styled from "styled-components";

const IssueType = ({ type }) => {
  const getTypeFromCategory = (category) => {
    switch (category) {
      case "0":
        return "버그";
      case "1":
        return "개선";
      case "2":
        return "새 기능";
      case "3":
        return "이슈";
      default:
        return "";
    }
  };

  const displayType = getTypeFromCategory(type);

  const getIconClass = () => {
    switch (displayType) {
      case "버그":
        return "fa-solid fa-exclamation";
      case "개선":
        return "fa-solid fa-arrow-right fa-rotate-270";
      case "새 기능":
        return "fa-solid fa-plus";
      case "이슈":
        return "fa-regular fa-circle";
      default:
        return "";
    }
  };

  return (
    <IssueTypeBlock className="drag-prevent" $displayType={displayType}>
      <ContentWrapper>
        <i className={getIconClass()}></i>
        <span>{displayType}</span>
      </ContentWrapper>
    </IssueTypeBlock>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IssueTypeBlock = styled.div`
  width: 70px;
  height: 26px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.85em;
  background-color: ${({ $displayType }) => {
    switch ($displayType) {
      case "버그":
        return "red";
      case "개선":
        return "green";
      case "새 기능":
        return "#1ea81e";
      case "이슈":
        return "grey";
      default:
        return "black";
    }
  }};

  i {
    margin-right: 5px;
    padding-top: 2.5px;
  }
`;

export default IssueType;
