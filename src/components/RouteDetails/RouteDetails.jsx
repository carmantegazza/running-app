import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getRoutes } from '../../service/routeService'
import { Typography, Grid, Paper } from '@mui/material'
import { getEventsFromOneRoute } from '../../service/eventService'

const RouteDetails = () => {
  const [routeData, setRouteData] = useState(); // Estado para almacenar datos de rutas
  const [eventsData, setEventData] = useState(); // Estado para almacenar datos de eventos
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL

  useEffect(() => {
        getRoutes().then((res) => {
          setRouteData(res.filter((route) => route._id === id))
        })

   const fetchEventsData = async () => {
      try {
        const eventsrouteId = id; // Utilizamos el 'id' de la URL
        const data = await getEventsFromOneRoute(eventsrouteId);
        setEventData(data); // Actualizamos el estado con los datos de eventos
      } catch (error) {
        console.error('Error al obtener los datos de eventos:', error);
      }
    };

    // Llama a la función para obtener datos cuando 'id' cambia
    fetchEventsData();
  }, [id]); // Este efecto se ejecuta cuando 'id' cambia
  // El componente renderiza aquí, usando 'routeData' y 'eventsData' si están disponibles


 const paperStyle = {
    padding: '20px',
    backgroundColor: 'rgba(63, 101, 154)',
    borderRadius: '30px',
    boxShadow: '0 3px 3px rgb(103, 103, 103)',
    display: 'flex',
    flexDirection: 'column'
  };
  return (
   
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
                <Typography color='white' variant="h5">Location: {routeData[0].location}</Typography>
                <Typography color='white' variant="h5">Difficulty: {routeData[0].difficulty}</Typography>
                <Typography color='white' variant="h5">Elevation Gain: {routeData[0].elevation_gain}</Typography>
                <Typography color='white' variant="h5">Estimated Moving Time: {routeData[0].estimated_moving_time}</Typography>
              </>
            )}
          </Paper>
        </Grid>
        {/* Card a la derecha */}
          <Grid item sx={{width:500}}>
          <Paper style={paperStyle}>
          {eventsData && (
      <>
        <Typography color="white" variant="h5">Events on this Route:</Typography>
        {eventsData.map((event, index) => (
          <div key={index}>
            <Typography color="white" variant="h6">Event  {index + 1}:</Typography>
            <Typography color="white" variant="body1">Name: {event.name}</Typography>
            <Typography color="white" variant="body1">Organizer: {event.organizer}</Typography>
            </div>
        ))}
      </>
    )}
          </Paper>
        </Grid>
        {/* Card de events */}
        </div>

        <Grid item xs={6} paddingLeft={10}>
          <div style={{
            backgroundImage: routeData ? `url(${routeData[0].image})` : 'none',
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '500px', 
            borderRadius: '30px',
            boxShadow: '0 3px 3px rgb(103, 103, 103)',
          }}>
          </div>
        </Grid>
      </Grid>
  )
}

export default RouteDetails