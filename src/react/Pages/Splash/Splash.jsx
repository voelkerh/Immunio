import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Stack,
  Typography
} from '@mui/material'

const Splash = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/home')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [navigate])

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography
        variant="h3"
      >
        immunio.
      </Typography>
    </Stack>
  )
}

export default Splash
