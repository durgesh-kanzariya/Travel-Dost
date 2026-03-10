import { STATIC_EXPENSES, getStaticExpenseSummary } from '../data/staticData';

let _expenses = [...STATIC_EXPENSES];
let _nextId = _expenses.length + 1;

export const getExpenses = async (tripId) => {
    return _expenses.filter((e) => e.trip_id === Number(tripId));
};

export const getExpenseSummary = async (tripId) => {
    const tripExpenses = _expenses.filter((e) => e.trip_id === Number(tripId));
    const total = tripExpenses.reduce((sum, e) => sum + e.amount, 0);
    const byCategory = tripExpenses.reduce((acc, e) => {
        acc[e.category] = (acc[e.category] || 0) + e.amount;
        return acc;
    }, {});
    return { total, byCategory: Object.entries(byCategory).map(([name, amount]) => ({ name, amount })) };
};

export const addExpense = async (expenseData) => {
    const newExpense = { id: _nextId++, ...expenseData };
    _expenses.push(newExpense);
    return newExpense;
};

export const deleteExpense = async (id) => {
    _expenses = _expenses.filter((e) => e.id !== id);
    return { message: 'Deleted' };
};
