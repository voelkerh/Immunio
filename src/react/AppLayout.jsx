import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Stack,
  Container,
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
      sx={{
        height: '100%'
      }}
    >
      {showTopAppBar && (
        <Container
          sx={{
            height: '50px',
            width: '100%'
          }}
        >
          <CustomAppBar />
        </Container>
      )}

      <Stack
        sx={{
          flex: '1 1 auto',
          height: 'calc(100% - 125px)',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        <AppRoutes />
      </Stack>
      {showBottomNav && (
        <BottomNavigation
          showLabels
          value={navigationIndex}
          sx={{
            width: '100%',
            height: '75px',
            paddingBottom: '15px'
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
      )}
    </Stack>
  )
}

export default AppLayout
