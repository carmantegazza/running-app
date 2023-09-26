import React from 'react';
import { useState } from 'react';
import { Box, AppBar, Container, Toolbar, Button} from '@mui/material';
import LoginCont from '../LoginCont/LoginCont';
import NavBarMenu from '../NavBarMenu/NavBarMenu';
import NavBarLogo from '../NavBarLogo/NavBarLogo';
import NavBarNav from '../NavBarNav/NavBarNav';


const NavBar = () => {

return (
  <AppBar position='sticky' sx={{ backgroundColor: 'white' }}>
   <Container maxWidth="xl" >
    <Toolbar disableGutters sx= {{justifyContent: 'space-between'}}>
      <NavBarMenu />
      <NavBarLogo />
      <NavBarNav />
      <LoginCont />
    </Toolbar>
  </Container>
</AppBar>

)

}

export default NavBar;