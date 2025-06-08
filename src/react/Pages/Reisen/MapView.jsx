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
      justifyContent="center"
      alignItems="center"
    >
      <Map />
    </Stack>
  )
}
export default MapView
