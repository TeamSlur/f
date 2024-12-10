import React from "react";
import styled from "styled-components";
import IssueContainer from "../../containers/Issue/IssueContainer";

const Issue = () => {
    return (
        <IssuePageBlock>
            <IssueContainer />
        </IssuePageBlock>
    );
};

const IssuePageBlock = styled.div``;
export default Issue;
