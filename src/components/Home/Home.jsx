import { Link } from 'react-router-dom'
import { Grid, Button, Typography } from "@mui/material"
import { RiRunLine } from "@react-icons/all-files/ri/RiRunLine"
import Carrousel from '../Carrousel/Carrousel'
import bgDark from '../../media/bgDark.jpg'
import './Home.css'


const Home = () => {
  return (
    <Grid  
        container 
        direction='row'>
        <Grid item xs={12}
            height= '100vh'
            className='shadow'
            style={{backgroundImage: `url(${bgDark})`, backgroundSize: 'cover'}}>
          <Grid item xs={11} md={4}
            padding='2rem'
            marginLeft='1rem'
            color='white'
            fontSize='1.3rem'
            marginTop='8%'>
            <Typography 
                  variant='h3'
                  paddingBottom='1rem'>
                    Take your tr<strong>AI</strong>ning to the next level</Typography>
            <Typography paragraph={true} borderBottom='2px solid white' paddingBottom='1rem' textAlign='justify'>Let <strong>trAIning</strong> become the best personal trainer for you, powered by Strava, enhanced with AI, you'll be able to achive your goals in no time. </Typography>
            <Grid item xs={12} display='grid' justifyContent='flex-end'>
            <Link to='/about'><Button variant="contained" size="large" endIcon={<RiRunLine />}>
              Get Started</Button></Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid container
              height='100vh'
              paddingY='5%'
              justifyContent='center'
              alignItems='center'
              backgroundColor= 'rgba(63, 101, 154)'>
                <Typography variant='h3' color='white' paddingX='30px' paddingBottom='10px' borderBottom='2px solid white' marginY='auto'>Discover tr<strong>AI</strong>ning</Typography>
                <Typography variant='h5' color='white' justifySelf='center' >Run to the beat of Your Goals</Typography>
          <Carrousel />
        </Grid>
    </Grid>
  )
}

export default Home