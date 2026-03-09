import { useState, useEffect } from 'react'
import { STATIC_LOCATION, getStaticGuide, STATIC_UPCOMING_TRIP } from '../data/staticData'

export function useDashboard() {
    const [location] = useState(STATIC_LOCATION)
    const [zoom] = useState(12)
    const [loading, setLoading] = useState(true)
    const [countryData, setCountryData] = useState(null)
    const [upcomingTrip] = useState(STATIC_UPCOMING_TRIP)
    const [tripEmergencyData, setTripEmergencyData] = useState(null)
    const [error] = useState(null)

    useEffect(() => {
        // Load static guide data for default country (India)
        const guide = getStaticGuide(STATIC_LOCATION.country)
        setCountryData({
            emergency: {
                police: guide.police_number,
                ambulance: guide.ambulance_number,
            },
            rules: guide.local_rules || [],
        })

        // Load upcoming trip emergency data
        if (STATIC_UPCOMING_TRIP) {
            const tripGuide = getStaticGuide(STATIC_UPCOMING_TRIP.destination)
            setTripEmergencyData({
                police: tripGuide.police_number,
                ambulance: tripGuide.ambulance_number,
            })
        }

        setLoading(false)
    }, [])

    // No-op: location is static
    const detectLocation = () => {}

    return {
        location,
        zoom,
        loading,
        countryData,
        error,
        upcomingTrip,
        tripEmergencyData,
        detectLocation,
    }
}
