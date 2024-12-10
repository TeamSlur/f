import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";
import IssueType from "../../components/Common/IssueType";

const CodeIssueAddContainer = () => {
  const navigate = useNavigate();
  const [codeName, setCodeName] = useState("");
  const [issueType, setIssueType] = useState("새 기능");
  const [description, setDescription] = useState("");
  const [codeContent, setCodeContent] = useState("");

  const handleCreate = () => {
    const requestBody = {
      code_issue_id: "example-example-example", // 예제 ID
      code_name: codeName,
      code_content: codeContent,
      code_createBy: "exampleUserName",
      code_createDate: new Date().toISOString(),
      code_updateDate: new Date().toISOString(),
    };

    console.log("요청 데이터:", requestBody);

    // API 요청 (주석 처리)
    // fetch(`/code/add/pid=${project_id}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userToken}`, // 예시 토큰
    //   },
    //   body: JSON.stringify(requestBody),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       navigate("/codeissue");
    //     } else {
    //       alert(data.message || "생성 실패");
    //     }
    //   })
    //   .catch((error) => console.error("Error:", error));
    navigate("/codeissue"); // 성공 시 화면 이동
  };

  const handleCodeInput = (e) => {
    setCodeContent(e.target.innerText); // 입력한 텍스트를 상태로 저장
  };

  return (
    <Container>
      <h1>CODE ISSUE GENERATE</h1>
      <Form>
        <Label>제목</Label>
        <Input
          type="text"
          value={codeName}
          onChange={(e) => setCodeName(e.target.value)}
          placeholder="코드 이슈 제목을 입력하세요"
        />

        <Label>이슈 타입</Label>
        <IssueTypeSelector>
          <IssueType type={issueType} />
          <Select
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
          >
            <option value="버그">버그</option>
            <option value="개선">개선</option>
            <option value="새 기능">새 기능</option>
            <option value="이슈">이슈</option>
          </Select>
        </IssueTypeSelector>

        <Label>설명</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="설명을 입력하세요"
        />

        <Label>코드</Label>
        <EditableCodeInput
          contentEditable
          suppressContentEditableWarning={true}
          onInput={handleCodeInput}
        >
          <SyntaxHighlighter
            language="javascript"
            style={{
              background: "none",
              padding: "8px",
              margin: "0",
              borderRadius: "4px",
            }}
          >
            {codeContent || "// 여기에 코드를 입력하세요"}
          </SyntaxHighlighter>
        </EditableCodeInput>

        <ButtonGroup>
          <Button onClick={() => navigate("/codeissue")}>취소</Button>
          <Button primary onClick={handleCreate}>
            생성
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
  font-family: "Courier New", Courier, monospace;
  resize: vertical;
`;

const EditableCodeInput = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  min-height: 150px;
  font-family: "Courier New", Courier, monospace;
  background-color: #f5f5f5;
  overflow: auto;
  white-space: pre-wrap;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

const IssueTypeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? "#007bff" : "#ccc")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#aaa")};
  }
`;

export default CodeIssueAddContainer;
