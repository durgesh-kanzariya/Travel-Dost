import api from '../../../shared/services/api'

export const getGuideByCountry = async (countryName) => {
    const res = await api.get(`/guides/${countryName}`)
    return res.data
}

export const getAllGuides = async () => {
    const res = await api.get('/guides/list')
    return res.data
}