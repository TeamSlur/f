import { useState, useEffect } from "react";
import IssueAddComponent from "../components/IssueAddComponent";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { rc_token } from "../store/user";

const IssueAddContainer = ({ onClose, type, issueData, refetchData }) => {
  const [issueName, setIssueName] = useState("");
  const [issuePriority, setIssuePriority] = useState(1);
  const [issueTag, setIssueTag] = useState("0");
  const [frontWork, setFrontWork] = useState("");
  const [endWork, setEndWork] = useState("");
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const token = useRecoilValue(rc_token);

  // edit일 때 기존 데이터 로딩
  useEffect(() => {
    if (type === "edit" && issueData) {
      setIssueName(issueData.title);
      setDescription(issueData.content);
      setIssuePriority(issueData.priority);
      setIssueTag(issueData.type);
      setFrontWork(issueData.front_work);
      setEndWork(issueData.end_work);
    }
  }, [type, issueData]);

  // 입력값 처리 핸들러
  const handleIssueNameChange = (e) => setIssueName(e.target.value);
  const handlePriorityChange = (e) => setIssuePriority(e.target.value);
  const handleTagChange = (e) => setIssueTag(e.target.value);
  const handleFrontWorkChange = (e) => setFrontWork(e.target.value);
  const handleEndWorkChange = (e) => setEndWork(e.target.value);
  const handleTaskChange = (e) => setTask(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSave = async () => {
    if (type === "add") {
      try {
        await axios.post(
          "http://localhost:8080/api/issue/add",
          {
            issueName: issueName,
            issueCategory: issueTag,
            issueContent: description,
            issuePriority: issuePriority,
            issueRelated_front: frontWork,
            issueRelated_end: endWork,
            taskId: 1,
          },
          {
            params: {
              pid: 1,
            },
            headers: {
              authorization: token,
            },
          }
        );

        // 새로운 이슈를 추가한 뒤 데이터 재로드
        await refetchData();
      } catch (error) {
        console.error(error);
      }
    } else if (type === "edit") {
      // 수정 로직 구현 시 여기에 추가
      // 수정 후 리패치 필요시 아래 refetchData 호출
      await refetchData();
    }

    // 모달 닫기
    onClose();
  };

  const handleDelete = async () => {
    // 삭제 로직 구현 시 여기에 추가
    // 삭제 후 재로드 필요 시 refetchData 호출
    onClose();
  };

  const propData = {
    issueName,
    issuePriority,
    issueTag,
    frontWork,
    endWork,
    task,
    description,
    handleIssueNameChange,
    handlePriorityChange,
    handleTagChange,
    handleFrontWorkChange,
    handleEndWorkChange,
    handleTaskChange,
    handleDescriptionChange,
    handleSave,
    handleDelete,
    type,
  };

  return <IssueAddComponent {...propData} />;
};

export default IssueAddContainer;
