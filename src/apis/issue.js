// issue.js
import { validateParams } from "../util/validateApi";
import apiCall from "./apiCall";

const issue = {
  getAllIssue: async (apiClient, data) => {
    // 유효성 검사
    if (!data) throw new Error("Data is required to fetch all issues.");
    // validateParams(data.param, ["pid", "isid"]);

    return await apiCall(apiClient, "get", "/api/issue/all", {
      params: data.param,
    });
  },

  getIssueInfo: async (apiClient, data) => {
    validateParams(data, ["pid", "isid"]);
    return await apiCall(apiClient, "get", `/api/issue/${data.issueId}`);
  },

  editIssue: async (apiClient, data) => {
    validateParams(data.param, ["pid", "isid"]);
    if (!data.body) throw new Error("Body data is required for editing issue.");

    return await apiCall(apiClient, "put", `/api/issue/edit/`, {
      params: {
        pid: 1,
      },
      body: data.body,
    });
  },

  addIssue: async (apiClient, data) => {
    validateParams({ pid: 1 }, ["pid"]);
    if (!data.body)
      throw new Error("Body data is required to add a new issue.");

    return await apiCall(apiClient, "post", "/api/issue/add", {
      params: { pid: 1 },
      body: data.body,
    });
  },

  deleteIssue: async (apiClient, data) => {
    validateParams(data.param, ["pid", "isid"]);
    return await apiCall(apiClient, "delete", "/api/issue/delete/", {
      params: data.param,
    });
  },
};

export default issue;
