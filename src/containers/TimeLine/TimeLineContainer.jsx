import { useState } from "react";
import TimeLineComponent from "../../components/TimeLine/TimeLineComponent";
import dummyData from "../../components/Common/dummyData";

const TimeLineContainer = () => {
  const [openTasks, setOpenTasks] = useState({});
  const [isTimeLineView, setIsTimeLineView] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  // dummyData를 TASK별로 그룹화
  const tasks = dummyData.reduce((acc, issue) => {
    const { taskCategory } = issue;
    if (!acc[taskCategory]) {
      acc[taskCategory] = { taskCategory, issues: [] };
    }
    acc[taskCategory].issues.push(issue);
    return acc;
  }, {});

  const tasksArray = Object.values(tasks);

  // 태스크 열기/닫기 토글 함수
  const toggleTask = (taskCategory) => {
    setOpenTasks((prev) => ({
      ...prev,
      [taskCategory]: !prev[taskCategory],
    }));
  };

  const timelineView = () => {
    setIsTimeLineView(!isTimeLineView);
  };

  const openModal = (type, data = null) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const propData = {
    isTimeLineView,
    openTasks,
    tasksArray,
    toggleTask,
    timelineView,
    isModalOpen,
    openModal,
    closeModal,
    modalType,
  };

  return <TimeLineComponent {...propData} />;
};

export default TimeLineContainer;
