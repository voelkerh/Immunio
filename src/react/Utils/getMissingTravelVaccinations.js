const getMissingTravelVaccinations = (recommendations, vaccinations) => recommendations.filter(recommendation => !vaccinations?.some(vaccination => vaccination.diseases?.includes(recommendation)))

export default getMissingTravelVaccinations
