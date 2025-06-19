import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Typography, Stack } from '@mui/material'

const ProfileSettings = () => (
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

export default ProfileSettings
