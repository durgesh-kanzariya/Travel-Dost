import { STATIC_GUIDES, getStaticGuide } from '../data/staticData';

export const getGuideByCountry = async (countryName) => {
    return getStaticGuide(countryName);
};

export const getAllGuides = async () => {
    return STATIC_GUIDES;
};
