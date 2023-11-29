import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material'

const NavBarNav = () => {

    const pages = ['Routes', 'Athletes', 'News'];

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
//004aad
  return (
    <Box sx={{ width:'100%',flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '2rem'}}>
            {pages.map((page) => (
                    <Link to={page} key={page} style={{textDecoration: 'none'}}>
                      <Button
                          onClick={handleCloseNavMenu}
                          sx={{ fontSize: '20px', my: 2, color: 'black', display: 'block', textDecoration: 'none' }}>
                          {page}
                      </Button>
                    </Link>
            ))}
          </Box>
  )
}

export default NavBarNav