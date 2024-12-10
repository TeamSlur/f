import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeIdState } from "../../store/CodeIdState";
import IssueType from "../../components/Common/IssueType";

export default function CodeIssueDetailContainer() {
  const codeId = useRecoilValue(CodeIdState); // 현재 페이지의 code_id 관리
  const [codeIssue, setCodeIssue] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // 더미 데이터
    const dummyCodeIssue = {
      code_issue_id: "1",
      code_name: "Example Code Issue",
      code_content: "\nfunction example() {\n  return 'Hello World';\n}\n",
      issue_types: "버그",
      code_description: "This is an example description of the code issue.",
    };

    const dummyComments = [
      {
        comment_id: "1",
        comment_name: "User1",
        comment_content: "This is the first comment.",
        comment_createDate: "2024-11-23",
      },
      {
        comment_id: "2",
        comment_name: "User2",
        comment_content: "This is the second comment.",
        comment_createDate: "2024-11-23",
      },
    ];

    setCodeIssue(dummyCodeIssue);
    setComments(dummyComments);

    // 실제 API 호출 (주석 처리)
    /*
    fetch(`/code/pid=${projectId}&cid=${codeId}`)
      .then((res) => res.json())
      .then((data) => setCodeIssue(data.result))
      .catch((err) => console.error(err));

    fetch(`/code/comment/pid=${projectId}&cid=${codeId}`)
      .then((res) => res.json())
      .then((data) => setComments(data.result))
      .catch((err) => console.error(err));
    */
  }, [codeId]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newCommentData = {
      comment_id: (comments.length + 1).toString(),
      comment_name: "Current User",
      comment_content: newComment,
      comment_createDate: new Date().toISOString().split("T")[0],
    };
    setComments([...comments, newCommentData]);
    setNewComment("");

    // 실제 API 호출 (주석 처리)
    /*
    fetch(`/code/comment/add/pid=${projectId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment_code_id: codeId,
        comment_name: "Current User",
        comment_content: newComment,
        comment_createDate: new Date().toISOString(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setComments([...comments, newCommentData]);
          setNewComment("");
        }
      })
      .catch((err) => console.error(err));
    */
  };

  return (
    <CodeIssueDetailBlock>
      <Header>
        <h1>CODE ISSUE</h1>
        <h2>{codeIssue?.code_name}</h2>
        {codeIssue && <IssueType type={codeIssue.issue_types} />}
      </Header>
      <CodeSpace>
        <SyntaxHighlighter language="javascript" style={prism}>
          {codeIssue?.code_content || ""}
        </SyntaxHighlighter>
      </CodeSpace>
      <Description>
        <h3>Description</h3>
        <p>{codeIssue?.code_description}</p>
      </Description>
      <CommentSection>
        <h3>COMMENT</h3>
        <CommentList>
          {comments.map((comment) => (
            <Comment key={comment.comment_id}>
              <UserInfo>
                <Avatar />
                <UserName>{comment.comment_name}</UserName>
              </UserInfo>
              <CommentContent>{comment.comment_content}</CommentContent>
              <CommentDate>{comment.comment_createDate}</CommentDate>
            </Comment>
          ))}
        </CommentList>
        <CommentInputSection>
          <CommentInput
            type="text"
            placeholder="댓글 추가..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <AddCommentButton onClick={handleAddComment}>저장</AddCommentButton>
        </CommentInputSection>
      </CommentSection>
    </CodeIssueDetailBlock>
  );
}

const CodeIssueDetailBlock = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
  }
`;

const CodeSpace = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-family: monospace;
  white-space: pre-wrap;
`;

const Description = styled.div`
  margin: 20px 0;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`;

const CommentSection = styled.div`
  margin: 20px 0;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ccc;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const CommentContent = styled.div`
  font-size: 14px;
`;

const CommentDate = styled.div`
  font-size: 12px;
  color: #888;
`;

const CommentInputSection = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const AddCommentButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
