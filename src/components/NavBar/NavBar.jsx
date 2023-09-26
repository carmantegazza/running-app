import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Box, AppBar, Container, Toolbar, Button } from '@mui/material';
import LoginCont from '../LoginCont/LoginCont';
import logo from '../../media/logo.png'
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
  <AppBar position='sticky' sx={{ backgroundColor: 'white' }}>
   <Container maxWidth="xl" >
    <Toolbar disableGutters sx= {{justifyContent: 'space-between'}}>
     <Link to='/'><Box
        component="img"
        sx={{ height: 60 }}
        alt="Logo"
        src={logo}
        paddingRight='1rem'>
      </Box></Link>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '1rem'}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ fontSize: '20px', my: 2, color: '#004aad', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
      <Box>
        <LoginCont />
      </Box>
    </Toolbar>
  </Container>
</AppBar>

)

}

export default NavBar;