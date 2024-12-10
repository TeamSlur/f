import styled from "styled-components";
import Navbar from "./Navbar";
import Header from "./Header";
import { useState } from "react";
import ChatModal from "../Chat/ChatModal";

const Layout = ({ children }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(false);

    const openChat = () => setIsChatOpen(true);
    //const closeChat = () => setIsChatOpen(false);
    const closeChat = () => {
        setIsChatOpen(false);
        setIsPinned(false);
    };
    const togglePin = () => setIsPinned((prev) => !prev);

    return (
        <LayoutWrapper>
            <Header />
            <FixedNavBar>
                <Navbar />
            </FixedNavBar>
            <ContentArea isPinned={isPinned}>{children}</ContentArea>
            {isChatOpen && (
                <ChatModal
                    isOpen={isChatOpen}
                    onClose={closeChat}
                    userName="myUsername"
                    isPinned={isPinned}
                    togglePin={togglePin}
                />
            )}
            <ChatButton onClick={openChat}>
                <i className="fa-solid fa-arrow-left"></i>
            </ChatButton>
        </LayoutWrapper>
    );
};

const LayoutWrapper = styled.div`
    display: flex;
    height: 100vh;
`;

const FixedNavBar = styled.div`
    width: 240px;
    height: 100%;
    overflow-y: auto;
`;

const ContentArea = styled.div`
    flex: 1;
    padding: 20px;
    transition: margin-right 0.3s ease;
    margin-right: ${({ isPinned }) => (isPinned ? "20%" : "0%")};
`;

const ChatButton = styled.button`
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #0078ff;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-right: 5px;

    &:hover {
        background: #0056b3;
    }
`;

export default Layout;
