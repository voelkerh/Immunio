import React, { useEffect } from 'react'

import { Stack } from '@mui/system'
import { ArrowBack } from '@mui/icons-material'
import Map from '../../Components/Map'

import { useAppBar } from '../../Providers/AppBarProvider'

const MapView = () => {
  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/reisen',
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
      alignItems="start"
    >
      <Map />
    </Stack>
  )
}
export default MapView
