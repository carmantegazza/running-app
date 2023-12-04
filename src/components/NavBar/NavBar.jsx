import React, {useState} from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import LoginCont from '../LoginCont/LoginCont';
import NavBarMenu from '../NavBarMenu/NavBarMenu';
import NavBarLogo from '../NavBarLogo/NavBarLogo';
import NavBarNav from '../NavBarNav/NavBarNav';


const NavBar = () => {
  const [userConfigOpen,setUserConfig] = useState(false)
  const handleLoginContButton = () => {
    setUserConfig(!userConfigOpen)
    // document.body.style.overflow = 'hidden'
  }
//position='fixed'
  // width:userConfigOpen? '70%' : '100%', transition:'width 1s ease-in-out', marginLeft:'0'
return (
  <AppBar sx={{display:'flex', alignSelf:'center', backgroundColor: 'rgba(255,255,255,0.3)', backdropFilter:'blur(3px)',width:'100%'}}>
    <Container maxWidth="1500px" style={{top:'0',left:'0',overFlow:'hidden'}} >
      <Toolbar disableGutters sx={{display:'flex',width:'100%',justifyContent: 'space-between'}}>
        <NavBarMenu />
        <NavBarLogo />
        <NavBarNav />
        <LoginCont onButtonClick={handleLoginContButton} userConfigOpen={userConfigOpen}/>
      </Toolbar>
    </Container>
  </AppBar>

)

}

export default NavBar;