import React from "react";
import styled from "styled-components";
import dummyData from "../Common/dummyData";
import IssueAddModal from "../../pages/IssueAddModal";

const TimeLineComponent = (props) => {
  const {
    isTimeLineView,
    openTasks,
    tasksArray,
    toggleTask,
    timelineView,
    isModalOpen,
    openModal,
    closeModal,
    modalType,
  } = props;

  // 타임라인에 표시할 시작일과 끝일 범위 설정
  const startDate = new Date("2024-11-01");
  const endDate = new Date("2024-11-30");

  // 월 단위로 가로 스크롤을 위한 날짜 배열 생성
  const months = [];
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    months.push(new Date(currentDate));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  // 날짜가 해당 월에 포함되는지 확인하는 함수
  const isInMonthRange = (start, end, targetDate) => {
    const targetMonth = targetDate.getMonth();
    return (
      targetDate >= new Date(start.getFullYear(), targetMonth, 1) &&
      targetDate <= new Date(end.getFullYear(), targetMonth + 1, 0)
    );
  };

  return (
    <TimeLineComponentBlock>
      <Header>
        <Title>TimeLine</Title>
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
              onClick={timelineView}
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

      {isTimeLineView ? (
        <>
          <TimeLineTable>
            <thead>
              <tr>
                <th>Issue Title</th>
                {months.map((month, index) => (
                  <th key={index}>
                    {month.toLocaleString("default", {
                      month: "short",
                    })}{" "}
                    {month.getFullYear()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dummyData.map((issue, index) => (
                <tr key={index}>
                  <td>{issue.title}</td>
                  {months.map((month, monthIndex) => {
                    const start = new Date(issue.start_date);
                    const end = new Date(issue.end_date);

                    // 해당 월이 이슈의 시작일과 끝일 범위에 포함되는지 확인
                    const isActive =
                      start.getMonth() <= monthIndex &&
                      end.getMonth() >= monthIndex;

                    return (
                      <td
                        key={monthIndex}
                        style={{
                          backgroundColor: isActive
                            ? "lightblue"
                            : "transparent",
                          height: "30px",
                        }}
                      />
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </TimeLineTable>
        </>
      ) : (
        <Content className="scroll-custom">
          {tasksArray.map((task) => (
            <TaskBlock key={task.taskCategory}>
              <TaskHeader onClick={() => toggleTask(task.taskCategory)}>
                <TaskTitle>
                  {task.taskCategory}
                  <Arrow>{openTasks[task.taskCategory] ? "▲" : "▼"}</Arrow>
                </TaskTitle>
              </TaskHeader>
              <TaskContent isOpen={openTasks[task.taskCategory]}>
                <Table>
                  <thead>
                    <tr>
                      <th>TASK NAME</th>
                      <th>진행도</th>
                      <th>만든 사람</th>
                      <th>연결된 이슈</th>
                      <th>내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {task.issues.map((issue, index) => (
                      <tr key={index}>
                        <td>{issue.title}</td>
                        <td>{issue.status}</td>
                        <td>{issue.createdBy}</td>
                        <td>{issue.relatedIssues.join(", ")}</td>
                        <td>{issue.content}</td>
                      </tr>
                    ))}
                    <tr>
                      <td
                        colSpan="5"
                        onClick={() => alert("이슈 추가 버튼 클릭")}
                        style={{
                          cursor: "pointer",
                          textAlign: "center",
                          color: "blue",
                        }}
                      >
                        +
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </TaskContent>
            </TaskBlock>
          ))}
          {/* <NewTaskBlock onClick={addNewTask}> */}
          <NewTaskBlock>
            <AddButton>+</AddButton>
            <NewTaskText>new task</NewTaskText>
          </NewTaskBlock>
        </Content>
      )}
    </TimeLineComponentBlock>
  );
};

const TimeLineTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  border: 1px solid #ddd;

  th,
  td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f5f5f5;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TimeLineComponentBlock = styled.div`
  width: 100%;
  overflow-x: auto;
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

const Content = styled.div`
  height: 830px;
  overflow-y: auto; /* 세로 스크롤 활성화 */
  overflow-x: hidden; /* 가로 스크롤 비활성화 */
  padding: 0 10px;
`;

const TaskBlock = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
`;

const TaskHeader = styled.div`
  padding: 10px 15px;
  /* background-color: #e6f3ff; */
  background-color: #eee;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Arrow = styled.span`
  font-size: 16px;
`;

const TaskContent = styled.div`
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, padding 0.7s ease-in-out,
    opacity 0.5s ease-in-out;
  padding: ${(props) => (props.isOpen ? "10px 15px" : "0")};
  background-color: #fff;
  opacity: ${(props) => (props.isOpen ? "1" : "0")}; /* 닫힐 때 천천히 사라짐 */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const NewTaskBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 20px 0;
`;

const AddButton = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const NewTaskText = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #333;
`;

export default TimeLineComponent;
