import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [projectName, setProjectName] = useState("");

  const navigate = useNavigate();

  const handleDocument = () => {
    navigate("/document");
  };

  const handleIssue = () => {
    navigate("/issue");
  };

  const handleTimeLine = () => {
    navigate("/timeline");
  };

  const getProjectName = () => {
    setProjectName("PROJECT NAME");
  };

  const handleCode = () => {
    navigate("/codeissue");
  };

  useEffect(() => {
    getProjectName();
  }, []);

  return (
    <NavbarBlock>
      <label className="project-name">{projectName}</label>

      <label>CATEGORY</label>
      <NavItem onClick={handleTimeLine}>
        <i className="fa-regular fa-calendar fa-xl"></i>
        <span>TimeLine</span>
      </NavItem>
      <NavItem onClick={handleIssue}>
        <i className="fa-solid fa-wrench fa-xl"></i>
        <span>Issue Ticket</span>
      </NavItem>
      <NavItem onClick={handleCode}>
        <i className="fa-solid fa-code fa-xl"></i>
        <span>Code Issue</span>
      </NavItem>

      <label>DOC</label>
      <NavItem onClick={handleDocument}>
        <i className="fa-solid fa-folder fa-xl"></i>
        <span>document</span>
      </NavItem>
    </NavbarBlock>
  );
};

const NavbarBlock = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  height: 100vh;
  border-right: solid 1px silver;

  label {
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .project-name {
    font-size: 1.7em;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  &:hover {
    background-color: #e9ecef;
  }
  i {
    margin-right: 10px;
  }
`;
export default Navbar;
