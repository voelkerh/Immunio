import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Stack, Button, Divider, List, ListItem, ListItemText } from '@mui/material'
import { Settings } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'

const generate = (element) => [0, 1, 2].map((value) => React.cloneElement(element, {
  key: value
}),)

const TravelOverview = () => {
  const navigate = useNavigate()

  const { setConfig } = useAppBar()

  const dividerSx = { width: '100%', my: 2 }
  const listSx = { width: '100%' }
  const listItemSx = { divider: true }

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/profile/settings',
      icon: <Settings />,
      title: 'Reisen'
    })
  }, [])

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
        <Divider sx={dividerSx}>Karte erkunden</Divider>
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
        <Divider sx={dividerSx}>Geplante Reisen</Divider>
        <List sx={listSx}>
          {generate(
            <ListItem sx={listItemSx}>
              <ListItemText
                primary="Land"
                secondary="Abfahrt"
                onClick={() => {
                  navigate('*')
                }}
              />
            </ListItem>,
          )}
        </List>
        <Button
          variant="contained"
          onClick={() => navigate('*')}
        >
          Reise hinzufügen
        </Button>
      </Stack>
    </Stack>
  )
}

export default TravelOverview
