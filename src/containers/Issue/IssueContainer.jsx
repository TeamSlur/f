import { useEffect, useState } from "react";
import IssueComponent from "../../components/Issue/IssueComponent";
import axios from "axios";

const IssueContainer = () => {
  const [isListView, setIsListView] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  // 전체 이슈 데이터
  const [allIssues, setAllIssues] = useState([]);

  const [issues, setIssues] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  // 이슈 데이터 다시 불러오기 함수
  const refetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/issue/all?pid=1"
      );
      const data = response.data;
      const mappedData = data.map((item, index) => ({
        ...item,
        id: item.issueId || `issue-${index + 1}`,
      }));

      setAllIssues(mappedData);
      setIssues({
        todo: mappedData.filter((item) => item.issueStatus === "TODO"),
        inProgress: mappedData.filter(
          (item) => item.issueStatus === "IN_PROGRESS"
        ),
        done: mappedData.filter((item) => item.issueStatus === "DONE"),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    refetchData();
  }, []);

  useEffect(() => {
    const results = allIssues.filter((item) =>
      item.issueName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, allIssues]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceList = [...issues[source.droppableId]];
    const destList =
      source.droppableId === destination.droppableId
        ? sourceList
        : [...issues[destination.droppableId]];
    const [removed] = sourceList.splice(source.index, 1);

    let newStatus = "";
    if (destination.droppableId === "todo") {
      newStatus = "TODO";
    } else if (destination.droppableId === "inProgress") {
      newStatus = "IN_PROGRESS";
    } else if (destination.droppableId === "done") {
      newStatus = "DONE";
    }

    destList.splice(destination.index, 0, {
      ...removed,
      issueStatus: newStatus,
    });

    setIssues((prev) => ({
      ...prev,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList,
    }));
  };

  const toggleView = () => {
    setIsListView(!isListView);
  };

  const openModal = (type, data = null) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const propData = {
    isListView,
    searchTerm,
    filteredData,
    issues,
    setSearchTerm,
    onDragEnd,
    toggleView,
    isModalOpen,
    openModal,
    closeModal,
    modalType,
    refetchData, // 여기서 refetchData를 전달
  };

  return <IssueComponent {...propData} />;
};

export default IssueContainer;
