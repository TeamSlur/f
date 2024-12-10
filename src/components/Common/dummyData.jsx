// const dummyData = [
//     {
//         title: "제목 1", // 이슈 제목
//         content: "이슈 내용 들어갈 자리", // 이슈 내용
//         primary: 1, // 이유 우선순위
//         types: "버그", // 이슈 유형
//         status: "progress", //이슈의 상태
//     },
//     {
//         title: "제목 2",
//         content:
//             "긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 ",
//         primary: 2,
//         types: "새 기능",
//         status: "confirm",
//     },
//     {
//         title: "제목 3",
//         content: "test",
//         primary: 3,
//         types: "개선",
//         status: "done",
//     },
//     {
//         title: "제목 4",
//         content: "이슈 내용 들어갈 자리",
//         primary: 1,
//         types: "이슈",
//         status: "confirm",
//     },
//     {
//         title: "test",
//         content: "test",
//         primary: 1,
//         types: "버그",
//         status: "progress",
//     },
//     {
//         title: "test",
//         content: "test",
//         primary: 1,
//         types: "개선",
//         status: "done",
//     },
//     {
//         title: "제목 4",
//         content: "이슈 내용 들어갈 자리",
//         primary: 1,
//         types: "이슈",
//         status: "confirm",
//     },
//     {
//         title: "test",
//         content: "test",
//         primary: 1,
//         types: "버그",
//         status: "progress",
//     },
//     {
//         title: "test",
//         content: "test",
//         primary: 1,
//         types: "개선",
//         status: "done",
//     },
//     {
//         title: "제목 4",
//         content: "이슈 내용 들어갈 자리",
//         primary: 1,
//         types: "이슈",
//         status: "confirm",
//     },
//     {
//         title: "test",
//         content: "test",
//         primary: 1,
//         types: "버그",
//         status: "progress",
//     },
//     {
//         title: "test",
//         content: "test",
//         primary: 1,
//         types: "개선",
//         status: "done",
//     },
//     {
//         title: "제목 1", // 이슈 제목
//         content: "이슈 내용 들어갈 자리", // 이슈 내용
//         primary: 1, // 이유 우선순위
//         types: "버그", // 이슈 유형
//         status: "progress",
//     },
//     {
//         title: "제목 2",
//         content:
//             "긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 ",
//         primary: 2,
//         types: "새 기능",
//         status: "confirm",
//     },
//     {
//         title: "제목 3",
//         content: "test",
//         primary: 3,
//         types: "개선",
//         status: "done",
//     },
//     {
//         title: "제목 1", // 이슈 제목
//         content: "이슈 내용 들어갈 자리", // 이슈 내용
//         primary: 1, // 이유 우선순위
//         types: "버그", // 이슈 유형
//         status: "progress",
//     },
//     {
//         title: "제목 2",
//         content:
//             "긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 긴 글 테스트 ",
//         primary: 2,
//         types: "새 기능",
//         status: "confirm",
//     },
//     {
//         title: "제목 3",
//         content: "test",
//         primary: 3,
//         types: "개선",
//         status: "done",
//     },
// ];

