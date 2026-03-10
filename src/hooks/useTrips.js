import { useState, useCallback, useEffect } from 'react'
import { STATIC_TRIPS } from '../data/staticData'
import { getTrips, createTrip, deleteTrip, updateTrip as apiUpdateTrip } from '../services/tripService'

export function useTrips() {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTrips = useCallback(async () => {
    setLoading(true)
    const data = await getTrips()
    setTrips(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchTrips()
  }, [fetchTrips])

  const addTrip = useCallback(async (formData) => {
    await createTrip(formData)
    await fetchTrips()
  }, [fetchTrips])

  const editTrip = useCallback(async (tripId, formData) => {
    await apiUpdateTrip(tripId, formData)
    await fetchTrips()
  }, [fetchTrips])

  const removeTrip = useCallback(async (tripId, deleteOption) => {
    await deleteTrip(tripId, deleteOption)
    await fetchTrips()
  }, [fetchTrips])

  const getChecklistItemCount = useCallback(async (tripId) => {
    return 0
  }, [])

  return {
    trips,
    loading,
    fetchTrips,
    addTrip,
    editTrip,
    removeTrip,
    getChecklistItemCount
  }
}
