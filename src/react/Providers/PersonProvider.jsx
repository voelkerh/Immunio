import React, { createContext, useContext, useState } from 'react'

// create new react context
const PersonContext = createContext()

// custom hook to use context in other components
export const usePerson = () => useContext(PersonContext)

// wrapper to provide context
export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: '',
    birthdate: '',
    gender: '',
    riskGroup: '',
    isPregnant: false,
    vaccinations: [],
    travelVaccinations: []
  })

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  )
}