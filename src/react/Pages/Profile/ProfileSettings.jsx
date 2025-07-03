import React, { useEffect } from 'react'

import { Stack, Typography, Checkbox, FormGroup, FormControlLabel, TextField, Divider, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { ArrowBack } from '@mui/icons-material'
import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'
import riskGroups from '../../../constants/riskGroups'

const ProfileSettings = () => {
  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '__back__',
      icon: <ArrowBack />,
      title: 'Einstellungen'
    })
  }, [])

  const { person, setPerson } = usePerson()

  const weeks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
    >
      <Typography
        variant="h4"
        sx={{ marginTop: 1 }}
      >
        Benachrichtigungen
      </Typography>
      <Stack
        flex="1 1 auto"
        justifyContent="flex-start"
        alignItems="left"
        width="100%"
      >
        <FormGroup
          sx={{ marginLeft: 5, marginTop: 1, marginRight: 5 }}
        >
          <FormControlLabel
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />}
            label={
              <Typography variant="h6">Erhalten</Typography>
            }
          />
          <FormControl
            sx={{ width: 300, marginTop: 1 }}
          >
            <InputLabel id="notification-weeks-label">Wochen vor Fälligkeit</InputLabel>
            <Select
              labelId="notification-weeks-label"
              id="select-notification-weeks"
              label="Wochen vor Fälligkeit"
            >
              {weeks.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Divider sx={{ marginTop: 2 }} />
          <Typography
            variant="h4"
            sx={{ marginTop: 1 }}
          >
            Personenbezogenes
          </Typography>
          <FormControl
            sx={{ width: 300, marginTop: 1 }}
          >
            <InputLabel id="risk-group-label">Risikogruppe</InputLabel>
            <Select
              labelId="risk-group-label"
              id="select-risk-group"
              label="Risikogruppe"
              value={person.riskGroup || ''}
              onChange={(event) => { setPerson({ ...person, riskGroup: event.target.value }) }}
            >
              {riskGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControlLabel
            sx={{ marginTop: 1 }}
            control={<Checkbox
              sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
              checked={person.isPregnant}
              onChange={e => setPerson({ ...person, isPregnant: e.target.checked })}
            />}
            label={
              <Typography variant="h6">Schwangerschaft</Typography>
            }
          />
        </FormGroup>
      </Stack>
    </Stack>
  )
}

export default ProfileSettings
