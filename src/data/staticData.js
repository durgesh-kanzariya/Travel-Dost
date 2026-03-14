// ============================================================
// STATIC DEMO DATA — No backend or external APIs needed
// ============================================================

// --- LOCATION ---
export const STATIC_LOCATION = {
    country: 'India',
    city: 'Mumbai',
    lat: 19.076,
    lng: 72.8777,
};

// --- COUNTRY GUIDES (Emergency Numbers + Local Rules) ---
export const STATIC_GUIDES = [
    {
        id: 1,
        country_name: 'India',
        police_number: '100',
        ambulance_number: '108',
        fire_number: '101',
        embassy_number: '+91-11-2419-8000',
        local_rules: [
            'Remove shoes before entering temples and homes.',
            'Avoid public displays of affection in conservative areas.',
            'Carry a copy of your passport at all times.',
            'Dress modestly when visiting religious sites.',
        ],
    },
    {
        id: 2,
        country_name: 'United States',
        police_number: '911',
        ambulance_number: '911',
        fire_number: '911',
        embassy_number: '+1-202-555-0100',
        local_rules: [
            'Tipping (15–20%) is expected at restaurants.',
            'Jaywalking is illegal in many states.',
            'Right turn on red is allowed in most states.',
            'Always wear a seatbelt — it\'s mandatory.',
        ],
    },
    {
        id: 3,
        country_name: 'Japan',
        police_number: '110',
        ambulance_number: '119',
        fire_number: '119',
        embassy_number: '+81-3-5562-6000',
        local_rules: [
            'Tipping is considered rude — do not tip.',
            'Always speak quietly on public transport.',
            'Remove shoes when entering a traditional home or ryokan.',
            'Bow slightly as a greeting.',
        ],
    },
    {
        id: 4,
        country_name: 'France',
        police_number: '17',
        ambulance_number: '15',
        fire_number: '18',
        embassy_number: '+33-1-4312-2222',
        local_rules: [
            'Greet with a light kiss on the cheek (la bise).',
            'Shops are often closed on Sundays.',
            'Drinking alcohol in public is generally allowed.',
            'Speak French if possible — locals appreciate the effort.',
        ],
    },
    {
        id: 5,
        country_name: 'United Arab Emirates',
        police_number: '999',
        ambulance_number: '998',
        fire_number: '997',
        embassy_number: '+971-2-414-2200',
        local_rules: [
            'Dress modestly in public areas, especially during Ramadan.',
            'Public displays of affection can lead to arrest.',
            'Alcohol is only allowed in licensed venues.',
            'Respect prayer times — some businesses close briefly.',
        ],
    },
];

// Helper: get guide by country name
export const getStaticGuide = (countryName) => {
    return (
        STATIC_GUIDES.find(
            (g) => g.country_name.toLowerCase() === countryName.toLowerCase()
        ) || STATIC_GUIDES[0]
    );
};

// --- CURRENCY RATES (relative to 1 unit of fromCurrency → toCurrency) ---
// Base rates in USD
const USD_RATES = {
    USD: 1,
    INR: 83.5,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 149.5,
    AUD: 1.53,
    CAD: 1.36,
    AED: 3.67,
};

export const getStaticRate = (from, to) => {
    const fromRate = USD_RATES[from] || 1;
    const toRate = USD_RATES[to] || 1;
    return toRate / fromRate;
};

// --- TRIPS ---
export const STATIC_TRIPS = [
    {
        id: 1,
        name: 'Tokyo Adventure',
        destination: 'Japan',
        start_date: '2026-04-10',
        end_date: '2026-04-20',
        status: 'upcoming',
        budget: 3000,
        currency: 'USD',
        notes: 'Cherry blossom season! Book hotels early.',
    },
    {
        id: 2,
        name: 'Paris Getaway',
        destination: 'France',
        start_date: '2025-12-01',
        end_date: '2025-12-10',
        status: 'completed',
        budget: 2500,
        currency: 'USD',
        notes: 'Visit the Eiffel Tower and Louvre.',
    },
    {
        id: 3,
        name: 'Goa Beach Holiday',
        destination: 'India',
        start_date: '2026-01-15',
        end_date: '2026-01-22',
        status: 'completed',
        budget: 800,
        currency: 'USD',
        notes: 'Relax and explore the beaches.',
    },
];

