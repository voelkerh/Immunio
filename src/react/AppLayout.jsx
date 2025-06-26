import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Stack,
  Typography,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  let navigationIndex = 0
  if (location.pathname.startsWith('/vaccinations')) navigationIndex = 1
  if (location.pathname.startsWith('/travel')) navigationIndex = 2

  const pathsToHideBottomNav = ['/', '/first_home', '/create_person']
  const showBottomNav = !pathsToHideBottomNav.includes(location.pathname)

  const pathsToHideTopAppBar = ['/', '/first_home', '/create_person']
  const showTopAppBar = !pathsToHideTopAppBar.includes(location.pathname)

  return (
    <Container
      sx={{
        position: 'relative',
        pt: '64px',
        pb: '56px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      maxWidth="xs"
      disableGutters
    >
      {!isMobile && (
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
      )}
      {!isMobile ? (
        <Paper
          elevation={6}
          sx={{
            position: 'relative',
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 2,
            paddingRight: 1,
            paddingBottom: 2,
            paddingLeft: 1,
            overflow: 'hidden',
            maxHeight: '100%',
            borderRadius: theme.spacing(borderRadius),
            background: theme.palette.grey[900]
          }}
        >
          <Stack
            flex="1 1 auto"
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              position: 'relative',
              overflow: 'auto',
              pb: theme.spacing(10),
              borderRadius: theme.spacing(borderRadius),
              background: theme.palette.background.paper
            }}
          >
            {showTopAppBar && (
              <CustomAppBar position="sticky" />
            )}
            <AppRoutes />
          </Stack>
          {showBottomNav && (
            <BottomNavigation
              showLabels
              value={navigationIndex}
              sx={{
                width: 'calc(100% - 16px)',
                position: 'absolute',
                bottom: theme.spacing(2),
                left: '8px',
                paddingBottom: 'env(safe-area-inset-bottom)',
                borderRadius: theme.spacing(1)
              }}
            >
              <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => navigate('/home')} />
              <BottomNavigationAction label="Impfpass" icon={<ImpfpassIcon />} onClick={() => navigate('/vaccinations')} />
              <BottomNavigationAction label="Reisen" icon={<ReisenIcon />} onClick={() => navigate('/travel')} />
            </BottomNavigation>
          )}
        </Paper>
      ) : (
        // On mobile, just render the main content without Paper
        <>
          {showTopAppBar && <CustomAppBar />}
          <AppRoutes />
          {showBottomNav && (
            <Container
              sx={{
                paddingBottom: '20px',
                background: 'white',
                position: 'fixed',
                bottom: 0,
                left: 0
              }}
              alignItems="start"
            >
              <BottomNavigation
                showLabels
                value={navigationIndex}
                sx={{
                  width: '100%'
                }}
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
            </Container>
          )}
        </>
      )}
    </Container>

  )
}

export default AppLayout
