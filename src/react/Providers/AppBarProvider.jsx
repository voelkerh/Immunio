import React, { createContext, useContext, useState } from 'react'

import { ArrowBack } from '@mui/icons-material'

const AppBarContext = createContext()

export const useAppBar = () => useContext(AppBarContext)

export const AppBarProvider = ({ children }) => {
  const [config, setConfig] = useState({
    showBackButton: true,
    backPath: '/',
    icon: <ArrowBack />,
    title: 'immunio.'
  })

  return (
    <AppBarContext.Provider value={{ config, setConfig }}>
      {children}
    </AppBarContext.Provider>
  )
}
