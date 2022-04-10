import { Paper } from '@mui/material'
import React from 'react'

export default function EmailConfirmBanner() {
  return (
    <Paper className='h-14 bg-gr' sx={{backgroundColor:"rgb(134, 239, 172)"}}>
        <p className='flex text-white font-bold h-full justify-center items-center'>Please confirm your email. Link has been sent to your email address</p>
    </Paper>
  )
}