/*
const dummyData = [
    {
        taskCategory: "TASK 01", // 작업 분류
        title: "이슈 1", // 이슈 제목
        content: "버그 수정 작업 진행 중입니다.", // 이슈 내용
        primary: 1, // 우선순위
        types: "버그", // ISSUE_TAG
        status: "progress", // 이슈 상태
        relatedIssues: ["이슈 2", "이슈 5"], // 연결된 이슈
        createdBy: "사용자 A", // 만든 사람 uid
        createdAt: "2024-11-19", // 만든날
        updatedAt: "2024-11-19", // 최종 수정날
    },
    {
        taskCategory: "TASK 01",
        title: "이슈 2",
        content: "새로운 기능 기획 완료.",
        primary: 2,
        types: "새 기능",
        status: "confirm",
        relatedIssues: [],
        createdBy: "사용자 B",
        createdAt: "2024-11-18",
        updatedAt: "2024-11-18",
    },
    {
        taskCategory: "TASK 01",
        title: "이슈 3",
        content: "API 연동 작업 진행 중입니다.",
        primary: 3,
        types: "버그",
        status: "progress",
        relatedIssues: ["이슈 4"],
        createdBy: "사용자 C",
        createdAt: "2024-11-17",
        updatedAt: "2024-11-17",
    },
    {
        taskCategory: "TASK 01",
        title: "이슈 4",
        content: "UI 개선 작업 필요.",
        primary: 1,
        types: "개선",
        status: "confirm",
        relatedIssues: [],
        createdBy: "사용자 D",
        createdAt: "2024-11-16",
        updatedAt: "2024-11-16",
    },
    {
        taskCategory: "TASK 02",
        title: "이슈 5",
        content: "로그인 페이지 버그 수정 중.",
        primary: 2,
        types: "버그",
        status: "progress",
        relatedIssues: ["이슈 6"],
        createdBy: "사용자 E",
        createdAt: "2024-11-15",
        updatedAt: "2024-11-15",
    },
    {
        taskCategory: "TASK 02",
        title: "이슈 6",
        content: "서버 연결 테스트 완료.",
        primary: 3,
        types: "이슈",
        status: "done",
        relatedIssues: [],
        createdBy: "사용자 F",
        createdAt: "2024-11-14",
        updatedAt: "2024-11-14",
    },
    {
        taskCategory: "TASK 02",
        title: "이슈 7",
        content: "데이터베이스 설계 진행 중입니다.",
        primary: 1,
        types: "새 기능",
        status: "progress",
        relatedIssues: ["이슈 8"],
        createdBy: "사용자 G",
        createdAt: "2024-11-13",
        updatedAt: "2024-11-13",
    },
    {
        taskCategory: "TASK 03",
        title: "이슈 8",
        content: "배포 환경 설정 완료.",
        primary: 2,
        types: "이슈",
        status: "done",
        relatedIssues: [],
        createdBy: "사용자 H",
        createdAt: "2024-11-12",
        updatedAt: "2024-11-12",
    },
    {
        taskCategory: "TASK 03",
        title: "이슈 9",
        content: "코드 리뷰 및 피드백 적용 중.",
        primary: 3,
        types: "개선",
        status: "progress",
        relatedIssues: ["이슈 10"],
        createdBy: "사용자 I",
        createdAt: "2024-11-11",
        updatedAt: "2024-11-11",
    },
    {
        taskCategory: "TASK 03",
        title: "이슈 10",
        content: "문서화 작업 진행 중입니다.",
        primary: 1,
        types: "이슈",
        status: "confirm",
        relatedIssues: [],
        createdBy: "사용자 J",
        createdAt: "2024-11-10",
        updatedAt: "2024-11-10",
    },
    {
        taskCategory: "TASK 04",
        title: "이슈 11",
        content: "사용자 매뉴얼 작성 중.",
        primary: 2,
        types: "새 기능",
        status: "progress",
        relatedIssues: ["이슈 12"],
        createdBy: "사용자 K",
        createdAt: "2024-11-09",
        updatedAt: "2024-11-09",
    },
    {
        taskCategory: "TASK 04",
        title: "이슈 12",
        content: "기능 추가 요청 검토 중.",
        primary: 3,
        types: "개선",
        status: "progress",
        relatedIssues: [],
        createdBy: "사용자 L",
        createdAt: "2024-11-08",
        updatedAt: "2024-11-08",
    },
    {
        taskCategory: "TASK 04",
        title: "이슈 13",
        content: "유지보수 계획 수립 중.",
        primary: 1,
        types: "이슈",
        status: "progress",
        relatedIssues: ["이슈 14"],
        createdBy: "사용자 M",
        createdAt: "2024-11-07",
        updatedAt: "2024-11-07",
    },
    {
        taskCategory: "TASK 05",
        title: "이슈 14",
        content: "네트워크 문제 해결 완료.",
        primary: 2,
        types: "버그",
        status: "done",
        relatedIssues: [],
        createdBy: "사용자 N",
        createdAt: "2024-11-06",
        updatedAt: "2024-11-06",
    },
    {
        taskCategory: "TASK 05",
        title: "이슈 15",
        content: "보안 업데이트 진행 중.",
        primary: 3,
        types: "버그",
        status: "progress",
        relatedIssues: ["이슈 16"],
        createdBy: "사용자 O",
        createdAt: "2024-11-05",
        updatedAt: "2024-11-05",
    },
    {
        taskCategory: "TASK 05",
        title: "이슈 16",
        content: "API 문서 작성 완료.",
        primary: 1,
        types: "새 기능",
        status: "done",
        relatedIssues: [],
        createdBy: "사용자 P",
        createdAt: "2024-11-04",
        updatedAt: "2024-11-04",
    },
    {
        taskCategory: "TASK 06",
        title: "이슈 17",
        content: "팀별 작업 분배 완료.",
        primary: 2,
        types: "이슈",
        status: "done",
        relatedIssues: [],
        createdBy: "사용자 Q",
        createdAt: "2024-11-03",
        updatedAt: "2024-11-03",
    },
    {
        taskCategory: "TASK 06",
        title: "이슈 18",
        content: "테스트 자동화 진행 중.",
        primary: 3,
        types: "새 기능",
        status: "progress",
        relatedIssues: ["이슈 19"],
        createdBy: "사용자 R",
        createdAt: "2024-11-02",
        updatedAt: "2024-11-02",
    },
    {
        taskCategory: "TASK 06",
        title: "이슈 19",
        content: "QA 피드백 수집 완료.",
        primary: 1,
        types: "개선",
        status: "done",
        relatedIssues: [],
        createdBy: "사용자 S",
        createdAt: "2024-11-01",
        updatedAt: "2024-11-01",
    },
    {
        taskCategory: "TASK 07",
        title: "이슈 20",
        content: "신규 프로젝트 기획 중입니다.",
        primary: 2,
        types: "새 기능",
        status: "progress",
        relatedIssues: ["이슈 21"],
        createdBy: "사용자 T",
        createdAt: "2024-10-31",
        updatedAt: "2024-10-31",
    },
    {
        taskCategory: "TASK 07",
        title: "이슈 21",
        content: "기술 검토 진행 중.",
        primary: 3,
        types: "이슈",
        status: "confirm",
        relatedIssues: [],
        createdBy: "사용자 U",
        createdAt: "2024-10-30",
        updatedAt: "2024-10-30",
    },
    {
        taskCategory: "TASK 07",
        title: "이슈 22",
        content: "코드 컨벤션 정리 완료.",
        primary: 1,
        types: "개선",
        status: "done",
        relatedIssues: [],
        createdBy: "사용자 V",
        createdAt: "2024-10-29",
        updatedAt: "2024-10-29",
    },
    {
        taskCategory: "TASK 08",
        title: "이슈 23",
        content: "서비스 안정화 작업 진행 중.",
        primary: 2,
        types: "버그",
        status: "progress",
        relatedIssues: ["이슈 24"],
        createdBy: "사용자 W",
        createdAt: "2024-10-28",
        updatedAt: "2024-10-28",
    },
    {
        taskCategory: "TASK 08",
        title: "이슈 24",
        content: "백엔드 최적화 중입니다.",
        primary: 3,
        types: "새 기능",
        status: "progress",
        relatedIssues: ["이슈 25"],
        createdBy: "사용자 X",
        createdAt: "2024-10-27",
        updatedAt: "2024-10-27",
    },
    {
        taskCategory: "TASK 08",
        title: "이슈 25",
        content: "사용자 인터페이스 개선 완료.",
        primary: 1,
        types: "개선",
        status: "done",
        relatedIssues: [],
        createdBy: "사용자 Y",
        createdAt: "2024-10-26",
        updatedAt: "2024-10-26",
    },
];
*/

