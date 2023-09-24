import { Grid, Box } from '@mui/material';
import LoginCont from '../LoginCont/LoginCont';
import logo from '../../media/logo.jpg'
import './NavBar.css'

const NavBar = () => {

return (
  <Grid 
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    rowSpacing={1}
    paddingX={1}
    className='nav'
    spacing={2}>
    <Grid item s={2}>
      <Box
        component="img"
        sx={{ height: 54 }}
        alt="Logo"
        src={logo}>
      </Box>
    </Grid>
    <Grid item s={6}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Grid>
    <Grid item s={4}>
        <LoginCont />
    </Grid>
  </Grid>

)

}

export default NavBar;