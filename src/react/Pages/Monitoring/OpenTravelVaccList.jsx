import React from 'react'
import { useNavigate } from 'react-router'
import { List, ListItem, ListItemText } from '@mui/material'
import { usePerson } from './PersonProvider'
import getCountryRecommendations from '../Utils/getCountryRecommendations'
import getMissingTravelVaccinationsForCountry from '../Utils/getMissingTravelVaccinationsForCountry'

const listSx = { width: '100%' }
const listItemSx = { divider: true }

const OpenTravelVaccList = () => {
  const navigate = useNavigate()
  const { person } = usePerson()
  const { plannedTrips } = person

  return (
    <List sx={listSx}>
      {plannedTrips.map((trip) => {
      const recommendations = getCountryRecommendations(trip.country)
      (
        <ListItem sx={listItemSx}>
          <ListItemText
            primary="Vaccination"
            secondary={trip.country}
            onClick={() => {
              navigate('*')
            }}
          />
        </ListItem>
      )
      )}
    }
    </List>
)
}

export default OpenTravelVaccList
