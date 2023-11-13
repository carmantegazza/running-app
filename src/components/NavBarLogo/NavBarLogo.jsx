import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import logo from '../../media/logo.png'

const NavBarLogo = () => {
  return (
    <Link to='/'>   
        <Box
            component="img"
            sx={{ display:{xs: 'none', md: 'flex'}, height: 60 }}
            alt="Logo"
            src={logo}
            paddingRight='1rem'>
    </Box>
  </Link>
  )
}


export default NavBarLogo