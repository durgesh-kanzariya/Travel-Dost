import { useState, useCallback, useEffect } from 'react'
import { getExpenses, addExpense as apiAddExpense, deleteExpense as apiDeleteExpense, getExpenseSummary } from '../services/expenseService'

export function useExpenses(selectedTripId) {
    const [expenses, setExpenses] = useState([])
    const [summary, setSummary] = useState(null)
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const loadExpenses = useCallback(async () => {
        if (!selectedTripId) return
        setLoading(true)
        const [expData, sumData] = await Promise.all([
            getExpenses(selectedTripId),
            getExpenseSummary(selectedTripId),
        ])
        setExpenses(expData)
        setSummary(sumData)
        setLoading(false)
    }, [selectedTripId])

    useEffect(() => {
        loadExpenses()
    }, [loadExpenses])

    const saveExpense = useCallback(async (formData) => {
        setSubmitting(true)
        await apiAddExpense({ ...formData, trip_id: selectedTripId })
        await loadExpenses()
        setSubmitting(false)
        return true
    }, [selectedTripId, loadExpenses])

    const removeExpense = useCallback(async (id) => {
        await apiDeleteExpense(id)
        await loadExpenses()
        return true
    }, [loadExpenses])

    return {
        expenses,
        summary,
        loading,
        submitting,
        loadExpenses,
        saveExpense,
        removeExpense
    }
}
