import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Stack } from '@mui/system'
import { ArrowBack } from '@mui/icons-material'
import { Typography } from '@mui/material'

import { useAppBar } from '../../Providers/AppBarProvider'

const CountryView = () => {
  const { name } = useParams()
  const { setConfig } = useAppBar()

  useEffect(() => {
    setConfig({
      showBackButton: true,
      backPath: '/travel/map',
      icon: <ArrowBack />,
      title: 'Reisen'
    })
  }, [])

  return (
    <Stack
      flex="1 1 auto"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4">
        {name}
      </Typography>
    </Stack>
  )
}
export default CountryView
