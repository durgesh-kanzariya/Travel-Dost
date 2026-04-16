import api from '../../../shared/services/api'

export const getAllUsers = async () => {
    const response = await api.get('/admin/users')
    return response.data
}

export const deleteUser = async (userId) => {
    const response = await api.delete(`/admin/users/${userId}`)
    return response.data
}

export const getSystemStats = async () => {
    const response = await api.get('/admin/stats')
    return response.data
}

export const getAllGuidesAdmin = async () => {
    const response = await api.get('/admin/guides')
    return response.data
}

export const createGuide = async (data) => {
    const response = await api.post('/admin/guides', data)
    return response.data
}

export const updateGuide = async (id, data) => {
    const response = await api.put(`/admin/guides/${id}`, data)
    return response.data
}

export const deleteGuide = async (id) => {
    const response = await api.delete(`/admin/guides/${id}`)
    return response.data
}