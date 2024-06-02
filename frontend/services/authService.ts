import api from '../utils/api';

interface AuthResponse {
    access_token: string;
    token_type: string;
    user: {
        id: number;
        email: string;
        username: string;
        profile_picture?: string;
        bio?: string;
    };
}

interface UserCredentials {
    email: string;
    password: string;
}

export const loginUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/login', credentials);
    return response.data;
}

export const registerUser = async (credentials: UserCredentials & { username: string }): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/register', credentials);
    return response.data;
}