import { useState, useEffect, useCallback } from 'react'
import { STATIC_GUIDES, getStaticGuide, STATIC_LOCATION } from '../data/staticData'

export function useEmergency() {
    const [selectedCountry, setSelectedCountry] = useState(STATIC_LOCATION.country)
    const [activeData, setActiveData] = useState(null)
    const [allCountries, setAllCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [locationError] = useState(null)

    // Load all countries from static data
    useEffect(() => {
        setAllCountries(STATIC_GUIDES)
    }, [])

    // Load data for selected country
    const fetchEmergencyData = useCallback((countryName) => {
        setLoading(true)
        const guide = getStaticGuide(countryName)
        setActiveData({
            police: guide.police_number,
            ambulance: guide.ambulance_number,
            fire: guide.fire_number,
            embassy: guide.embassy_number,
            note: `Emergency contacts for ${guide.country_name}`,
        })
        setSelectedCountry(guide.country_name)
        setLoading(false)
    }, [])

    // Load default on mount (user's static location = India)
    useEffect(() => {
        fetchEmergencyData(STATIC_LOCATION.country)
    }, [fetchEmergencyData])

    // detectLocation is a no-op — just re-loads static default
    const detectLocation = useCallback(() => {
        fetchEmergencyData(STATIC_LOCATION.country)
    }, [fetchEmergencyData])

    return {
        selectedCountry,
        activeData,
        allCountries,
        loading,
        locationError,
        detectLocation,
        fetchEmergencyData,
    }
}
