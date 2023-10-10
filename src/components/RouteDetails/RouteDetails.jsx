import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getRoutes } from '../../service/routeService'
import { Box, Typography, Grid, Paper, Container } from '@mui/material'

const RouteDetails = () => {
  const [data, setData] = useState();
  const { id } = useParams()

  useEffect(() => {
    getRoutes().then((res) => {
      setData(res.filter((route) => route._id === id))
    })

  }, [id])

  console.log(data)

  const paperStyle = {
    padding: '20px',
    backgroundColor: 'rgba(63, 101, 154)',
    borderRadius: '30px',
    boxShadow: '0 3px 3px rgb(103, 103, 103)',
    display: 'flex',
    flexDirection: 'column'
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: 'lightblue',
    borderRadius: '30px',
    boxShadow: '0 3px 3px rgb(103, 103, 103)',

  };

  return (
    // <Box>
    //     { data && (
    //     <Box>
    //     <Typography color='blue' variant="h5">Route Name: {data[0].name}</Typography>
    //     <Typography color='blue' variant="h5">Distance: {data[0].distance} metros</Typography>
    //     <Typography color='blue' variant="h5">Location: {data[0].location}</Typography>
    //     </Box>
    //     ) }
    // </Box>
    <Container sx={{ 
      height: '84vh',
      boxSizing:'border-box', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Grid container
        direction='row' gap='10px' padding='10px' justifyContent='center' >
        {/* Card a la izquierda */}
        <Grid item xs={4} >
          <Paper style={paperStyle}>
            {data && (
              <>
                <Typography color='white' variant="h5">Route Name: {data[0].name}</Typography>
                <Typography color='white' variant="h5">Distance: {data[0].distance} metres</Typography>
                {/* <Typography color='white' variant="h5">Distance: <span style={{ color: 'black' }}>{data[0].distance} metres</span></Typography> */}

                <Typography color='white' variant="h5">Location: {data[0].location}</Typography>
                <Typography color='white' variant="h5">Difficulty: {data[0].difficulty}</Typography>
                <Typography color='white' variant="h5">Elevation Gain: {data[0].elevation_gain}</Typography>
                <Typography color='white' variant="h5">Estimated Moving Time: {data[0].estimated_moving_time}</Typography>
              </>
            )}
          </Paper>
        </Grid>
        {/* Card a la derecha */}
        <Grid item xs={7}>
          <div style={{
            backgroundImage: data ? `url(${data[0].image})` : 'none',
            backgroundSize: 'cover', // Otras propiedades de estilo de fondo
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '500px', // Ajusta según tus necesidades
            // width: '100vw',
            borderRadius: '30px',
            boxShadow: '0 3px 3px rgb(103, 103, 103)',
          }}>
          </div>
        </Grid>

      </Grid>

    </Container>

  )
}

export default RouteDetails