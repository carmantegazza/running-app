import { Grid, Box, Button } from "@mui/material";
import './MainCont.css';

const MainCont = () => {
  return (

        <Box height= '120vh' className='mainBg'>
            <Grid container
                    padding={3}
                    >
                <Grid s={4} >
                  <Box  width='30vw'
             
                        
                        >
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi, obcaecati facilis, accusantium quasi dolor earum possimus unde debitis nesciunt repellendus ad. Iure, rerum exercitationem. Suscipit repellat praesentium eos eaque?</p>
                    <Button variant="contained" size="large">
                    Go
                    </Button>
                  </Box>
                </Grid>
                <Grid s={8}></Grid>
            </Grid>
        </Box>

  )
}

export default MainCont