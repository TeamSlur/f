import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import IssueType from "../Common/IssueType";
import IssueRank from "../Common/IssueRank";
import IssueCard from "../Common/IssueCard";
import IssueAddModal from "../../pages/IssueAddModal";

const IssueComponent = (props) => {
    const {
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
    } = props;

    return (
        <IssueComponentBlock>
            <Header>
                <Title>ISSUE_TASK</Title>
                <IconContainer>
                    <TopIcon>
                        <i className="fa-solid fa-ellipsis fa-2xl"></i>
                    </TopIcon>
                    <BottomIcons>
                        <i
                            className="fa-solid fa-plus fa-lg"
                            onClick={() => openModal("add")} // edit으로 바꾸면 edit 나옴
                        ></i>
                        <i
                            className="fa-regular fa-calendar fa-lg"
                            onClick={toggleView}
                        ></i>
                        {isModalOpen && (
                            <IssueAddModal
                                isOpen={isModalOpen}
                                onClose={closeModal}
                                type={modalType}
                            />
                        )}
                    </BottomIcons>
                </IconContainer>
            </Header>
            <Divider />

            {isListView ? (
                <>
                    <SearchArea>
                        <SearchInput
                            type="text"
                            placeholder="Search by Issue Name"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                        />
                    </SearchArea>
                    <ListView>
                        <TableHeader className="drag-prevent">
                            <HeaderCell>우선순위</HeaderCell>
                            <HeaderCell>ISSUE_NAME</HeaderCell>
                            <HeaderCell>ISSUE_TAG</HeaderCell>
                            <HeaderCell>ISSUE_CONTENT</HeaderCell>
                        </TableHeader>
                        <TableBody className="scroll-custom">
                            {filteredData.map((item, index) => (
                                <TableRow key={item.title + index}>
                                    <Cell>
                                        <IssueRank rank={item.primary} />
                                    </Cell>
                                    <Cell>{item.title}</Cell>
                                    <Cell>
                                        <IssueType type={item.types} />
                                    </Cell>
                                    <Cell>{item.content}</Cell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </ListView>
                </>
            ) : (
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="card-block">
                        <Droppable droppableId="confirm">
                            {(provided, snapshot) => (
                                <Card
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`status-column ${
                                        snapshot.isDraggingOver
                                            ? "dragging-over"
                                            : ""
                                    }`}
                                >
                                    <CardTitle>컨펌</CardTitle>
                                    <CardItems>
                                        {issues.confirm.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id.toString()}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`draggable-item ${
                                                            snapshot.isDragging
                                                                ? "dragging"
                                                                : ""
                                                        }`}
                                                    >
                                                        <IssueCard
                                                            title={item.title}
                                                            content={
                                                                item.content
                                                            }
                                                            primary={
                                                                item.primary
                                                            }
                                                            types={item.types}
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </CardItems>
                                </Card>
                            )}
                        </Droppable>

                        <Droppable droppableId="progress">
                            {(provided, snapshot) => (
                                <Card
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`status-column ${
                                        snapshot.isDraggingOver
                                            ? "dragging-over"
                                            : ""
                                    }`}
                                >
                                    <CardTitle>진행중</CardTitle>
                                    <CardItems>
                                        {issues.progress.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id.toString()}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`draggable-item ${
                                                            snapshot.isDragging
                                                                ? "dragging"
                                                                : ""
                                                        }`}
                                                    >
                                                        <IssueCard
                                                            title={item.title}
                                                            content={
                                                                item.content
                                                            }
                                                            primary={
                                                                item.primary
                                                            }
                                                            types={item.types}
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </CardItems>
                                </Card>
                            )}
                        </Droppable>

                        <Droppable droppableId="done">
                            {(provided, snapshot) => (
                                <Card
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`status-column ${
                                        snapshot.isDraggingOver
                                            ? "dragging-over"
                                            : ""
                                    }`}
                                >
                                    <CardTitle>완료</CardTitle>
                                    <CardItems>
                                        {issues.done.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id.toString()}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`draggable-item ${
                                                            snapshot.isDragging
                                                                ? "dragging"
                                                                : ""
                                                        }`}
                                                    >
                                                        <IssueCard
                                                            title={item.title}
                                                            content={
                                                                item.content
                                                            }
                                                            primary={
                                                                item.primary
                                                            }
                                                            types={item.types}
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </CardItems>
                                </Card>
                            )}
                        </Droppable>
                    </div>
                </DragDropContext>
            )}
        </IssueComponentBlock>
    );
};

const IssueComponentBlock = styled.div`
    .card-block {
        display: flex;
    }
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 30px;
    color: #333;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
`;

const TopIcon = styled.div`
    cursor: pointer;
    margin-bottom: 5px;
`;

const BottomIcons = styled.div`
    display: flex;
    gap: 10px;

    i {
        cursor: pointer;
    }
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid #ccc;
    margin-bottom: 20px;
`;

const SearchArea = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

const SearchInput = styled.input`
    width: 30%;
    margin-left: 65%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

const ListView = styled.div`
    background-color: white;
    border-radius: 5px;
    /* overflow: hidden; */
`;

const TableHeader = styled.div`
    display: flex;
    background-color: #e6f3ff;
    padding: 10px;
`;

const TableBody = styled.div`
    height: 700px;
    overflow-y: scroll;
`;

const HeaderCell = styled.div`
    flex: 1;
    font-weight: bold;
`;

const TableRow = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
    height: 27px;
`;

const Cell = styled.div`
    flex: 1;
    max-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Card = styled.div`
    flex: 1;
    background-color: #e6f3ff;
    border-radius: 5px;
    /* padding: 20px; */
    margin: 10px;
`;

const CardItems = styled.div`
    display: block;
    height: 77vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const CardTitle = styled.h2`
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
    margin-left: 20px;
`;
export default IssueComponent;