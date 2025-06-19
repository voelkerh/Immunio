import React, { useEffect } from 'react'

import { Stack, Divider, List, ListItem, ListItemText } from '@mui/material'
import { Settings } from '@mui/icons-material'

import { useAppBar } from '../../Providers/AppBarProvider'
import { usePerson } from '../../Providers/PersonProvider'

const listSx = { width: '100%' }
const listItemSx = { divider: true }
const dividerSx = { width: '100%', my: 2 }

const VaccinationCertificateOverview = () => {
  const { person } = usePerson()

  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/settings',
      icon: <Settings />,
      title: 'Impfpass'
    })
  }, [])

  const renderVaccinations = (category) => {
    const items = person.vaccinations
      .filter(v => v.category === category)
      .map(vaccination => (
        <ListItem
          key={vaccination.id}
          sx={listItemSx}
          button
        >
          <ListItemText
            primary={vaccination.name}
            secondary={vaccination.date}
          />
        </ListItem>
      ))
    return items.length > 0
      ? items
      : (
        <ListItem>
          <ListItemText
            secondary="Keine Impfungen in dieser Kategorie."
          />
        </ListItem>
      )
  }

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'top'
      }}
    >
      <Divider sx={dividerSx}>Gelbfieber</Divider>
      <List sx={listSx}>
        {renderVaccinations('gelbfieber')}
      </List>

      <Divider sx={dividerSx}>Schutzimpfungen</Divider>
      <List sx={listSx}>
        {renderVaccinations('schutzimpfung')}
      </List>

      <Divider sx={dividerSx}>Virushepatitis</Divider>
      <List sx={listSx}>
        {renderVaccinations('virushepatitis')}
      </List>

      <Divider sx={dividerSx}>Virusgrippe</Divider>
      <List sx={listSx}>
        {renderVaccinations('virusgrippe')}
      </List>

      <Divider sx={dividerSx}>Tuberkulose</Divider>
      <List sx={listSx}>
        {renderVaccinations('tuberkulose')}
      </List>
    </Stack>
  )
}

export default VaccinationCertificateOverview
