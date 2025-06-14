import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Stack } from '@mui/material'
import { Settings } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'

const Travel = () => {
  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/profile/settings',
      icon: <Settings />,
      title: 'Reisen'
    })
  }, [])

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Stack
        width="100%"
        height="100%"
        paddingTop="50px"
      >
        {/* Sub-Routes of /profile like /profile/settings will mount here */}
        <Outlet />
      </Stack>
    </Stack>
  )
}
export default Travel
