/* eslint-disable react-hooks/rules-of-hooks */
import { validateParams } from "../util/validateApi";
import apiCall from "./apiCall";
import { useApiClient } from "./tokenApi";

// develop 객체
const file = {
  getAllFile: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid"]);

    // API 호출
    return await apiCall(apiClient, "get", "/api/file/", {
      params: data.param,
    });
  },

  getFileInfo: async (data) => {
    const apiClient = useApiClient();

    validateParams(data.param, ["pid", "fid"]);

    // API 호출
    return await apiCall(apiClient, "get", "/api/file/", {
      params: data.param,
    });
  },

  addFile: async (data) => {
    const apiClient = useApiClient();

    validateParams(data.param, ["pid"]);
    if (!data.body)
      throw new Error("Comment body is required to add a comment.");

    return await apiCall(apiClient, "post", "/api/file/add", {
      params: data.param,
      body: data.body,
    });
  },

  editFile: async (data) => {
    const apiClient = useApiClient();

    validateParams(data.param, ["pid"]);
    if (!data.body)
      throw new Error("Comment body is required to add a comment.");

    return await apiCall(apiClient, "put", "/api/file/edit", {
      params: data.param,
      body: data.body,
    });
  },

  deleteFile: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid", "fid"]);

    // API 호출
    return await apiCall(apiClient, "delete", "/api/file/delete/", {
      params: data.param,
    });
  },
};

export default file;
