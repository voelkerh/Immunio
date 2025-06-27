import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Typography, IconButton, Toolbar } from '@mui/material'

import { useNavigate } from 'react-router-dom'

import { useAppBar } from '../Providers/AppBarProvider'

const CustomAppBar = ({ position }) => {
  const { config } = useAppBar()
  const navigate = useNavigate()
  return (
    <AppBar
      position={position}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme => theme.zIndex.appBar
      }}
    >
      <Toolbar variant="dense">
        {config.showBackButton && (
          <IconButton
            onClick={() => navigate(config.backPath)}
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
          >
            {config.icon}
          </IconButton>
        )}
        <Typography
          variant="h6"
          color="inherit"
          component="div"
        >
          {config.title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

CustomAppBar.propTypes = {
  position: PropTypes.string
}

export default CustomAppBar
