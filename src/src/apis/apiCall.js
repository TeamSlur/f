const apiCall = async (apiClient, method, url, { params, body } = {}) => {
    try {
        const response = await apiClient[method](url, body, { params });
        return response.data;
    } catch (error) {
        console.error(`Error in API call to ${url}:`, error);
        throw error;
    }
};

export default apiCall;