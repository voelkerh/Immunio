import React, { useEffect } from 'react'

import { Stack, Typography, Checkbox, FormGroup, FormControlLabel, TextField, Divider } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { ArrowBack } from '@mui/icons-material'
import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'

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
  const riskGroups = [
    'Bewohner*in In Altenpflege-/Pflegeeinrichtung',
    'Beschäftigte*r In Altenpflege-/Pflegeeinrichtung',
    'Älter Als 60',
    'Enge Kontaktperson Von Menschen Mit Geschwächtem Immunsystem',
    'Angeborene Oder Erworbene Abwehrschwäche (Immundefizienz)',
    'Relevante Unterdrückung Des Abwehrsystems (Immunsuppression)',
    'Chronische HerzKreislauferkrankungen',
    'Chronische Erkrankungen Der Atmungsorgane',
    'Chronische Lebererkrankungen',
    'Chronische Nierenerkrankungen',
    'Chronische Erkrankung Des Nervensystems',
    'Demenz Oder Geistige Behinderung',
    'Psychiatrische Erkrankungen',
    'Stoffwechselerkrankungen, Wie Starkes Übergewicht Und Diabetes Mellitus (\'Zuckerkrankheit\')',
    'Downsyndrom (Trisomie 21)',
    'Aktive Krebserkrankungen.'
  ]

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
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />}
            label={
              <Typography variant="h6">Erhalten</Typography>
            }
          />
          <Autocomplete
            options={weeks}
            sx={{ width: 300, marginTop: 1 }}
            // Das steht in der MUI Doku so drin mit dem prop spreading, deswegen bleibt hier alles so wie es ist, ob du willst und nicht
            renderInput={(params) => <TextField {...params} label="Wochen vor Fälligkeit" />}
          />
          <Divider sx={{ marginTop: 2 }} />
          <Typography variant="h4" sx={{ marginTop: 1 }}>Personenbezogenes</Typography>
          <Autocomplete
            options={riskGroups}
            sx={{ width: 300, marginTop: 1 }}
            renderInput={(params) => <TextField {...params} label="Risikogruppe" />}
          />
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
