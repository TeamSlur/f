/* eslint-disable no-use-before-define */
import { useState } from "react";
import LoginComponent from "../../components/Login/LoginComponent";
import { useNavigate } from "react-router-dom";
import login from "../../apis/login";

//필요한 변수 선언, 함수 정의 등등 처리 후 propDatas로 컴포넌트파일에 넘긴다
const LoginContainer = () => {
  const navigate = useNavigate();

  // 보통은 useState사용해서 변수 선언
  // const [id, setId] = useState("");
  // const [pw, setPw] = useState("");

  // 로그인 처리 함수
  const handleSignin = async () => {
    if (userId && userPw) {
      try {
        // 로그인 요청
        const response = await login.login({
          username: userId,
          password: userPw,
        });

        if (response) {
          // 성공 시 페이지 이동
          navigate("/issue");
        }
      } catch (err) {
        alert(`로그인 실패: ${err.message}`);
        if (err.message) {
          alert(`로그인 실패: ${err.message}`);
        } else {
          alert("로그인 도중 오류가 발생했습니다.");
        }
      }
    } else {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
  };

  // 상태 관리: id, pw, 에러 상태
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);

  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  // 아이디 입력 처리 함수
  const handleIdChange = (e) => {
    setId(e.target.value);
    if (e.target.value !== "") {
      setIdError(false); // 에러 숨김
    }
  };

  // 비밀번호 입력 처리 함수
  const handlePwChange = (e) => {
    setPw(e.target.value);
    if (e.target.value !== "") {
      setPwError(false); // 에러 숨김
    }
  };

  // 로그인 버튼 클릭 시 처리
  const handleFormSubmit = () => {
    // 입력값이 없으면 에러 메시지 표시
    if (userId === "") {
      setIdError(true);
    }
    if (userPw === "") {
      setPwError(true);
    }

    // 입력값이 있으면 로그인 처리
    if (userId !== "" && userPw !== "") {
      handleSignin();
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const propData = {
    userId,
    userPw,
    idError,
    pwError,
    handleSignin,
    handleIdChange,
    handlePwChange,
    handleFormSubmit,
    handleNavigate,
    isModalOpen,
    openModal,
    closeModal,
  };

  return <LoginComponent {...propData} />;
};

export default LoginContainer;
