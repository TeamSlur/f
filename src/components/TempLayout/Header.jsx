import styled from "styled-components";
import ChatModal from "../Chat/ChatModal";
import { useState } from "react";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userName = "myUsername";

    // 모달 열기
    const openModal = () => setIsModalOpen(true);

    // 모달 닫기
    const closeModal = () => setIsModalOpen(false);

    return (
        <Headerblock>
            <div className="header-items-top drag-prevent">
                <div className="header-item first">
                    <i className="fa-regular fa-image"></i>
                </div>
                <div className="header-item">
                    <i className="fa-solid fa-table-columns"></i>
                </div>
                <div className="header-item">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="header-item" onClick={openModal}>
                    <i className="fa-solid fa-message"></i>
                </div>
                <ChatModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    userName={userName}
                />
            </div>

            <div className="header-items-bottom drag-prevent">
                <div className="header-item">
                    <i className="fa-regular fa-bell"></i>
                </div>
                <div className="header-item">
                    <i className="fa-solid fa-gear"></i>
                </div>
            </div>
        </Headerblock>
    );
};

const Headerblock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 100vh;
    border-right: solid 1px silver;

    .header-items-top {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header-items-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
    .header-item {
        margin-top: 10px;
        margin-bottom: 10px;
        i {
            font-size: 2.5em;
        }
    }
    .first {
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;

export default Header;
