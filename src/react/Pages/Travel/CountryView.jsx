import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Stack } from '@mui/system'
import { ArrowBack } from '@mui/icons-material'
import { Typography, Button, Divider, List, ListItem, ListItemText } from '@mui/material'

import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'

import travelVaccinationsAllCountries from '../../../assets/travel_vaccinations.json'

const dividerSx = { width: '100%', my: 2 }
const listSx = { width: '100%' }
const listItemSx = { divider: true }

const getRecommendations = (countryName) => travelVaccinationsAllCountries[countryName.toLowerCase().replaceAll(' ', '-')]?.filter(v => v !== 'Routine vaccines') || []

const isVaccinationComplete = (recommendations, vaccinations) => recommendations.every(recommendation => vaccinations?.some(vaccination => vaccination.diseases.includes(recommendation)))

const getMissingVaccinations = (recommendations, vaccinations) => recommendations.filter(recommendation => !vaccinations?.some(vaccination => vaccination.diseases.includes(recommendation)))

const CountryView = () => {
  const { name } = useParams()
  const { setConfig } = useAppBar()
  const { person, setPerson } = usePerson()
  const navigate = useNavigate()

  const recommendations = getRecommendations(name)
  const travelVaccStatus = isVaccinationComplete(recommendations, person?.vaccinations)

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
      <Typography variant="h6">
        Impfstatus:
        {' '}
        {travelVaccStatus ? 'Vollständig' : 'Unvollständig'}
      </Typography>
      {!travelVaccStatus && (
        <>
          <Divider sx={dividerSx}>Fehlende Impfungen</Divider>
          <List sx={listSx}>
            {getMissingVaccinations(recommendations, person.vaccinations).map((vaccination) => (
              <ListItem key={vaccination} sx={listItemSx}>
                <ListItemText primary={vaccination} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Divider sx={dividerSx}>Empfohlene Impfungen</Divider>
      <List sx={listSx}>
        {recommendations?.map((vaccination) => (
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
