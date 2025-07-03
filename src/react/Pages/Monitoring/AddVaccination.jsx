import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Stack, Button } from '@mui/material'

const AddVaccination = () => {
  const navigate = useNavigate()
  const { disease } = useParams()
  return (
    <>
      <Stack
        flex="1 1 auto"
        width="100%"
        height="100%"
        justifyContent="start"
        alignItems="center"
      >
        {disease}
      </Stack>
      <Button variant="contained" onClick={() => navigate('/home')}>
        Impfung hinzufügen
      </Button>
    </>

  )
}

export default AddVaccination
