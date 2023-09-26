import { Box } from '@mui/material'
import React from 'react'
import { RiMenu5Fill } from '@react-icons/all-files/ri/RiMenu5Fill'

const NavBarMenu = () => {
  return (
    <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <RiMenu5Fill fontSize='1.6rem' color='#004aad'/>
    </Box>
  )
}

export default NavBarMenu