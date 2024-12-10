import styled from "styled-components";
import CodeIssueDetailContainer from "../../containers/CodeIssue/CodeIssueDetailContainer";

function CodeIssueDetailPage() {
  return (
    <CodeIssueDetailPageBlock>
      <CodeIssueDetailContainer />
    </CodeIssueDetailPageBlock>
  );
}
const CodeIssueDetailPageBlock = styled.div``;
export default CodeIssueDetailPage;
