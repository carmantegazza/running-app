import { Grid, Button, Typography } from "@mui/material"
import { css } from '@mui/system'
import { RiRunLine } from "@react-icons/all-files/ri/RiRunLine"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <Grid  
        container 
        height= '120vh'
        direction='row'
        className="mainBg">
        <Grid item xs={12}>
          <Grid item xs={11} md={4}
            padding='2rem'
            marginLeft='1rem'
            color='white'
            fontSize='1.3rem'>
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
    </Grid>
  )
}

export default Home