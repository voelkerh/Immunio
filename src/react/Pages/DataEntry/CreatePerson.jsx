import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Stack, Checkbox, FormControlLabel, FormGroup, Typography, Button, TextField, FormControl, Select, InputLabel, MenuItem } from '@mui/material'

import { usePerson } from '../../Providers/PersonProvider'

const CreatePerson = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')
  const [riskGroup, setRiskGroup] = useState('')
  const { setPerson } = usePerson()
  const [isInputValid, setIsInputValid] = useState(false)
  const [isDateValid, setIsDateValid] = useState(false)

  const handleNameChange = (event) => setName(event.target.value)
  const handleBirthdateChange = (event) => setBirthdate(event.target.value)
  const handleGenderChange = (event) => setGender(event.target.value)
  const handleRiskGroupChange = (event) => setRiskGroup(event.target.value)

  useEffect(() => {
    const isValid = (
      (new Date(birthdate) < Date.now())
    )
    setIsDateValid(isValid)
  }, [birthdate])

  useEffect(() => {
    const isValid = (
      birthdate &&
      name &&
      gender &&
      isDateValid
    )
    setIsInputValid(isValid)
  }, [birthdate, name, gender])

  return (
    <Stack
      id="pageTitle"
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
    >
      {/* Page Title */}
      <Stack alignItems="center">
        <Typography variant="h4" mt={5}>Neue Person anlegen</Typography>
      </Stack>
      {/* Form Fields */}
      <Stack
        id="formFields"
        alignItems="center"
        width="100%"
      >
        <Stack width="100%" mt={5}>
          <TextField
            required
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
          />
        </Stack>
        <Stack width="100%" mt={5}>
          <TextField
            required
            slotProps={{ inputLabel: { shrink: true } }}
            label="Geburtstdatum"
            type="date"
            variant="outlined"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
        </Stack>
        <Stack width="100%" mt={5}>
          <FormControl fullWidth>
            <InputLabel required id="select-gender-label">Geschlecht</InputLabel>
            <Select
              labelId="select-gender-label"
              id="select-gender"
              value={gender}
              label="Geschlecht"
              onChange={handleGenderChange}
            >
              <MenuItem value="nag">Keine Angabe</MenuItem>
              <MenuItem value="divers">Divers</MenuItem>
              <MenuItem value="weiblich">Weiblich</MenuItem>
              <MenuItem value="männlich">Männlich</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack width="100%" mt={5}>
          <FormControl fullWidth>
            <InputLabel id="select-risk-group-label">Risikogruppe</InputLabel>
            <Select
              labelId="select-risk-group-label"
              id="select-risk-group"
              value={riskGroup}
              label="Risikogruppe"
              onChange={handleRiskGroupChange}
            >
              <MenuItem value="none">Keine</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack width="100%" mt={5}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />}
              label="Schwangerschaft"
            />
          </FormGroup>
          {(!isDateValid && birthdate) && (
            <Typography
              color="red"
            >
              Dein Geburtsdatum darf nicht in der Vergangenheit liegen.
            </Typography>
          )}
        </Stack>
      </Stack>
      {/* Nav Buttons */}
      <Stack
        id="pageButtons"
        flex="1 1 auto"
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={2}
        mt={15}
      >
        <Button
          variant="outlined"
          size="large"
          sx={{ mt: 0, width: '50%', height: '5rem' }}
          disabled={!isInputValid}
          onClick={() => {
            setPerson({ name, birthdate, gender, riskGroup })
            navigate('/home')
          }}
        >
          Home
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ mt: 0, width: '50%', height: '5rem' }}
          href="/datenaufnahme_start"
          disabled={!isInputValid}
        >
          Impfungen aufnehmen
        </Button>
      </Stack>
    </Stack>
  )
}

export default CreatePerson
