import { validateParams } from "../util/validateApi";
import apiCall from "./apiCall";
import { useApiClient } from "./tokenApi";

// develop 객체
const develop = {
    projectConnect: async (data) => {
        const apiClient = useApiClient();

        // 유효성 검사
        validateParams(data.param, ["pid"]);

        // API 호출
        return await apiCall(apiClient, "get", "/api/develop/", { params: data.param });
    },

    connectWebsocket: async (data) => {
        const apiClient = useApiClient();

        // 유효성 검사
        if (!data.param) throw new Error("WebSocket 연결을 위한 데이터가 누락되었습니다.");

        // API 호출
        return await apiCall(apiClient, "post", "/api/develop/connect/", { params: data.param });
    },

    deleteProject: async (data) => {
        const apiClient = useApiClient();

        // 유효성 검사
        validateParams(data.param, ["pid"]);

        // API 호출
        return await apiCall(apiClient, "delete", "/api/develop/delete/", { params: data.param });
    },
};

export default develop;
