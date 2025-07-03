import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Stack, Typography, Divider, List, ListItem, ListItemText } from '@mui/material'
import { Settings } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'

/* Implement logic to base list items on person.vaccinations / person.travelVaccinations here */
const generate = (element) => [0, 1, 2].map((value) => React.cloneElement(element, {
  key: value
}),)

/* Implement monitoring logic based on person.vaccinations here */
const isVaccinationComplete = (vaccinations) => 'Unvollständig'

const Home = () => {
  const navigate = useNavigate()
  const { setConfig } = useAppBar()
  const { person } = usePerson()
  const vaccinationStatus = isVaccinationComplete(person.vaccinations || [])

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/settings',
      icon: <Settings />,
      title: 'Home'
    })
  }, [])

  const dividerSx = { width: '100%', my: 2 }
  const listSx = { width: '100%' }
  const listItemSx = { divider: true }

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="row" spacing={4}>
        <Typography variant="h4">{person.name}</Typography>
        <Typography variant="h4">{person.birthdate}</Typography>
      </Stack>
      <Divider sx={dividerSx} />
      <Typography variant="h5">{`Impfstatus: ${vaccinationStatus}`}</Typography>
      <Divider sx={dividerSx}>Offene Schutzimpfungen</Divider>
      <List sx={listSx}>
        {generate(
          <ListItem sx={listItemSx}>
            <ListItemText
              primary="Vaccination"
              secondary="Due date"
              onClick={() => {
                navigate('*')
              }}
            />
          </ListItem>,
        )}
      </List>
      <Divider sx={dividerSx}>Offene Reiseimpfungen</Divider>
      <List sx={listSx}>
        {generate(
          <ListItem sx={listItemSx}>
            <ListItemText
              primary="Vaccination"
              secondary="Due date"
              onClick={() => {
                navigate('*')
              }}
            />
          </ListItem>,
        )}
      </List>
    </Stack>
  )
}
export default Home
