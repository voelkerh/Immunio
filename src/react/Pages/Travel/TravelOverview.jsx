import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Stack, Button } from '@mui/material'
import { Settings } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'

const TravelOverview = () => {
  const navigate = useNavigate()

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
      justifyContent="start"
      alignItems="center"
    >
      <Stack
        width="90%"
        height="20%"
        rowGap="10px"
      >
        <Button
          onClick={() => navigate('/reisen/map')}
          style={{ border: 'none', background: 'none', padding: 0 }}
        >
          <img
            src="/assets/map_preview.png"
            alt="Map preview"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Button>
      </Stack>
    </Stack>
  )
}

export default TravelOverview
