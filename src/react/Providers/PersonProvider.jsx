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
    vaccinations: [
      { id: 0, category: 'gelbfieber', name: 'Gelbfieberimpfung 1', date: '22.02.2022' },
      { id: 1, category: 'schutzimpfung', name: 'Schutzimpfung 1', date: '22.02.2022' },
      { id: 2, category: 'schutzimpfung', name: 'Schmutzimpfung 2', date: '22.02.2022' },
      { id: 3, category: 'gelbfieber', name: 'Gelbfieberimpfung 2', date: '22.02.2022' },
      { id: 4, category: 'virushepatitis', name: 'Virushepatitis 1', date: '22.02.2022' },
      { id: 5, category: 'virushepatitis', name: 'Virushepatitis 2', date: '22.02.2022' },
      { id: 6, category: 'virusgrippe', name: 'Grippe 1', date: '22.02.2022' },
      { id: 7, category: 'tuberkulose', name: 'Tuberkulose 1', date: '22.02.2022' }
    ],
    travelVaccinations: [],
    plannedTrips: [
      {
        country: 'france',
        date: '2025-08-01'
      }
    ]
  })

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  )
}
