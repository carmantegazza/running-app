import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getRoutes } from '../../service/routeService'
import { Typography, Grid, Paper } from '@mui/material'
import EventButton from '../EventButton/EventButton'
import { getEventsFromOneRoute } from '../../service/eventService'

const RouteDetails = () => {
  const [routeData, setRouteData] = useState();
  const [eventData, setEventData] = useState();
  const { id } = useParams()

  useEffect(() => {
    getRoutes().then((res) => {
      setRouteData(res.filter((route) => route._id === id))
    })

    getEventsFromOneRoute().then((res) => {
    setEventData(res)
    console.log(eventData)
    
  })
    
    
  },[id])

 const paperStyle = {
    padding: '20px',
    backgroundColor: 'rgba(63, 101, 154)',
    borderRadius: '30px',
    boxShadow: '0 3px 3px rgb(103, 103, 103)',
    display: 'flex',
    flexDirection: 'column'
  };

 
  return (
   
    // <Container sx={{ 
    //   width: '80vh',
    //   height: '84vh',
    //   boxSizing:'border-box', 
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }}>

      <Grid container 
        sx={{flex:'1', direction:'row', gap:'10px', padding:'10px', justifyContent:'center' , boxSizing:'border-box' , display:'flex' , alignItems:'center', height:'67vh'}} >
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', height:'100%'}}>
        {/* Card a la izquierda */}
        <Grid item sx={{width:500}}>
          <Paper style={paperStyle}>
            {routeData && (
              <>
                <Typography color='white' variant="h5">Route Name: {routeData[0].name}</Typography>
                <Typography color='white' variant="h5">Distance: {routeData[0].distance} metres</Typography>
                {/* <Typography color='white' variant="h5">Distance: <span style={{ color: 'black' }}>{data[0].distance} metres</span></Typography> */}

                <Typography color='white' variant="h5">Location: {routeData[0].location}</Typography>
                <Typography color='white' variant="h5">Difficulty: {routeData[0].difficulty}</Typography>
                <Typography color='white' variant="h5">Elevation Gain: {routeData[0].elevation_gain}</Typography>
                <Typography color='white' variant="h5">Estimated Moving Time: {routeData[0].estimated_moving_time}</Typography>
              </>
            )}
          </Paper>
        </Grid>
        {/* Card a la derecha */}
        {/* Card de events */}
        <Grid item sx={{width:500}}>
          <Paper style={paperStyle}>
            {routeData && (
              <>
                <EventButton />
              </>
            )}
          </Paper>
        </Grid>
        {/* Card de events */}
        </div>

        <Grid item xs={6} paddingLeft={10}>
          <div style={{
            backgroundImage: routeData ? `url(${routeData[0].image})` : 'none',
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

    // </Container>

  )
}

export default RouteDetails