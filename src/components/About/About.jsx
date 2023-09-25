import React from 'react'
import { Container, Typography } from '@mui/material'
import { IoConstructOutline } from '@react-icons/all-files/io5/IoConstructOutline'

const About = () => {
  return (
    <Container sx={{height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <IoConstructOutline fontSize= '20px' color='red'/>
        <Typography>Site under construction</Typography>
    </Container>
  )
}

export default About
