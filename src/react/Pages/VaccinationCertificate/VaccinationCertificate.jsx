import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'
import { Settings } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'

const VaccinationCertificate = () => {
  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/profile/settings',
      icon: <Settings />,
      title: 'Impfpass'
    })
  }, [])

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h4"
      >
        Impfpass
      </Typography>
      <Stack
        width="100%"
        height="100%"
      >
        {/* Sub-Routes of /profile like /profile/settings will mount here */}
        <Outlet />
      </Stack>
    </Stack>
  )
}

export default VaccinationCertificate
