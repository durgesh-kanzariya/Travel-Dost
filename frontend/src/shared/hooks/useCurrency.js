import { useState, useEffect, useCallback } from 'react'
import { getStaticRate } from '../data/staticData'

export function useCurrency() {
    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('INR')
    const [exchangeRate, setExchangeRate] = useState(null)
    const [loading] = useState(false)
    const [lastUpdated, setLastUpdated] = useState(null)

    const currencies = [
        { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
        { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
        { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
        { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
        { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
        { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
        { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
        { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪' },
    ]

    const fetchRates = useCallback(() => {
        const rate = getStaticRate(fromCurrency, toCurrency)
        setExchangeRate(rate)
        setLastUpdated(new Date().toLocaleTimeString())
    }, [fromCurrency, toCurrency])

    useEffect(() => {
        fetchRates()
    }, [fetchRates])

    const handleSwap = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }

    const convertedAmount = exchangeRate ? (amount * exchangeRate).toFixed(2) : '...'

    return {
        amount,
        setAmount,
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        exchangeRate,
        loading,
        lastUpdated,
        currencies,
        fetchRates,
        handleSwap,
        convertedAmount,
    }
}
