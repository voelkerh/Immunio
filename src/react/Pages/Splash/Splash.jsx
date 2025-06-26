import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Stack,
  Typography
} from '@mui/material'

const Splash = ({ debug }) => {
  const navigate = useNavigate()

  const url = debug ? '/home' : '/first_home'
  const timeoutMs = debug ? 1 : 1000

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(url)
    }, timeoutMs)

    return () => clearTimeout(timeout)
  }, [navigate, url])

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
Splash.propTypes = {
  debug: PropTypes.bool.isRequired
}

export default Splash
