/* eslint-disable react-hooks/rules-of-hooks */
import { validateParams } from "../util/validateApi";
import apiCall from "./apiCall";
import { useApiClient } from "./tokenApi";

const issue = {
  getAllIssue: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사: 필요하면 조건 추가
    validateParams(data.param, ["pid", "isid"]);
    if (!data) throw new Error("Data is required to fetch all issues.");

    return await apiCall(apiClient, "get", "/api/issue/", {
      params: data.param,
    });
  },

  getIssueInfo: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data, ["pid", "isid"]);

    return await apiCall(apiClient, "get", `/api/issue/${data.issueId}`);
  },

  editIssue: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid", "isid"]);
    if (!data.body) throw new Error("Body data is required for editing issue.");

    return await apiCall(apiClient, "put", `/api/issue/edit/`, {
      params: data.param,
      body: data.body,
    });
  },

  addIssue: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid"]);
    if (!data.body)
      throw new Error("Body data is required to add a new issue.");

    return await apiCall(apiClient, "post", "/api/issue/add/", {
      params: data.param,
      body: data.body,
    });
  },

  deleteIssue: async (data) => {
    const apiClient = useApiClient();

    // 유효성 검사
    validateParams(data.param, ["pid", "isid"]);

    return await apiCall(apiClient, "delete", "/api/issue/delete/", {
      params: data.param,
    });
  },
};

export default issue;
