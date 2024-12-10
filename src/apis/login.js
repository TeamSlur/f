import axios from "axios";
const address = "http://localhost:8080";
const login = {
  login: async (data) => {
    // Validate input
    if (!data?.username) {
      throw new Error("아이디 값이 필요합니다."); // 400 에러 메시지
    }
    if (!data?.password) {
      throw new Error("비밀번호 값이 필요합니다."); // 400 에러 메시지
    }

    try {
      const response = await axios.post(address + "/api/login", data);
      return response.data; // 로그인 성공 시 데이터를 반환
    } catch (error) {
      console.error("Login failed:", error);
      alert(`로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요`);

      // 서버에서 반환된 상태 코드 및 메시지에 따라 예외 처리
      const message = error.response?.data?.message;
      if (error.response.data.status === 401) {
        throw new Error(message);
      }
    }
  },

  signup: async (data) => {
    // Validate input
    if (!data?.username) {
      throw new Error("아이디 값이 필요합니다."); // 400 에러 메시지
    }
    if (!data?.password) {
      throw new Error("비밀번호 값이 필요합니다."); // 400 에러 메시지
    }
    if (!data?.nickname) {
      throw new Error("닉네임 값이 필요합니다."); // 400 에러 메시지
    }
    // if (!data?.role) {
    //     throw new Error("역할 값이 필요합니다."); // 400 에러 메시지
    // }
    if (!data?.email) {
      throw new Error("이메일 값이 필요합니다."); // 400 에러 메시지
    }
    if (!data?.role) {
      throw new Error("직책 값이 필요합니다."); // 400 에러 메시지
    }

    try {
      const response = await axios.post(address + "/api/login/signup", data);
      return response.data; // 회원가입 성공 시 데이터를 반환
    } catch (error) {
      console.error("Signup failed:", error);

      const message = error.response?.data?.message;
      if (error.response?.data?.status === 401) {
        throw new Error(message);
      }
    }
  },

  checkDuplicateId: async (data) => {
    // Validate input
    if (!data?.username) {
      throw new Error("아이디 값이 필요합니다."); // 400 에러 메시지
    }

    try {
      const response = await axios.post("/api/login/signup/duple/id", data);
      return response.data; // 아이디 중복 확인 성공 시 데이터를 반환
    } catch (error) {
      console.error("Duplicate check failed:", error);

      const message = error.response?.data?.message;
      if (error.response?.data?.status === 401) {
        throw new Error(message);
      }
    }
  },

  checkDuplicateEmail: async (data) => {
    // Validate input
    if (!data?.email) {
      throw new Error("이메일 값이 필요합니다."); // 400 에러 메시지
    }

    try {
      const response = await axios.post("/api/login/signup/duple/email", data);
      return response.data; // 이메일 중복 확인 성공 시 데이터를 반환
    } catch (error) {
      console.error("Duplicate email check failed:", error);

      const message = error.response?.data?.message;

      if (error.response?.data?.status === 401) {
        throw new Error(message);
      }
    }
  },

  searchId: async (data) => {
    // Validate input
    if (!data?.email) {
      throw new Error("이메일 값이 필요합니다."); // 400 에러 메시지
    }

    try {
      const response = await axios.post("/api/login/search/id", data);
      return response.data; // 아이디 검색 성공 시 데이터를 반환
    } catch (error) {
      console.error("Search ID failed:", error);

      const message = error.response?.data?.message;

      if (error.response?.data?.status === 401) {
        throw new Error(message);
      }
    }
  },

  searchPassword: async (data) => {
    // Validate input
    if (!data?.username) {
      throw new Error("아이디 값이 필요합니다."); // 400 에러 메시지
    }

    try {
      const response = await axios.post("/api/login/search/password", data);
      return response.data; // 비밀번호 검색 성공 시 데이터를 반환
    } catch (error) {
      console.error("Search password failed:", error);

      const message = error.response?.data?.message;

      if (error.response?.data?.status === 401) {
        throw new Error(message);
      }
    }
  },
};

export default login;

// login.login({username: "test", password: "test"}).then(r => r.status == 200 ? 성공 : status == 400 401);
