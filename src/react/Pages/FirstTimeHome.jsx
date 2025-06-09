import React from 'react'
import { useNavigate } from 'react-router'

import { Stack, Typography, Button } from '@mui/material'

const FirstTimeHome = () => {
  const navigate = useNavigate()

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flex="1 1 auto"
        alignItems="center"
      >
        <Typography
          variant="h2"
          mt={40}
        >
          immunio.
        </Typography>
        <Typography
          variant="body1"
          fontSize="1.5rem"
          width="15rem"
          mt={1}
        >
          Lege ein neues Konto an und erfasse die Impfdaten.
        </Typography>
      </Stack>
      <Stack
        flex="1 1 auto"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="outlined"
          size="large"
          sx={{ mt: 0, width: '20rem', height: '5rem' }}
          onClick={() => {
            navigate('/create_person')
          }}
        >
          Start
        </Button>
      </Stack>
    </Stack>
  )
}
export default FirstTimeHome
