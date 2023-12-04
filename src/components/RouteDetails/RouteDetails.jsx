import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getRoutes } from '../../service/routeService'
import { Typography, CardContent, Grid, Box, Button } from '@mui/material'
import { getEventsFromOneRoute } from '../../service/eventService'
import { Link } from 'react-router-dom'

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
        const routeId = id; // Utilizamos el 'id' de la URL
        const data = await getEventsFromOneRoute(routeId);
        setEventData(data); // Actualizamos el estado con los datos de eventos

      } catch (error) {
        console.error('Error al obtener los datos de eventos:', error);
      }
    };

    fetchEventsData();
  }, [id]); // Este efecto se ejecuta cuando 'id' cambia

  const borderBottomStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: '8px',
  };

  return (

    <CardContent>
      {routeData && (
        <>
          <Typography variant="h4" sx={{ textShadow: '5px 5px 8px rgba(0, 0, 0, 0.2)', marginBottom: '25px', textAlign: 'center', fontFamily: "Helvetica", color: "rgba(63, 101, 154)", fontWeight: 'bold' }} component="div">
            {routeData[0].name.toUpperCase()}
          </Typography>
          <Grid container spacing={2} >
            {/* Left side */}
            <Grid item xs={6}>
              <div
                style={{
                  backgroundImage: routeData ? `url(${routeData[0].image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '500px',
                  width: '100%', // Adjust to your preference
                  borderRadius: '30px',
                  boxShadow: '0 4px 4px rgb(103, 103, 103)'
                }}
              ></div>
            </Grid>

            {/* Right side */}
            <Grid item xs={6}>
              <Box
                bgcolor="rgba(63, 101, 154)"
                color="white"
                p={1}
                textAlign="center"
                fontFamily="Helvetica"
                borderRadius={10}
                marginBottom={2}
              >
                <Typography variant="h6" component="div">
                  CHARACTERISTICS
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {/* Left side: Titles */}
                  <Typography component="div" style={{ textAlign: 'left', color: '#004aad' }}>
                    <p style={{ ...borderBottomStyle }}>Distance</p>
                    <p style={{ ...borderBottomStyle }}>Location</p>
                    <p style={{ ...borderBottomStyle }}>Difficulty</p>
                    <p style={{ ...borderBottomStyle }}>Elevation Gain</p>
                    <p style={{ ...borderBottomStyle }}>Estimated Moving Time</p>
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  {/* Right side: Information from the database */}
                  <Typography component="div" style={{ textAlign: 'left' }}>
                    <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{routeData[0]?.distance || 'pending...'} mi</p>
                    <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{routeData[0]?.location || 'pending...'}</p>
                    <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{routeData[0]?.difficulty || 'pending...'}</p>
                    <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{routeData[0]?.elevation_gain || 'pending...'}</p>
                    <p style={{ ...borderBottomStyle }}>{routeData[0]?.estimated_moving_time || 'pending...'}</p>
                  </Typography>
                </Grid>
              </Grid>

              <Box
                bgcolor="rgba(63, 101, 154)" 
                color="white" 
                p={1} 
                textAlign="center"
                fontFamily="Helvetica"
                borderRadius={10} 
                marginBottom={2}
              >
                <Typography variant="h6" component="div">
                  EVENTS
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={9}>
                  {/* Left side: Titles */}
                  {eventsData && eventsData.length ? (
                    eventsData.map((event, index) => (
                      <div key={index}>
                        <Typography component="div" style={{ textAlign: 'left', color: '#004aad' }}>
                          <p style={borderBottomStyle}>{event.name}</p>
                        </Typography>
                      </div>
                    ))
                  ) : (
                    <Typography component="div" style={{ textAlign: 'left', color: '#004aad' }}>No events on this route</Typography>
                  )}
                </Grid>

                <Grid item xs={3}>
                  {/* Right side: More Info links */}
                  {eventsData && eventsData.length ? (
                    eventsData.map((event, index) => (
                      <div key={index}>
                        <Typography component="div" style={{ textAlign: 'right' }}>
                          <Link to={`/event/${event._id}`}>
                            <Button style={{ margin: '10px', backgroundColor: "rgba(63, 101, 154)", color: "white" }}>More Info</Button>
                          </Link>
                        </Typography>
                      </div>
                    ))
                  ) : null}
                </Grid>
              </Grid>
            </Grid>

            
          </Grid>
        </>
      )}
    </CardContent>

  );

}

export default RouteDetails