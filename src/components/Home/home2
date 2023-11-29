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
            style={{backgroundImage: `url(${bgDark})`, backgroundSize: 'cover', backgroundPosition: '70%'}}>
          <Grid item xs={11} md={5}
            padding='2rem'
            color='white'
            fontSize='1.3rem'
            marginTop='5%'>
            <Typography 
                  variant='h2'
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
              height='auto'
              paddingY='5%'
              justifyContent='center'
              alignItems='center'
              backgroundColor= 'rgba(63, 101, 154)'>
                <Typography variant='h2' color='white' marginTop= '30px' paddingBottom='10px' borderBottom='2px solid white' textAlign='center'>Discover tr<strong>AI</strong>ning</Typography>
                <Typography variant='h3' color='white' paddingY= '20px' paddingX= '40px' justifySelf='center' textAlign='center'>Run to the beat of Your Goals</Typography>
          <Carrousel />
        </Grid>
    </Grid>
  )
}

export default Home