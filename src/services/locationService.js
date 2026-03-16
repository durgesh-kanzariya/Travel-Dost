import { STATIC_LOCATION } from '../data/staticData';

const LOCATION_CACHE_KEY = 'traveldost_user_location';

export const getCachedLocation = () => {
    try {
        const cached = localStorage.getItem(LOCATION_CACHE_KEY);
        if (!cached) return null;
        const { location } = JSON.parse(cached);
        return location;
    } catch { return null; }
};

export const setCachedLocation = (location) => {
    try {
        localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify({ location, timestamp: Date.now() }));
    } catch { }
};

// Always resolves instantly with static location — no geolocation API needed
export const detectAndCacheLocation = async () => {
    setCachedLocation(STATIC_LOCATION);
    return STATIC_LOCATION;
};
