import { Grid, Box, Button, Paper } from "@mui/material"
import { RiRunLine } from "@react-icons/all-files/ri/RiRunLine"

const Home = () => {
  return (
    <Grid  
        container 
        height= '120vh'
        className='mainBg'
        direction='row'>
        <Grid item xs={12}>
          <Grid item xs={8} md={4}
            padding='2rem'
            marginLeft='1rem'
            color='white'
            fontSize='1.3rem'
            textAlign='justify'
            justifyContent='flex-end'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi, obcaecati facilis, accusantium quasi dolor earum possimus unde debitis nesciunt repellendus ad. Iure, rerum exercitationem. Suscipit repellat praesentium eos eaque?</p>
            <Grid item xs={12} display='grid' justifyContent='center'>
            <Button variant="contained" size="large" endIcon={<RiRunLine />}>Go</Button>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default Home