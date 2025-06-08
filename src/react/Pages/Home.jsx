import React, { useEffect } from 'react'

import { Stack, Typography } from '@mui/material'
import { Settings } from '@mui/icons-material'

import { useAppBar } from '../Providers/AppBarProvider'

const Home = () => {
  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/profile/settings',
      icon: <Settings />,
      title: 'Home'
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
        Home
      </Typography>
    </Stack>
  )
}
export default Home
