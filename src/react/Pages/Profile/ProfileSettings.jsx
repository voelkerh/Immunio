import React, { useEffect } from 'react'

import { Stack, Typography } from '@mui/material'

import { Settings } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'

const ProfileSettings = () => {
  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/settings',
      icon: <Settings />,
      title: 'Einstellungen'
    })
  }, [])

  const { person } = usePerson()

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Typography
        variant="h4"
      >
        Here are your Settings
      </Typography>
    </Stack>
  )
}

export default ProfileSettings
