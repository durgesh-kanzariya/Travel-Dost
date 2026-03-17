import { useState, useCallback } from 'react'
import { supportedLanguages } from '../utils/countryLanguages'

export function useTranslator() {
    const [inputText, setInputText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [sourceLang, setSourceLang] = useState('en')
    const [targetLang, setTargetLang] = useState('ja')   // Japan — our demo destination
    const [loading, setLoading] = useState(false)
    const [userLocation] = useState('India')             // Static location — no geolocation API

    const handleTranslate = useCallback(async (textOverride = null) => {
        const textToTranslate = textOverride || inputText
        if (!textToTranslate.trim()) return

        setLoading(true)
        // Simulate short delay for UX realism
        await new Promise((r) => setTimeout(r, 400))
        setTranslatedText(`[${targetLang.toUpperCase()}] ${textToTranslate}`)
        setLoading(false)
    }, [inputText, targetLang])

    const handleSpeak = (text) => {
        if (!text) return
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = targetLang
        window.speechSynthesis.speak(utterance)
    }

    const handleSwap = () => {
        setSourceLang(targetLang)
        setTargetLang(sourceLang)
        setInputText(translatedText)
        setTranslatedText(inputText)
    }

    const setInputAndTranslate = (text, translated = null) => {
        setInputText(text)
        if (translated) {
            setTranslatedText(translated)
        } else {
            handleTranslate(text)
        }
    }

    // No-op — location is always static
    const refreshLocation = useCallback(async () => {}, [])

    return {
        inputText,
        setInputText,
        translatedText,
        setTranslatedText,
        sourceLang,
        setSourceLang,
        targetLang,
        setTargetLang,
        loading,
        userLocation,
        handleTranslate,
        handleSpeak,
        handleSwap,
        setInputAndTranslate,
        refreshLocation,
    }
}
