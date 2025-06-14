import React, { createContext, useContext, useState } from 'react'

const PersonContext = createContext()

export const usePerson = () => useContext(PersonContext)

export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: '',
    birthdate: '',
    gender: '',
    riskGroup: '',
    isPregnant: false
  })

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  )
}