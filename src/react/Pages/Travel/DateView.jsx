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
  const [isInputValid, setIsInputValid] = useState(false)

  const { setConfig } = useAppBar()
  const navigate = useNavigate()

  useEffect(() => {
    const typedStartDate = new Date(startDateInput)
    const typedEndDate = new Date(endDateInput)
    const now = Date.now()
    const isValid = startDateInput && endDateInput && (typedStartDate <= typedEndDate) && typedStartDate >= now && typedEndDate >= now
    setIsInputValid(isValid)
  }, [startDateInput, endDateInput])

  const handleStartDateChange = (event) => {
    setStartDateInput(event.target.value)
  }
  const handleEndDateChange = (event) => {
    setEndDateInput(event.target.value)
  }

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
    <>
      <Stack
        flex="1 1 auto"
        justifyContent="start"
        alignItems="center"
        gap={5}
      >
        <Stack alignItems="center">
          <Typography variant="h4" mt={5}>Reisedaten</Typography>
        </Stack>
        <Stack
          id="formFields"
          alignItems="center"
          width="80%"
          gap={5}
        >
          <Stack width="100%">
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
          <Stack width="100%">
            <TextField
              required
              slotProps={{ inputLabel: { shrink: true } }}
              label="Rückkehr"
              type="date"
              variant="outlined"
              value={endDateInput}
              onChange={handleEndDateChange}
            />
            {!isInputValid && (
              <Typography
                color="red"
                mt={2}
              >
                Bitte gib ein An- und Abreise Datum ein. Das Abreise Datum muss nach dem Anreise Datum sein.
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack margin="20px">
        <Button
          variant="contained"
          disabled={!isInputValid}
          onClick={saveAndReturn}
        >
          Speichern
        </Button>
      </Stack>
    </>
  )
}
export default DateView
