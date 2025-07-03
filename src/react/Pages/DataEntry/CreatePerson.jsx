import React from 'react'
import { useNavigate } from 'react-router'
import { Stack, Checkbox, FormControlLabel, FormGroup, Typography, Button, TextField, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { usePerson } from '../../Providers/PersonProvider'
import riskGroups from '../../../constants/riskGroups'

const CreatePerson = () => {
  const navigate = useNavigate()

  const [name, setName] = React.useState('')
  const [birthdate, setBirthdate] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [riskGroup, setRiskGroup] = React.useState('')
  const [pregante, setPregante] = React.useState(false)
  const { setPerson } = usePerson()

  const handleNameChange = (event) => setName(event.target.value)
  const handleBirthdateChange = (event) => setBirthdate(event.target.value)
  const handleGenderChange = (event) => setGender(event.target.value)
  const handleRiskGroupChange = (event) => setRiskGroup(event.target.value)
  const handlePreganteChange = (event) => setPregante(event.target.checked)

  const isFormValid = name && birthdate && gender

  return (
    <Stack
      id="pageTitle"
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
    >
      {/* Page Title */}
      <Stack alignItems="center">
        <Typography variant="h4" mt={5}>
          Neue Person anlegen
        </Typography>
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
              {riskGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack width="100%" mt={5}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  checked={pregante}
                  onChange={handlePreganteChange}
                />
              }
              label="Schwangerschaft"
            />
          </FormGroup>
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
          disabled={!isFormValid}
          onClick={() => {
            setPerson(currentPerson => ({
              ...currentPerson,
              name,
              birthdate,
              gender,
              riskGroup,
              isPregnant: pregante
            }))
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
          disabled={!isFormValid}
        >
          Impfungen aufnehmen
        </Button>
      </Stack>
    </Stack>
  )
}

export default CreatePerson
