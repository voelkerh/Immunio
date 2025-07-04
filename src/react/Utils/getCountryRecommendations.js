import travelVaccinationsAllCountries from '../../assets/travel_vaccinations.json'

const getCountryRecommendations = (countryName) => travelVaccinationsAllCountries[countryName]?.filter(vaccination => vaccination !== 'Routine vaccines') || []

export default getCountryRecommendations
