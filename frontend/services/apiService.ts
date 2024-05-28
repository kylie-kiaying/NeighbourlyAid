import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await api.post(`/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Failed to login", error.response?.data || error.message);
        throw error;
    }
};
