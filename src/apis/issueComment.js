/* eslint-disable react-hooks/rules-of-hooks */
import { validateParams } from "../util/validateApi";
import apiCall from "./apiCall";
import { useApiClient } from "./tokenApi";

const issueComment = {
  getComment: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid", "isid"]);

    // API 호출
    return await apiCall(apiClient, "get", "/api/issue/comment/", {
      params: data.param,
    });
  },

  addComment: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid"]);
    if (!data.body)
      throw new Error("Comment body is required to add a comment.");

    // API 호출
    return await apiCall(apiClient, "post", "/api/issue/comment/add/", {
      params: data.param,
      body: data.body,
    });
  },

  editComment: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid"]);
    if (!data.body)
      throw new Error("Comment body is required to edit a comment.");

    // API 호출
    return await apiCall(apiClient, "put", "/api/issue/comment/edit/", {
      params: data.param,
      body: data.body,
    });
  },

  deleteComment: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid"]);

    // API 호출
    return await apiCall(apiClient, "delete", "/api/issue/comment/delete/", {
      params: data.param,
    });
  },
};

export default issueComment;
