import React, { useEffect } from 'react'

import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import Map from '../../Components/Map'

import { useAppBar } from '../../Providers/AppBarProvider'

const MapView = () => {
  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/travel',
      icon: <ArrowBack />,
      title: 'Reisen'
    })
  }, [])

  return (
    <Stack
      flex="1 1 auto"
      width="100%"
      height="100%"
      justifyContent="start"
      alignItems="center"
    >
      <Typography variant="h4" mt={5}>Wähle dein Reiseziel</Typography>
      <Map />
    </Stack>
  )
}
export default MapView
