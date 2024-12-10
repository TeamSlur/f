import { validateParams } from "../util/validateApi";
import apiCall from "./apiCall";
import { useApiClient } from "./tokenApi";

// develop 객체
const document = {
    getFileInfo: async (data) => {
        const apiClient = useApiClient();

        // 유효성 검사
        validateParams(data.param, ["pid", "did"]);

        // API 호출
        return await apiCall(apiClient, "get", "/api/document/", { params: data.param });
    },

    addDocument : async (data) => {
        const apiClient = useApiClient();

        validateParams(data.param, ["pid", "did"]);
        if (!data.body) throw new Error("Comment body is required to add a comment.");

        return await apiCall(apiClient, "post", "/api/document/add", {
            params : data.param,
            body : data.body
        });
    },

    editDocument : async (data) => {
        const apiClient = useApiClient();

        validateParams(data.param, ["pid","did"]);
        if (!data.body) throw new Error("Comment body is required to add a comment.");

        return await apiCall(apiClient, "put", "/api/document/edit", {
            params : data.param,
            body : data.body
        })
    },

    deleteDocument: async (data) => {
        const apiClient = useApiClient();

        // 유효성 검사
        validateParams(data.param, ["pid", "did"]);

        // API 호출
        return await apiCall(apiClient, "delete", "/api/file/delete/", { params: data.param });
    },
};

export default document;
