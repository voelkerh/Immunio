import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Typography, Stack } from '@mui/material'

const ProfileSettings = () => {
  const navigate = useNavigate()

  return (
    // This is a React Fragment. It is a virtual React Component that will not render a HTML-DOM-Element
    // We need to use it here, because we want to render two Components (Typography, Button) with no parent around them.
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
