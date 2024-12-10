import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IssueType from "../../components/Common/IssueType";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CodeIdState } from "../../store/CodeIdState";

export default function CodeIssuePageContainer() {
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCodeIssueId, setSelectedCodeIssueId] =
    useRecoilState(CodeIdState);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch('/api/endpoint')
    //   .then(response => response.json())
    //   .then(data => setIssues(data.result))
    //   .catch(error => console.error('Error fetching issues:', error));
    const dummyData = [
      {
        code_issue_id: "1",
        code_name: "Code Issue Name1",
        code_content: "Description",
        issue_types: "개선",
        code_createDate: "2024-11-23",
      },
      {
        code_issue_id: "2",
        code_name: "Code Issue Name2",
        code_content: "Description",
        issue_types: "버그",
        code_createDate: "2024-11-23",
      },
      {
        code_issue_id: "3",
        code_name: "Code Issue Name3",
        code_content: "Description",
        issue_types: "새 기능",
        code_createDate: "2024-11-23",
      },
      {
        code_issue_id: "4",
        code_name: "Code Issue Name4",
        code_content: "Description",
        issue_types: "이슈",
        code_createDate: "2024-11-23",
      },
    ];
    setIssues(dummyData);
  }, []);

  const filteredIssues = issues.filter((issue) =>
    issue.code_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleIssueClick = (id) => {
    setSelectedCodeIssueId(id); // Recoil 상태 업데이트
    navigate("/codeissue/detail"); // 상세 페이지로 이동
  };

  const handleAddClick = () => {
    navigate("/codeissue/add"); // Add 페이지로 이동
  };

  return (
    <CodeIssuePageBlock>
      <Header>
        <h1>CODE ISSUE</h1>
        <Actions>
          <SearchInput
            type="text"
            placeholder="Search by Issue Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AddButton onClick={handleAddClick}>
            <i className="fa-solid fa-plus"></i>
          </AddButton>
        </Actions>
      </Header>
      <IssueList>
        {filteredIssues.map((issue) => (
          <IssueCard
            key={issue.code_issue_id}
            onClick={() => handleIssueClick(issue.code_issue_id)}
          >
            <LeftSection>
              <IssueType type={issue.issue_types} />
              <IssueTitle>{issue.code_name}</IssueTitle>
              <IssueDescription>{issue.code_content}</IssueDescription>
            </LeftSection>
            <RightSection>
              <PlaceholderImage />
              <UploadTime>{issue.code_createDate}</UploadTime>
            </RightSection>
          </IssueCard>
        ))}
      </IssueList>
    </CodeIssuePageBlock>
  );
}

const CodeIssuePageBlock = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: #0056b3;
  }

  i {
    font-size: 20px;
  }
`;

const IssueList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const IssueCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  background-color: #fff;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const IssueTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const IssueDescription = styled.div`
  font-size: 14px;
  color: #666;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const PlaceholderImage = styled.div`
  width: 100px;
  height: 60px;
  background-color: #e0e0e0;
  border-radius: 5px;
`;

const UploadTime = styled.div`
  font-size: 12px;
  color: #888;
`;
