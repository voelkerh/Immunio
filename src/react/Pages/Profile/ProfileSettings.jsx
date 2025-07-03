import React, { useEffect } from 'react'

import { Stack, Typography, Checkbox, FormGroup, FormControlLabel, Divider, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'
import riskGroups from '../../../constants/riskGroups'
import weeks from '../../../constants/weeks'

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
  console.log(person)

  const [localReceiveNotifications, setLocalReceiveNotifications] = React.useState(person.receiveNotifications)
  const [localNotificationWeeks, setLocalNotificatioNWeeks] = React.useState(person.notificationWeeks)
  const [localRiskGroups, setLocalRiskGroup] = React.useState(person.riskGroups)
  const [localIsPregnant, setLocalIsPregnant] = React.useState(person.isPregnant)

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
    >
      <Typography variant="h4" sx={{ marginTop: 1 }}>Benachrichtigungen</Typography>
      <Stack
        flex="1 1 auto"
        justifyContent="flex-start"
        alignItems="left"
        width="100%"
      >
        <FormGroup sx={{ marginLeft: 5, marginTop: 1, marginRight: 5 }}>
          <FormControlLabel
            control={<Checkbox
              sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
              checked={localReceiveNotifications}
              onChange={e => setLocalReceiveNotifications(e.target.checked)}
            />}
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
              value={localNotificationWeeks}
              onChange={(event) => { setLocalNotificatioNWeeks(event.target.value) }}
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
              value={localRiskGroups}
              onChange={e => { setLocalRiskGroup(e.target.value) }}
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
              checked={localIsPregnant}
              onChange={e => setLocalIsPregnant(e.target.checked)}
            />}
            label={
              <Typography variant="h6">Schwangerschaft</Typography>
            }
          />
        </FormGroup>
      </Stack>
      <Stack>
        <Button
          onClick={() => setPerson(
            {
              ...person,
              receiveNotifications: localReceiveNotifications,
              notificationWeeks: localNotificationWeeks,
              riskGroups: localRiskGroups,
              isPregnant: localIsPregnant
            }
          )}
          variant="contained"
          sx={{ marginBottom: 2 }}
        >
          Speichern
        </Button>
      </Stack>
    </Stack>
  )
}

export default ProfileSettings
