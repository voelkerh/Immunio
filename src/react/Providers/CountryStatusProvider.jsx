import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePerson } from './PersonProvider'
import travelVaccinationsAllCountries from '../../assets/travel_vaccinations.json'

const getRecommendations = (countryName) => travelVaccinationsAllCountries[countryName]?.filter(vaccination => vaccination !== 'Routine vaccines') || []

const getMissingVaccinations = (recommendations, vaccinations) => recommendations.filter(recommendation => !vaccinations?.some(vaccination => vaccination.diseases.includes(recommendation)))

// TODO: direkt use context für Export verwenden
const CountryStatusContext = createContext()

export const useCountryStatus = () => useContext(CountryStatusContext)

export const CountryStatusProvider = ({ children }) => {
  const { person } = usePerson()
  const [statusMap, setStatusMap] = useState({})

  // Hook to ensure this logic is only used when person changes, not on every render cycle
  useEffect(() => {
    const newStatusMap = {}

    Object.keys(travelVaccinationsAllCountries).forEach((countryKey) => {
      const recommendations = getRecommendations(countryKey)
      const missingVaccinations = getMissingVaccinations(recommendations, person?.vaccinations)
      newStatusMap[countryKey] = {
        missing: missingVaccinations,
        recommended: recommendations
      }
    })

    setStatusMap(newStatusMap)
  }, [person])
  return (
    <CountryStatusContext.Provider value={{ statusMap }}>
      {children}
    </CountryStatusContext.Provider>
  )
}
