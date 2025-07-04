import React from 'react'
import { useNavigate } from 'react-router'
import { List, ListItem, ListItemText } from '@mui/material'
import { usePerson } from '../../Providers/PersonProvider'
import getCountryRecommendations from '../../Utils/getCountryRecommendations'
import getMissingTravelVaccinations from '../../Utils/getMissingTravelVaccinations'

const listSx = { width: '100%' }
const listItemSx = { divider: true }

const OpenTravelVaccList = () => {
  const navigate = useNavigate()
  const { person } = usePerson()
  const { plannedTrips } = person

  const getListElements = () => {
    const travelDestinations = person?.plannedTrips?.map(trip => trip.country)
    const allRecommendations = [
      ...new Set(
        travelDestinations.flatMap(country => getCountryRecommendations(country))
      )
    ]
    return getMissingTravelVaccinations(allRecommendations, person?.vaccinations || [])
  }

  const listElements = getListElements()

  return (
    <List sx={listSx}>
      {listElements.map((vaccination) => (
        <ListItem key={vaccination} sx={listItemSx}>
          <ListItemText primary={vaccination} />
        </ListItem>
      ))}
    </List>
  )
}

export default OpenTravelVaccList
