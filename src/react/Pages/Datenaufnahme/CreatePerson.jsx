/* eslint-disable */
import React from 'react'

import { Stack, Typography, Button } from '@mui/material'

const CreatePerson = () => (
  <Stack flex="1 1 auto" justifyContent="center" alignItems="center">
    <Stack flex="1 1 auto" alignItems="center">
      <Typography variant="h4" mt={5}>
        Neue Person anlegen.
      </Typography>
    </Stack>
    <Stack flex="1 1 auto" alignItems="center">
      <Typography variant="body1" fontSize="1.5rem" width="15rem" mt={1}>
        Lege ein neues Konto an und erfasse die Impfdaten.
      </Typography>
    </Stack>
    <Stack flex="1 1 auto" justifyContent="center" alignItems="center">
      <Button
        variant="outlined"
        size="large"
        sx={{ mt: 0, width: '20rem', height: '5rem' }}
      >
        Start
      </Button>
    </Stack>
  </Stack>
)

export default CreatePerson
