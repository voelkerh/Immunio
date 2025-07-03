import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Stack, Typography, Divider, List, ListItem, ListItemText, Paper } from '@mui/material'
import { Settings } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'

/* Implement logic to base list items on person.vaccinations / person.travelVaccinations here */
const generate = (element) => [0, 1, 2].map((value) => React.cloneElement(element, {
  key: value
}),)

/* Implement monitoring logic based on person.vaccinations here */
const isVaccinationComplete = () => 'Unvollständig'

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
  const listItemSx = { divider: true, borderRadius: 5 }

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
          <Paper elevation={2} sx={{ mb: 1, borderRadius: 5 }}>
            <ListItem button sx={listItemSx} onClick={() => { navigate('/add_vaccination/typhoid') }}>
              <ListItemText
                primary="Vaccination"
                secondary="Due date"
              />
            </ListItem>
          </Paper>,
        )}
      </List>
      <Divider sx={dividerSx}>Offene Reiseimpfungen</Divider>
      <List sx={listSx}>
        {generate(
          <Paper elevation={2} sx={{ mb: 1, borderRadius: 5 }}>
            <ListItem button sx={listItemSx} onClick={() => { navigate('/add_vaccination/typhoid') }}>
              <ListItemText
                primary="Vaccination"
                secondary="Due date"
              />
            </ListItem>
          </Paper>,
        )}
      </List>
    </Stack>
  )
}
export default Home
