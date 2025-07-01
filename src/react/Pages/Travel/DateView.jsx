import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Stack } from '@mui/system'
import { ArrowBack } from '@mui/icons-material'
import { Typography, Button, TextField } from '@mui/material'

import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'

const DateView = () => {
  const { setPerson } = usePerson()
  const [startDateInput, setStartDateInput] = useState('')
  const [endDateInput, setEndDateInput] = useState('')

  const { setConfig } = useAppBar()
  const navigate = useNavigate()

  const handleStartDateChange = (event) => setStartDateInput(event.target.value)
  const handleEndDateChange = (event) => setEndDateInput(event.target.value)

  const saveAndReturn = () => {
    setPerson(prev => {
      const lastTrip = prev.plannedTrips.at(-1)
      const updatedTrip = { ...lastTrip, startDate: startDateInput, endDate: endDateInput }
      return {
        ...prev,
        plannedTrips: [...prev.plannedTrips.slice(0, -1), updatedTrip]
      }
    })
    navigate('/travel')
  }

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/travel/map',
      icon: <ArrowBack />,
      title: 'Reisen'
    })
  }, [])

  return (
    <Stack
      flex="1 1 auto"
      width="100%"
      height="100%"
      justifyContent="start"
      alignItems="center"
    >
      <Stack alignItems="center">
        <Typography variant="h4" mt={5}>Reisedaten</Typography>
      </Stack>
      <Stack
        id="formFields"
        alignItems="center"
        width="100%"
      >
        <Stack width="100%" mt={5}>
          <TextField
            required
            slotProps={{ inputLabel: { shrink: true } }}
            label="Abfahrt"
            type="date"
            variant="outlined"
            value={startDateInput}
            onChange={handleStartDateChange}
          />
        </Stack>
        <Stack width="100%" mt={5}>
          <TextField
            required
            slotProps={{ inputLabel: { shrink: true } }}
            label="Rückkehr"
            type="date"
            variant="outlined"
            value={endDateInput}
            onChange={handleEndDateChange}
          />
        </Stack>
      </Stack>
      <Stack>
        <Button
          variant="contained"
          disabled={!startDateInput || !endDateInput}
          onClick={saveAndReturn}
        >
          Speichern
        </Button>
      </Stack>
    </Stack>
  )
}
export default DateView
