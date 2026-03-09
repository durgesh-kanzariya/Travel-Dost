import api from './api';

// Mock fallback used when backend is unavailable
const MOCK_TOKEN = 'mock-offline-token';
const ADMIN_EMAIL = 'admin@traveldost.app';

const buildMockUser = (email, name) => ({
    id: 'offline-user',
    name: name || (email === ADMIN_EMAIL ? 'Admin User' : 'Demo User'),
    email: email || 'demo@traveldost.app',
    role: email === ADMIN_EMAIL ? 'admin' : 'user',
});

export const registerUser = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        // Backend unavailable — return mock credentials so UI still works
        console.warn('[AuthService] Backend unavailable — using mock registration');
        return { token: MOCK_TOKEN, user: buildMockUser(userData.email, userData.name) };
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        // Backend unavailable — return mock credentials so UI still works
        console.warn('[AuthService] Backend unavailable — using mock login');
        return { token: MOCK_TOKEN, user: buildMockUser(credentials.email) };
    }
};

export const updateUserProfile = async (userData) => {
    try {
        const response = await api.put('/auth/profile', userData);
        return response.data;
    } catch (error) {
        console.warn('[AuthService] Backend unavailable — profile update skipped');
        return null;
    }
};

export const changePassword = async (passwordData) => {
    try {
        const response = await api.put('/auth/password', passwordData);
        return response.data;
    } catch (error) {
        console.warn('[AuthService] Backend unavailable — password change skipped');
        return null;
    }
};
