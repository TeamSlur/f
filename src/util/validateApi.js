// Validation 함수: 데이터를 검증
export const validateParams = (params, requiredKeys) => {
    if (!params) throw new Error("Params are required.");
    requiredKeys.forEach((key) => {
        if (!(key in params)) {
            throw new Error(`Missing required parameter: ${key}`);
        }
    });
};