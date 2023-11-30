import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material'

const NavBarNav = () => {

    const pages = ['Routes', 'Events', 'News'];

  return (
    <Box sx={{ width:'100%',flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '2rem'}}>
            {pages.map((page) => (
              <Link to={page} key={page} style={{textDecoration: 'none'}}>
                <Button
                  sx={{ fontSize: '20px', my: 2, color: '#004aad', display: 'block', textDecoration: 'none' }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
  )
}

export default NavBarNav