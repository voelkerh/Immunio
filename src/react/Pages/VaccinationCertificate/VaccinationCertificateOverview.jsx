import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Stack, Button } from '@mui/material'
import { AppSettingsAlt as SettingsIcon } from '@mui/icons-material'

const VaccinationCertificateOverview = () => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Button
        variant="contained"
        startIcon={<SettingsIcon />}
        onClick={() => navigate('/settings')}
      >
        Go to Settings
      </Button>
    </Stack>
  )
}

export default VaccinationCertificateOverview
