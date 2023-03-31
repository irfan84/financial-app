import { Typography, useTheme, Box } from '@mui/material'
import React from 'react'
import FlexBetween from './FlexBetween'

type Props = {
  icon?: React.ReactNode
  title: string
  subtitle?: string
  sideText: string
}

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme()
  return (
    <FlexBetween color={palette.grey[400]} margin='1.5rem 1rem 0rem 1rem'>
      {icon && icon}
      <Box>
        <Typography variant='h4' mb='-0.1rem'>
          {title}
        </Typography>
        {subtitle && <Typography variant='h6'>{subtitle}</Typography>}
      </Box>
      <Typography variant='h5' fontWeight='700' color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  )
}

export default BoxHeader
