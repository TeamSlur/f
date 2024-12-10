/* eslint-disable react-hooks/rules-of-hooks */
import { validateParams } from "../util/validateApi";
import apiCall from "./apiCall";
import { useApiClient } from "./tokenApi";

// develop 객체
const codeComment = {
  getcodeComment: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid", "cid"]);

    // API 호출
    return await apiCall(apiClient, "get", "/api/code/comment", {
      params: data.param,
    });
  },

  addCodeComment: async (data) => {
    const apiClient = useApiClient();

    validateParams(data.param, ["pid"]);
    if (!data.body)
      throw new Error("Comment body is required to add a comment.");

    return await apiCall(apiClient, "post", "/api/code/comment/add/", {
      params: data.head,
      body: data.body,
    });
  },

  editCodeComment: async (data) => {
    const apiClient = useApiClient();

    validateParams(data.param, ["pid"]);
    if (!data.body)
      throw new Error("Comment body is required to add a comment.");

    return await apiCall(apiClient, "put", "/api/code/comment/edit/", {
      params: data.head,
      body: data.body,
    });
  },

  deleteCodeComment: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid", "cid"]);

    // API 호출
    return await apiCall(apiClient, "delete", "/api/code/comment/delete/", {
      params: data.param,
    });
  },
};

export default codeComment;
