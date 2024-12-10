import styled from "styled-components";
import CodeIssueAddContainer from "../../containers/CodeIssue/CodeIssueAddContainer";

function CodeIssueAddPage() {
  return (
    <CodeIssueAddPageBlock>
      <CodeIssueAddContainer />
    </CodeIssueAddPageBlock>
  );
}
const CodeIssueAddPageBlock = styled.div``;
export default CodeIssueAddPage;
