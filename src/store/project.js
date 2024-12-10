import { atom } from "recoil";

export const rc_issues = atom({
    key: "rc_issues",
    default: [], // 초기값: 빈 배열
});

export const rc_documents = atom({
    key: "rc_documents",
    default: [], // 초기값: 빈 배열
});

export const rc_codes = atom({
    key: "rc_codes",
    default: [], // 초기값: 빈 배열
});