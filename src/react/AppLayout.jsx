import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import {
  Stack,
  Typography,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material'

import {
  Home as HomeIcon,
  ImportContacts as ImpfpassIcon,
  Flight as ReisenIcon
} from '@mui/icons-material'

import AppRoutes from './AppRoutes'
import CustomAppBar from './Components/CustomAppBar'
import AppLogo from '../assets/favicon.svg'

const borderRadius = 4

const AppLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()

  let navigationIndex = 0
  if (location.pathname.startsWith('/vaccinations')) navigationIndex = 1
  if (location.pathname.startsWith('/travel')) navigationIndex = 2

  const pathsToHideBottomNav = ['/', '/first_home', '/create_person']
  const showBottomNav = !pathsToHideBottomNav.includes(location.pathname)

  const pathsToHideTopAppBar = ['/', '/first_home', '/create_person']
  const showTopAppBar = !pathsToHideTopAppBar.includes(location.pathname)

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        width: '100%',
        height: '100%',
        paddingTop: theme => theme.spacing(5),
        paddingBottom: theme => theme.spacing(5)
      }}
    >
      <Container
        maxWidth="xs"
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom={2}
        >
          <img
            src={AppLogo}
            alt="App Logo"
            style={{
              width: '40px',
              height: '40px'
            }}
          />
          <Typography variant="h5">
            Immunio - Impfmonitoring
          </Typography>
        </Stack>
        <Paper
          elevation={6}
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 2,
            paddingRight: 1,
            paddingBottom: 2,
            paddingLeft: 1,
            overflow: 'hidden',
            borderRadius: theme => theme.spacing(borderRadius),
            background: theme => theme.palette.grey[900]
          }}
        >
          <Stack
            flex="1 1 auto"
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              overflow: 'hidden',
              borderRadius: theme => theme.spacing(borderRadius),
              background: theme => theme.palette.background.paper
            }}
          >
            {showTopAppBar && (
              <CustomAppBar />
            )}
            <AppRoutes />
            {showBottomNav && (
              <BottomNavigation
                showLabels
                value={navigationIndex}
                sx={{ width: '100%' }}
              >
                <BottomNavigationAction
                  label="Home"
                  icon={<HomeIcon />}
                  onClick={() => navigate('/home')}
                />
                <BottomNavigationAction
                  label="Impfpass"
                  icon={<ImpfpassIcon />}
                  onClick={() => navigate('/vaccinations')}
                />
                <BottomNavigationAction
                  label="Reisen"
                  icon={<ReisenIcon />}
                  onClick={() => navigate('/travel')}
                />
              </BottomNavigation>
            )}
          </Stack>
        </Paper>
      </Container>
    </Stack>
  )
}

export default AppLayout
