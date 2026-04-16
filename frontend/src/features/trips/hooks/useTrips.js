import { useState, useCallback, useEffect } from 'react'
import { getTrips, createTrip, deleteTrip, getChecklistCount, updateTrip } from '../api/tripApi'

export function useTrips() {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchTripsData() {
      setLoading(true)
      try {
        const data = await getTrips()
        if (!cancelled) setTrips(data)
      } catch (err) {
        if (!cancelled) console.error('Failed to fetch trips:', err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchTripsData()

    return () => { cancelled = true }
  }, [])

  const addTrip = useCallback(async (formData) => {
    await createTrip(formData)
    try {
      const data = await getTrips()
      setTrips(data)
    } catch (err) {
      console.error('Failed to refresh trips:', err)
    }
  }, [])

  const editTrip = useCallback(async (tripId, formData) => {
    await updateTrip(tripId, formData)
    try {
      const data = await getTrips()
      setTrips(data)
    } catch (err) {
      console.error('Failed to refresh trips:', err)
    }
  }, [])

  const removeTrip = useCallback(async (tripId, deleteOption) => {
    await deleteTrip(tripId, deleteOption)
    try {
      const data = await getTrips()
      setTrips(data)
    } catch (err) {
      console.error('Failed to refresh trips:', err)
    }
  }, [])

  const getChecklistItemCount = useCallback(async (tripId) => {
    try {
      return await getChecklistCount(tripId)
    } catch {
      return 0
    }
  }, [])

  return {
    trips,
    loading,
    addTrip,
    editTrip,
    removeTrip,
    getChecklistItemCount
  }
}