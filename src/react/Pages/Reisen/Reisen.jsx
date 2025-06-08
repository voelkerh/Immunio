import React from 'react'
import { Outlet } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

const Reisen = () => (
  <Stack
    flex="1 1 auto"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <Typography
      variant="h4"
    >
      Reisen
    </Typography>
    <Stack
      width="100%"
      height="100%"
    >
      {/* Sub-Routes of /profile like /profile/settings will mount here */}
      <Outlet />
    </Stack>
  </Stack>
)

export default Reisen
