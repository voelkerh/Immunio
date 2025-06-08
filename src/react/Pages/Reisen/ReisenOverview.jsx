import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography, Button } from '@mui/material'
import { AppSettingsAlt as SettingsIcon } from '@mui/icons-material'
import Map from './MapView'

const ReisenOverview = () => {
  const navigate = useNavigate()

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="start"
      alignItems="center"
    >
      <Typography
        variant="h4"
      >
        ReisenOverview
      </Typography>
      <Stack
        width="100%"
        height="20%"
      >
        <Map />
        <Button
          variant="contained"
          startIcon={<SettingsIcon />}
          onClick={() => navigate('/reisen/map')}
        >
          Go to Map
        </Button>
      </Stack>
    </Stack>
  )
}

export default ReisenOverview