// The upcoming trip (for Dashboard widget)
export const STATIC_UPCOMING_TRIP = STATIC_TRIPS[0];

// --- CHECKLIST ITEMS (keyed by trip id, null = general) ---
export const STATIC_CHECKLIST = [
    { id: 1, label: 'Book flight tickets', checked: true, trip_id: 1 },
    { id: 2, label: 'Reserve hotel in Tokyo', checked: true, trip_id: 1 },
    { id: 3, label: 'Get travel insurance', checked: false, trip_id: 1 },
    { id: 4, label: 'Pack rain jacket', checked: false, trip_id: 1 },
    { id: 5, label: 'Download offline maps', checked: false, trip_id: 1 },
    { id: 6, label: 'Exchange currency to JPY', checked: false, trip_id: 1 },
    { id: 7, label: 'Pack passport', checked: true, trip_id: null },
    { id: 8, label: 'Notify bank of travel dates', checked: false, trip_id: null },
    { id: 9, label: 'Buy travel adaptor', checked: true, trip_id: null },
];

// --- EXPENSES ---
export const STATIC_EXPENSES = [
    { id: 1, trip_id: 2, description: 'Flight to Paris', amount: 650, category: 'Transport', date: '2025-12-01' },
    { id: 2, trip_id: 2, description: 'Hotel Lumière (9 nights)', amount: 1350, category: 'Accommodation', date: '2025-12-01' },
    { id: 3, trip_id: 2, description: 'Louvre Museum tickets', amount: 45, category: 'Activities', date: '2025-12-03' },
    { id: 4, trip_id: 2, description: 'Dinner at Café de Flore', amount: 78, category: 'Food', date: '2025-12-04' },
    { id: 5, trip_id: 2, description: 'Eiffel Tower visit', amount: 30, category: 'Activities', date: '2025-12-05' },
    { id: 6, trip_id: 3, description: 'Flight to Goa', amount: 120, category: 'Transport', date: '2026-01-15' },
    { id: 7, trip_id: 3, description: 'Beach resort (7 nights)', amount: 560, category: 'Accommodation', date: '2026-01-15' },
    { id: 8, trip_id: 3, description: 'Scooter rental', amount: 35, category: 'Transport', date: '2026-01-16' },
    { id: 9, trip_id: 3, description: 'Seafood dinner', amount: 22, category: 'Food', date: '2026-01-17' },
];

export const getStaticExpenseSummary = (tripId) => {
    const tripExpenses = STATIC_EXPENSES.filter((e) => e.trip_id === tripId);
    const total = tripExpenses.reduce((sum, e) => sum + e.amount, 0);
    const byCategory = tripExpenses.reduce((acc, e) => {
        acc[e.category] = (acc[e.category] || 0) + e.amount;
        return acc;
    }, {});
    return { total, byCategory: Object.entries(byCategory).map(([name, amount]) => ({ name, amount })) };
};

// --- ADMIN: USERS ---
export const STATIC_USERS = [
    { id: 1, first_name: 'Aarav', last_name: 'Sharma', email: 'aarav@example.com', role: 'admin', created_at: '2025-01-10T00:00:00Z' },
    { id: 2, first_name: 'Priya', last_name: 'Mehta', email: 'priya@example.com', role: 'user', created_at: '2025-02-14T00:00:00Z' },
    { id: 3, first_name: 'Rohan', last_name: 'Verma', email: 'rohan@example.com', role: 'user', created_at: '2025-03-05T00:00:00Z' },
    { id: 4, first_name: 'Aisha', last_name: 'Khan', email: 'aisha@example.com', role: 'user', created_at: '2025-04-22T00:00:00Z' },
    { id: 5, first_name: 'Carlos', last_name: 'Rivera', email: 'carlos@example.com', role: 'user', created_at: '2025-05-18T00:00:00Z' },
];

// --- ADMIN: STATS ---
export const STATIC_ADMIN_STATS = {
    totalUsers: 248,
    totalGuides: 12,
};
