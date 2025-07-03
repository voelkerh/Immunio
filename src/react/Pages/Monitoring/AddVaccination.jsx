import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const AddVaccination = () => {
  const navigate = useNavigate()
  const { disease } = useParams()
  return (
    <div>
      {disease}
      <Button onClick={() => navigate('/home')}>Speichern</Button>
    </div>
  )
}

export default AddVaccination
