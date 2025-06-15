import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Stack } from '@mui/system'
import { ArrowBack } from '@mui/icons-material'
import { Typography, Divider, List, ListItem, ListItemText } from '@mui/material'

import { useAppBar } from '../../Providers/AppBarProvider'

import travelData from '../../../assets/travel_vaccinations.json'

const CountryView = () => {
  const { name } = useParams()
  const { setConfig } = useAppBar()

  const dividerSx = { width: '100%', my: 2 }
  const listSx = { width: '100%' }
  const listItemSx = { divider: true }

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/travel/map',
      icon: <ArrowBack />,
      title: 'Reisen'
    })
  }, [])

  const recommendations = travelData[name.toLowerCase().replaceAll(' ', '-')]

  return (
    <Stack
      flex="1 1 auto"
      width="100%"
      height="100%"
      justifyContent="start"
      alignItems="center"
    >
      <Typography variant="h4">
        {name}
      </Typography>
      <Divider sx={dividerSx}>Empfohlene Impfungen</Divider>
      <List sx={listSx}>
        {recommendations?.map((vaccine) => (
          <ListItem key={vaccine} sx={listItemSx}>
            <ListItemText primary={vaccine} />
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}
export default CountryView
