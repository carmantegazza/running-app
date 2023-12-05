import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Typography, CardContent, Grid, Box, Button } from '@mui/material'
import { getEvents } from '../../service/eventService'
import { getRoute } from '../../service/routeService'
import { Link } from 'react-router-dom'
import { FaInfo } from '@react-icons/all-files/fa/FaInfo.esm'

const RouteDetails = () => {
  const [routeData, setRouteData] = useState(); 
  const [eventsData, setEventsData] = useState(); 
  const { id } = useParams(); 

  useEffect(() => {

    getRoute(id).then((res) => {
      setRouteData(res)
    })
    getEvents().then((res) => {
      const data = res
      setEventsData(data.filter((event) => id == event.route))
    })

  }, [id]); 

  const borderBottomStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: '8px',
  };

  return (

    <CardContent>
      {routeData && (
        <>
          <Typography variant="h4" sx={{ textShadow: '5px 5px 8px rgba(0, 0, 0, 0.2)', marginBottom: '25px', textAlign: 'center', fontFamily: "Helvetica", color: "rgba(63, 101, 154)", fontWeight: 'bold' }} component="div">
            {routeData.name.toUpperCase()}
          </Typography>
          <Grid container spacing={2} >
            <Grid item xs={6}>
              <div
                style={{
                  backgroundImage: routeData ? `url(${routeData.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '500px',
                  width: '100%', 
                  borderRadius: '30px',
                  boxShadow: '0 4px 4px rgb(103, 103, 103)'
                }}
              ></div>
            </Grid>
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
                  <Typography component="div" style={{ textAlign: 'left', color: '#004aad' }}>
                    <p style={{ ...borderBottomStyle }}>Distance</p>
                    <p style={{ ...borderBottomStyle }}>Location</p>
                    <p style={{ ...borderBottomStyle }}>Difficulty</p>
                    <p style={{ ...borderBottomStyle }}>Elevation Gain</p>
                    <p style={{ ...borderBottomStyle }}>Estimated Moving Time</p>
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography component="div" style={{ textAlign: 'left' }}>
                    <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{routeData?.distance || 'N/A'} mi</p>
                    <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{routeData?.location || 'N/A'}</p>
                    <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{routeData?.difficulty|| 'N/A'}</p>
                    <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{routeData?.elevation_gain || 'N/A'}</p>
                    <p style={{ ...borderBottomStyle }}>{routeData[0]?.estimated_moving_time || 'N/A'}</p>
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
                  {eventsData && eventsData.length > 0 ? (
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
                  {eventsData && eventsData.length ? (
                    eventsData.map((event, index) => (
                      <div key={index}>
                        <Typography component="div" style={{ textAlign: 'right' }}>
                          <Link to={`/event/${event._id}`}>
                            <Button style={{ margin: '10px', backgroundColor: "rgba(63, 101, 154)", color: "white" }} 
                                    endIcon={<FaInfo color='white'/>}>
                                    More Info</Button>
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