import Login from "../pages/Login/Login";
import SearchId from "../pages/Login/SearchId";
import SearchPw from "../pages/Login/SearchPw";
import Register from "../pages/Login/Register";
import Document from "../pages/Develop/Document";
import Issue from "../pages/Develop/Issue";
import TimeLine from "../pages/TimeLine";
import CodeIssuePage from "../pages/CodeIssue/CodeIssuePage";
import CodeIssueDetailPage from "../pages/CodeIssue/CodeIssueDetailPage";
import CodeIssueAddPage from "../pages/CodeIssue/CodeIssueAddPage";

//기본 틀임. 로그인 회원가입은 고정된 레이아웃이 없을거라 여기(사실 역할별로 나눈거)
const publicRoutes = [
  { path: "/", element: Login },
  { path: "/login", element: Login },
  {
    path: "/searchid",
    element: SearchId,
  },
  {
    path: "/searchpw",
    element: SearchPw,
  },
  {
    path: "/register",
    element: Register,
  },
];

const authenticatedRoutes = [
  { path: "/document", element: Document },
  { path: "/issue", element: Issue },
  { path: "/timeline", element: TimeLine },
  { path: "/codeissue", element: CodeIssuePage },
  { path: "/codeissue/detail", element: CodeIssueDetailPage },
  { path: "/codeissue/add", element: CodeIssueAddPage },
];

// 추가로 필요한게 생각나면 위 형식대로 만들면 됨
export { publicRoutes, authenticatedRoutes }; // 여기서 export해주는거 까먹으면 오류남
