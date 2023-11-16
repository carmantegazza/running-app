import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import LoginCont from '../LoginCont/LoginCont';
import NavBarMenu from '../NavBarMenu/NavBarMenu';
import NavBarLogo from '../NavBarLogo/NavBarLogo';
import NavBarNav from '../NavBarNav/NavBarNav';


const NavBar = () => {

return (
  <AppBar position='sticky' sx={{ backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter:'blur(5px)' }}>
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