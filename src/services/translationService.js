// Static translation — no backend API needed
export const translateText = async (text, from, to) => {
    // Simulate a brief async delay for realism
    await new Promise((r) => setTimeout(r, 300));
    return { translatedText: `[${to.toUpperCase()}] ${text}`, from, to };
};
