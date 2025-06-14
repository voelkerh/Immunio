import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Stack, Typography, Divider, List, ListItem, ListItemText } from '@mui/material'
import { Settings } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'

function generate(element) {
  return [0, 1, 2].map((value) => React.cloneElement(element, {
    key: value
  }),)
}

const Home = () => {
  const navigate = useNavigate()
  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/profile/settings',
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
      <Stack
        direction="row"
        spacing={4}
      >
        <Typography variant="h4">
          Name
        </Typography>
        <Typography variant="h4">
          Geburtsdatum
        </Typography>
      </Stack>
      <Divider sx={dividerSx} />
      <Stack
        direction="row"
        spacing={4}
      >
        <Typography variant="h5">
          Impfstatus:
        </Typography>
        <Typography variant="h5">
          Un/vollständig
        </Typography>
      </Stack>
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
