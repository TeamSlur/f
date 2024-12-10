import { useEffect, useState } from "react";
import IssueComponent from "../../components/Issue/IssueComponent";
import dummyData from "../../components/Common/dummyData";

const IssueContainer = () => {
    const [isListView, setIsListView] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(dummyData);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);

    const [issues, setIssues] = useState(() => {
        const initialIssues = dummyData.map((item, index) => ({
            ...item,
            id: item.id || `issue-${index + 1}`, //고유 ID추가
        }));
        return {
            confirm: initialIssues.filter((item) => item.status === "confirm"),
            progress: initialIssues.filter(
                (item) => item.status === "progress"
            ),
            done: initialIssues.filter((item) => item.status === "done"),
        };
    });

    const onDragEnd = (result) => {
        //dnd 코드
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const sourceList = [...issues[source.droppableId]];
        const destList =
            source.droppableId === destination.droppableId
                ? sourceList
                : [...issues[destination.droppableId]];
        const [removed] = sourceList.splice(source.index, 1);
        destList.splice(destination.index, 0, {
            ...removed,
            status: destination.droppableId,
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

    useEffect(() => {
        const results = dummyData.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(results);
    }, [searchTerm]);

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
    };

    return <IssueComponent {...propData} />;
};

export default IssueContainer;
