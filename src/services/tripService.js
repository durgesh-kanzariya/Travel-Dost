import { STATIC_TRIPS, STATIC_UPCOMING_TRIP } from '../data/staticData';

// In-memory mutable copy so add/delete/update work in the session
let _trips = [...STATIC_TRIPS];
let _nextId = _trips.length + 1;

export const getTrips = async () => [..._trips];

export const getUpcomingTrip = async () => {
    const today = new Date().toISOString().split('T')[0];
    return _trips.find((t) => t.start_date >= today) || null;
};

export const createTrip = async (tripData) => {
    const newTrip = { id: _nextId++, ...tripData };
    _trips.push(newTrip);
    return newTrip;
};

export const deleteTrip = async (tripId) => {
    _trips = _trips.filter((t) => t.id !== tripId);
    return { message: 'Deleted' };
};

export const updateTrip = async (tripId, tripData) => {
    _trips = _trips.map((t) => (t.id === tripId ? { ...t, ...tripData } : t));
    return _trips.find((t) => t.id === tripId);
};

export const getChecklistCount = async (tripId) => {
    return 0;
};
