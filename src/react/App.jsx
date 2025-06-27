import React from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { CssBaseline } from '@mui/material'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import AppLayout from './AppLayout'
import { AppBarProvider } from './Providers/AppBarProvider'
import { PersonProvider } from './Providers/PersonProvider'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: defaultTheme => ({
        html: {
          width: '100%',
          height: '100%'
        },
        body: {
          width: '100%',
          height: '100%',
          background: defaultTheme.palette.grey[200]
        },
        '#app': {
          width: '100%',
          height: '100%'
        }
      })
    }
  }
})

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <AppBarProvider>
    <PersonProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppLayout />
        </Router>
      </ThemeProvider>
    </PersonProvider>
  </AppBarProvider>
)

// register the Workbox‐generated service worker.
// It tells the client to install the service worker which is needed for PWA functionality.
// The service handles all kinds of background tasks like caching of static files and updating them when they change.
// It could also handle push notifications.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.error('SW registration failed:', err))
  })
}
