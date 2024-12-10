import React from "react";
import styled from "styled-components";

const IssueType = ({ type }) => {
  const getIconClass = () => {
    switch (type) {
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
    <IssueTypeBlock className="drag-prevent" type={type}>
      <ContentWrapper>
        <i className={getIconClass()}></i>
        <span>{type}</span>
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
  background-color: ${({ type }) => {
    switch (type) {
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

  /* i {
        margin-right: 5px;
        padding-top: 2.5px;
    }
  }};

  i {
    margin-right: 5px;
    padding-top: 2.5px;
  }
  border-radius: 20px;
  height: 21px;
  display: inline-block;
  color: white;
  font-weight: bold;
  font-size: ${({ type }) => {
    switch (type) {
      case "버그":
        return "1em";
      case "개선":
        return "1em";
      case "새 기능":
        return "0.9em";
      case "이슈":
        return "1em";
      default:
        return "black";
    }
  }};
  background-color: ${({ type }) => {
    switch (type) {
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
  }}; */

  i {
    margin-right: 5px;
    padding-top: 2.5px;
  }
`;
export default IssueType;
