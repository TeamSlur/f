/* eslint-disable no-undef */
import axios from "axios";
import { rc_token } from "../store/user";
import { useRecoilValue } from "recoil";

export const UseApiClient = () => {
  const token = useRecoilValue(rc_token);

  const apiClient = axios.create({
    baseURL: "http://localhost:8080",
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
