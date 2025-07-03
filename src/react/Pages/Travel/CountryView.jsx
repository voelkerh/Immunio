import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Stack } from '@mui/system'
import { ArrowBack } from '@mui/icons-material'
import { Typography, Button, Divider, List, ListItem, ListItemText } from '@mui/material'

import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'
import { useCountryStatus } from '../../Providers/CountryStatusProvider'

const dividerSx = { width: '100%', my: 2 }
const listSx = { width: '100%' }
const listItemSx = { divider: true }

const CountryView = () => {
  const { name } = useParams()
  const countryName = name.toLowerCase().replaceAll(' ', '-')
  const { setConfig } = useAppBar()
  const { person, setPerson } = usePerson()
  const { statusMap } = useCountryStatus()
  const { missing = [], recommended = [] } = statusMap[countryName] || {} // fallback if not yet loaded
  const isTravelVaccComplete = missing?.length === 0
  const navigate = useNavigate()
  let statusText = 'Unbekannt'
  if (recommended.length > 0) {
    statusText = isTravelVaccComplete ? 'Vollständig' : 'Unvollständig'
  }

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/travel/map',
      icon: <ArrowBack />,
      title: 'Reisen'
    })
  }, [])

  const saveAndNext = () => {
    console.log('prev', person)
    setPerson(prev => ({
      ...prev, // ... immutable / copy of person
      plannedTrips: [...prev.plannedTrips, { country: name }]
    }))
    navigate('/travel/date')
  }

  return (
    <Stack
      flex="1 1 auto"
      width="100%"
      height="100%"
      justifyContent="start"
      alignItems="center"
    >
      <Typography variant="h4">{name}</Typography>
      <Divider sx={dividerSx} />
      <Typography variant="h6">{`Impfstatus: ${statusText}`}</Typography>
      {!isTravelVaccComplete && (
        <>
          <Divider sx={dividerSx}>Fehlende Impfungen</Divider>
          <List sx={listSx}>
            {missing.map((vaccination) => (
              <ListItem key={vaccination} sx={listItemSx}>
                <ListItemText primary={vaccination} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Divider sx={dividerSx}>Empfohlene Impfungen</Divider>
      {recommended.length === 0 && (
        <Typography>Für dieses Land liegen keine Empfehlungen vor.</Typography>
      )}
      <List sx={listSx}>
        {recommended.map((vaccination) => (
          <ListItem key={vaccination} sx={listItemSx}>
            <ListItemText primary={vaccination} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={saveAndNext}>
        Reise hinzufügen
      </Button>
    </Stack>
  )
}
export default CountryView
