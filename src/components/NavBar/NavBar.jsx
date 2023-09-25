import React from 'react';
import { useState } from 'react';
import { Box, AppBar, Container, Toolbar, Button } from '@mui/material';
import LoginCont from '../LoginCont/LoginCont';
import logo from '../../media/logo.jpg'
import './NavBar.css'

const NavBar = () => {

  const pages = ['Routes', 'Athletes', 'News'];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

return (
  <AppBar position='static' sx={{ backgroundColor: 'white'}}>
   <Container maxWidth="xl">
    <Toolbar disableGutters justifyContent='space-between'>
     <Box
        component="img"
        sx={{ height: 54 }}
        alt="Logo"
        src={logo}>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '1rem'}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ fontSize: '20px', my: 2, color: '#7C83FD', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
      <Box justifySelf='flex-end'>
        <LoginCont />
      </Box>
    </Toolbar>
  </Container>
</AppBar>

)

}

export default NavBar;