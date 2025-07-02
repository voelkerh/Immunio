import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Stack, Button, Divider, List, ListItem, ListItemText, IconButton } from '@mui/material'
import { Settings, Edit } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'

const TravelOverview = () => {
  const navigate = useNavigate()

  const { setConfig } = useAppBar()

  const dividerSx = { width: '100%', my: 2 }
  const listSx = { width: '100%' }
  const listItemSx = { divider: true }

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/settings',
      icon: <Settings />,
      title: 'Reisen'
    })
  }, [])

  const { person } = usePerson()

  const handleUpdateTrip = (startDate, endDate, country) => {
    const tripId = `${country.toLowerCase()},${startDate},${endDate}`
    navigate(`/travel/date/${encodeURIComponent(tripId)}`)
  }

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="start"
      alignItems="center"
    >
      <Stack
        width="90%"
        height="20%"
        rowGap="10px"
      >
        <Button
          onClick={() => navigate('/travel/map')}
          style={{ border: 'none', background: 'none', padding: 0 }}
        >
          <img
            src="/assets/map_preview.png"
            alt="Map preview"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate('/travel/map')}
        >
          Reise hinzufügen
        </Button>
        <Divider sx={dividerSx}>Geplante Reisen</Divider>
        <List sx={listSx}>
          {person.plannedTrips?.map((trip) => (
            <ListItem key={trip.id || `${trip.country},${trip.startDate},${trip.endDate}`} sx={listItemSx}>
              <ListItemText
                primary={trip.country.charAt(0).toUpperCase() + trip.country.slice(1).toLowerCase()}
                secondary={`${trip.startDate} - ${trip.endDate}`}
              />
              <IconButton
                onClick={() => handleUpdateTrip(trip.startDate, trip.endDate, trip.country)}
                size="small"
              >
                <Edit />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  )
}

export default TravelOverview
