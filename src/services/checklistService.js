import { STATIC_CHECKLIST } from '../data/staticData';

let _items = [...STATIC_CHECKLIST];
let _nextId = _items.length + 1;

export const getChecklistItemsByTrip = async (tripId) => {
    if (tripId === null) return _items.filter((i) => i.trip_id === null);
    if (tripId === undefined) return [..._items];
    return _items.filter((i) => i.trip_id === Number(tripId) || i.trip_id === null);
};

export const addChecklistItem = async (label, tripId) => {
    const newItem = { id: _nextId++, label, checked: false, trip_id: tripId || null };
    _items.push(newItem);
    return newItem;
};

export const updateChecklistItem = async (id, checked) => {
    _items = _items.map((i) => (i.id === id ? { ...i, checked } : i));
    return _items.find((i) => i.id === id);
};

export const deleteChecklistItem = async (id) => {
    _items = _items.filter((i) => i.id !== id);
    return { message: 'Deleted' };
};
