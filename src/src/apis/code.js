import { validateParams } from "../util/validateApi";
import apiCall from "./apiCall";
import { useApiClient } from "./tokenApi";

// develop 객체
const code = {
    getAllCode: async (data) => {
        const apiClient = useApiClient();

        // 유효성 검사
        validateParams(data.param, ["pid"]);

        // API 호출
        return await apiCall(apiClient, "get", "/api/code/", { params: data.param });
    },

    getCodeInfo: async (data) => {
        const apiClient = useApiClient();

        // 유효성 검사
        validateParams(data.param, ["pid", "cid"]);

        // API 호출
        return await apiCall(apiClient, "get", "/api/code/", { params: data.param });
    },

    addCode : async (data) => {
        const apiClient = useApiClient();

        validateParams(data.param, ["pid"]);
        if (!data.body) throw new Error("Comment body is required to add a comment.");

        return await apiCall(apiClient, "post", "/api/code/add/", {
            params : data.head,
            body : data.body
        });
    },

    editCode : async (data) => {
        const apiClient = useApiClient();

        validateParams(data.param, ["pid"]);
        if (!data.body) throw new Error("Comment body is required to add a comment.");

        return await apiCall(apiClient, "put", "/api/code/edit/", {
            params : data.head,
            body : data.body
        });
    },

    deleteCode: async (data) => {
        const apiClient = useApiClient();

        // 유효성 검사
        validateParams(data.param, ["pid", "cid"]);

        // API 호출
        return await apiCall(apiClient, "delete", "/api/code/delete/", { params: data.param });
    },
};

export default code;
