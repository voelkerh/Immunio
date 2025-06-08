import React from 'react'
import { Stack } from '@mui/system'
import Map from '../../Components/Map'

// const geoUrl = '../../assets/ne_10m_admin_0_countries_pak.json'

const MapView = () => (
  <Stack
    flex="1 1 auto"
    width="100%"
    justifyContent="center"
    alignItems="center"
  >
    <Map />
  </Stack>
)

export default MapView