const dummyData = [
    {
        taskCategory: "TASK 01", // 작업 분류
        title: "이슈 1", // 이슈 제목
        content: "버그 수정 작업 진행 중입니다.", // 이슈 내용
        primary: 1, // 우선순위
        types: "버그", // ISSUE_TAG
        status: "progress", // 이슈 상태
        relatedIssues: ["이슈 2", "이슈 5"], // 연결된 이슈
        createdBy: "사용자 A", // 만든 사람 uid
        createdAt: "2024-11-19", // 만든날
        updatedAt: "2024-11-19", // 최종 수정날
        start_date: "2024-11-12", // 시작 날짜
        end_date: "2024-11-20", // 끝 날짜
    },
    {
        taskCategory: "TASK 01",
        title: "이슈 2",
        content: "새로운 기능 기획 완료.",
        primary: 2,
        types: "새 기능",
        status: "confirm",
        relatedIssues: [],
        createdBy: "사용자 B",
        createdAt: "2024-11-18",
        updatedAt: "2024-11-18",
        start_date: "2024-11-01", // 시작 날짜
        end_date: "2024-11-10", // 끝 날짜
    },
    {
        taskCategory: "TASK 01",
        title: "이슈 3",
        content: "API 연동 작업 진행 중입니다.",
        primary: 3,
        types: "버그",
        status: "progress",
        relatedIssues: ["이슈 4"],
        createdBy: "사용자 C",
        createdAt: "2024-11-17",
        updatedAt: "2024-11-17",
        start_date: "2024-11-12", // 시작 날짜
        end_date: "2024-11-20", // 끝 날짜
    },
];

export default dummyData;
