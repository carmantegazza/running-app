import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button, Grid } from '@mui/material';
import { AiOutlineFacebook } from '@react-icons/all-files/ai/AiOutlineFacebook';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import { FiYoutube } from '@react-icons/all-files/fi/FiYoutube';
import logo from '../../media/logo.png'
import '../../index.css';

// Comentario de prueba
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        trAIning App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
     <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '10vh'
        }}
      > 
       
       <Container component="main" sx={{ mt: 4, mb: 1 }} maxWidth="sm">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              sx={{ display:{md: 'flex'}, height: 80 }}
              alt="Logo"
              src={logo}
              paddingRight='1rem'>
            </Box>
            <Typography variant="body2" color="text.secondary">
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are a company dedicated to providing the best service to our
              customers.
            </Typography>
            </Grid>
          <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@training.ai
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
             </Typography>
             <Typography variant="body2" color="text.secondary">
              Follow us:
             </Typography>
             <Box sx={{height: '3vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                  <Button><AiOutlineFacebook fontSize='20px'/></Button>
                  <Button><FiInstagram fontSize='20px'/></Button>
                  <Button><FiYoutube  fontSize='20px'/></Button>
             </Box>
          </Grid>
        </Grid>
        </Container>
            <Box
              component="footer"
              sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
              }}
            >
            <Container maxWidth="sm">
            
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}