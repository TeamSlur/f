// Recoil 상태를 업데이트하기 위한 커스텀 훅
import { useSetRecoilState } from "recoil";
import { rc_codes, rc_documents, rc_issues } from "../store/project";

import develop from "../apis/develop";

export const useProjectConnect = () => {
    const setIssues = useSetRecoilState(rc_issues);
    const setDocuments = useSetRecoilState(rc_documents);
    const setCodes = useSetRecoilState(rc_codes);

    return async (data) => {
        try {
            const result = await develop.projectConnect(data);
            const {issue = [], document = [], code = []} = result || {};

            // Recoil 상태 업데이트
            setIssues(issue.map(item => item.issue_id));
            setDocuments(document.map(item => item.document_id));
            setCodes(code.map(item => item.code_id));

            return result; // 호출한 측에 데이터 반환
        } catch (err) {
            console.error("Failed to connect project:", err);
            throw err;
        }
    }; // 함수를 반환
};