import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Stack } from '@mui/system'
import { ArrowBack } from '@mui/icons-material'
import { Typography, Button, TextField } from '@mui/material'

import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'

const DateView = () => {
  const { person, setPerson } = usePerson()
  const { tripId } = useParams()
  const [startDateInput, setStartDateInput] = React.useState('')
  const [endDateInput, setEndDateInput] = React.useState('')

  const { setConfig } = useAppBar()
  const navigate = useNavigate()

  const isEditing = tripId !== undefined
  const existingTrip = isEditing ? person.plannedTrips.find(trip => trip.id === decodeURIComponent(tripId)) : null

  useEffect(() => {
    if (isEditing && existingTrip) {
      // Fill fields with existing trip data
      setStartDateInput(existingTrip.startDate || '')
      setEndDateInput(existingTrip.endDate || '')
    }
  }, [isEditing, existingTrip])

  const handleStartDateChange = (event) => setStartDateInput(event.target.value)
  const handleEndDateChange = (event) => setEndDateInput(event.target.value)

  const saveAndReturn = () => {
    setPerson(prev => {
      if (isEditing && existingTrip) {
        // Update existing trip
        const newTripId = `${existingTrip.country.toLowerCase()},${startDateInput},${endDateInput}`
        const updatedTrips = prev.plannedTrips.map(trip => (trip.id === existingTrip.id ? { ...trip, id: newTripId, startDate: startDateInput, endDate: endDateInput } : trip))
        return {
          ...prev,
          plannedTrips: updatedTrips
        }
      }
      const lastTrip = prev.plannedTrips.at(-1)
      const newTripId = `${lastTrip.country.toLowerCase()},${startDateInput},${endDateInput}`
      const updatedTrip = {
        ...lastTrip,
        id: newTripId,
        startDate: startDateInput,
        endDate: endDateInput
      }
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
      backPath: isEditing ? '/travel' : '/travel/map',
      icon: <ArrowBack />,
      title: isEditing ? 'Reise bearbeiten' : 'Reisen'
    })
  }, [isEditing])

  // If editing but trip not found, show error or redirect
  if (isEditing && !existingTrip) {
    return (
      <Stack alignItems="center" justifyContent="center" flex="1">
        <Typography variant="h6" color="error">
          Reise nicht gefunden
        </Typography>
        <Button onClick={() => navigate('/travel')}>
          Zurück zur Übersicht
        </Button>
      </Stack>
    )
  }

  return (
    <Stack
      flex="1 1 auto"
      width="100%"
      height="100%"
      justifyContent="start"
      alignItems="center"
    >
      <Stack alignItems="center">
        <Typography variant="h4" mt={5}>
          {isEditing ? 'Reise bearbeiten' : 'Reisedaten'}
        </Typography>
        {isEditing && existingTrip && (
          <Typography variant="h6" mt={2}>
            {existingTrip.country.charAt(0).toUpperCase() + existingTrip.country.slice(1).toLowerCase()}
          </Typography>
        )}
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
          onClick={saveAndReturn}
        >
          Speichern
        </Button>
      </Stack>
    </Stack>
  )
}

export default DateView
