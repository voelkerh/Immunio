import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePerson } from './PersonProvider'
import travelVaccinationsAllCountries from '../../assets/travel_vaccinations.json'
import getCountryRecommendations from '../Utils/getCountryRecommendations'
import getMissingTravelVaccinations from '../Utils/getMissingTravelVaccinations'

const CountryStatusContext = createContext()

export const useCountryStatus = () => useContext(CountryStatusContext)

export const CountryStatusProvider = ({ children }) => {
  const { person } = usePerson()
  const [statusMap, setStatusMap] = useState({})

  // Hook to ensure this logic is only used when person changes, not on every render cycle
  useEffect(() => {
    const newStatusMap = {}

    Object.keys(travelVaccinationsAllCountries).forEach((countryKey) => {
      const recommendations = getCountryRecommendations(countryKey)
      const missingVaccinations = getMissingTravelVaccinations(recommendations, person?.vaccinations)
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
