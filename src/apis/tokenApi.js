/* eslint-disable no-undef */
import axios from "axios";
import { rc_userInfo } from "../store/user";

export const useApiClient = () => {
  const token = useRecoilValue(rc_userInfo);

  const apiClient = axios.create({
    baseURL: "https://localhost:8080",
  });

  // 요청 인터셉터
  apiClient.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return apiClient;
};
