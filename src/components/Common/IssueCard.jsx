import styled from "styled-components";
import IssueRank from "./IssueRank";
import IssueType from "./IssueType";

const IssueCard = ({ title, content, primary, types }) => {
    return (
        <IssueCardBlock>
            <TopLine>
                <IssueRank rank={primary} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <IssueType type={types} />
                    <div
                        className="ellip"
                        onClick={() => {
                            alert("clicked");
                        }}
                    >
                        <i
                            class="fa-solid fa-ellipsis-vertical"
                            style={{ marginLeft: "10px" }}
                        ></i>
                    </div>
                </div>
            </TopLine>
            <h3>{title}</h3>
            <div
                style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: "41px",
                }}
            >
                {content}
            </div>
        </IssueCardBlock>
    );
};

const TopLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const IssueCardBlock = styled.div`
    background-color: #fcfcfc;
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 20px;
    margin-right: 15px;
    margin-left: 15px;
    height: 130px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    min-width: 200px;

    .ellip {
        padding-right: 10px;
        padding-bottom: 3px;
        padding-top: 3px;
    }
`;
export default IssueCard;
