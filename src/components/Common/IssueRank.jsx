import styled from "styled-components";

const IssueRank = ({ rank }) => {
    return (
        <IssueRankBlock className="drag-prevent" rank={rank}>
            <ContentWrapper>
                <span>{rank} 순위</span>
            </ContentWrapper>
        </IssueRankBlock>
    );
};

const IssueRankBlock = styled.div`
    width: 70px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 0.85em;
    background-color: ${({ rank }) => {
        switch (rank) {
            case 1:
                return "#f72323";
            case 2:
                return "#2f60e6";
            case 3:
                return "green";
            default:
                return "black";
        }
    }};
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default IssueRank;
