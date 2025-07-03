import React, { createContext, useContext, useState } from 'react'

// create new react context
const PersonContext = createContext()

// custom hook to use context in other components
export const usePerson = () => useContext(PersonContext)

// wrapper to provide context
export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: 'Lena',
    birthdate: '22.10.1995',
    gender: 'weiblich',
    riskGroup: 'Keine',
    isPregnant: false,
    receiveNoticications: false,
    notificationWeeks: 0,
    vaccinations: [
      { id: 0, category: 'gelbfieber', name: 'Gelbfieber', diseases: ['Yellow Fever'], date: '31.08.2017' },
      { id: 1, category: 'schutzimpfung', name: 'Diphtherie, Tetanus, Pertussis, HiB', diseases: ['Diphtheria', 'Tetanus', 'Pertussis', 'Haemophilus influenzae b'], date: '02.04.1996' },
      { id: 2, category: 'schutzimpfung', name: 'Pertussis', diseases: ['Pertussis'], date: '30.04.1996' },
      { id: 3, category: 'schutzimpfung', name: 'Diphtherie, Tetanus, Pertussis, HiB', diseases: ['Diphtheria', 'Tetanus', 'Pertussis', 'Haemophilus influenzae b'], date: '30.05.1996' },
      { id: 4, category: 'schutzimpfung', name: 'Diphtherie, Tetanus, Pertussis, HiB', diseases: ['Diphtheria', 'Tetanus', 'Pertussis', 'Haemophilus influenzae b'], date: '05.05.1997' },
      { id: 5, category: 'schutzimpfung', name: 'Diphtherie, Tetanus, Polio', diseases: ['Diphtheria', 'Tetanus', 'Polio'], date: '28.06.2004' },
      { id: 6, category: 'schutzimpfung', name: 'Polio', diseases: ['Polio'], date: '02.04.1996' },
      { id: 7, category: 'schutzimpfung', name: 'Polio', diseases: ['Polio'], date: '30.05.1996' },
      { id: 8, category: 'schutzimpfung', name: 'Polio', diseases: ['Polio'], date: '05.05.1997' },
      { id: 9, category: 'schutzimpfung', name: 'Masern, Röteln, Mumps', diseases: ['Measles', 'Rubella', 'Parotitis'], date: '05.05.1997' },
      { id: 10, category: 'schutzimpfung', name: 'Masern, Röteln, Mumps', diseases: ['Measles', 'Rubella', 'Parotitis'], date: '01.01.2001' },
      { id: 11, category: 'schutzimpfung', name: 'Masern, Röteln, Mumps', diseases: ['Measles', 'Rubella', 'Parotitis'], date: '03.08.2004' },
      { id: 12, category: 'virushepatitis', name: 'Virushepatitis B', diseases: ['Hepatitis B'], date: '13.01.1997' },
      { id: 13, category: 'virushepatitis', name: 'Virushepatitis B', diseases: ['Hepatitis B'], date: '10.02.1997' },
      { id: 14, category: 'virushepatitis', name: 'Virushepatitis B', diseases: ['Hepatitis B'], date: '03.12.1999' },
      { id: 15, category: 'virushepatitis', name: 'Virushepatitis B', diseases: ['Hepatitis B'], date: '15.07.2015' },
      { id: 16, category: 'virushepatitis', name: 'Virushepatitis A', diseases: ['Hepatitis A', 'Typhus'], date: '15.07.2015' },
      { id: 17, category: 'virusgrippe', name: 'Influenza', diseases: ['Influenza'], date: '09.12.2021' },
      { id: 18, category: 'virusgrippe', name: 'Influenza', diseases: ['Influenza'], date: '23.11.2022' },
      { id: 19, category: 'covid', name: 'COVID-19', diseases: ['COVID-19'], date: '11.03.2021' },
      { id: 20, category: 'covid', name: 'COVID-19', diseases: ['COVID-19'], date: '03.06.2021' },
      { id: 21, category: 'covid', name: 'COVID-19', diseases: ['COVID-19'], date: '07.12.2021' },
      { id: 22, category: 'covid', name: 'COVID-19', diseases: ['COVID-19'], date: '23.11.2022' },
      { id: 22, category: 'schutzimpfung', name: 'Tollwut', diseases: ['Rabies'], date: '10.03.2023' },
      { id: 23, category: 'schutzimpfung', name: 'FSME', diseases: ['Tick-borne Encephalitis'], date: '10.03.2023' }
    ],
    plannedTrips: [
      {
        country: 'france',
        startDate: '2025-08-01',
        endDate: '2025-08-16'
      }
    ]
  })

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  )
}
