import { STATIC_USERS, STATIC_GUIDES, STATIC_ADMIN_STATS } from '../data/staticData';

let _users = [...STATIC_USERS];
let _guides = [...STATIC_GUIDES];

// Stats
export const getSystemStats = async () => ({ ...STATIC_ADMIN_STATS });

// Users
export const getAllUsers = async () => [..._users];

export const deleteUser = async (userId) => {
    _users = _users.filter((u) => u.id !== userId);
    return { message: 'Deleted' };
};

// Guides (admin view)
export const getAllGuidesAdmin = async () => [..._guides];

export const createGuide = async (data) => {
    const newGuide = { id: Date.now(), ...data };
    _guides.push(newGuide);
    return newGuide;
};

export const updateGuide = async (id, data) => {
    _guides = _guides.map((g) => (g.id === id ? { ...g, ...data } : g));
    return _guides.find((g) => g.id === id);
};

export const deleteGuide = async (id) => {
    _guides = _guides.filter((g) => g.id !== id);
    return { message: 'Deleted' };
};
