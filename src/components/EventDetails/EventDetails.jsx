import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getRoute } from '../../service/routeService'
import { getEvent, updateEvent } from '../../service/eventService';
import { Typography, Grid, Button, Box, CardContent } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const EventDetails = () => {

  const user = useSelector((store) => store.userReducer.user);
  const [isSubscribed, setSubscribed] = useState(false);

  const [eventData, setEventData] = useState();
  const { id } = useParams();
  const [routeData, setRouteData] = useState();

  const fetchRouteData = async (route) => {
    try {
      const routeId = route;
      const data = await getRoute(routeId);
      setRouteData(data);
    } catch (error) {
      console.error('Error al obtener los datos de eventos:', error);
    }
  }

  useEffect(() => {
    getEvent(id).then((res) => {
      setEventData(res);
    });
  }, [id]);

  useEffect(() => {
    if (eventData && eventData.route) {
      fetchRouteData(eventData.route);
    }
  }, [eventData]);

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleSubscribeClick = async () => {
    try {
      await updateEvent(eventData._id, user.id, user);
      setButtonDisabled(true);
      setSubscribed(true);
    } catch (error) {
      console.error('Error al suscribirse al evento:', error);
    }
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  const borderBottomStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: '8px',
  };

  return (


    <CardContent sx={{marginTop: '12vh', marginBottom: '8vh'}}>
      <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center', height: '67vh' }} >
        <Box
          bgcolor="rgba(63, 101, 154)"
          color="white"
          p={1}
          textAlign="center"
          fontFamily="Helvetica"
          borderRadius={10}
          marginBottom={2}
        >
          {eventData && (
            <>
              <Typography variant="h6" component="div">{eventData.name.toUpperCase()}</Typography>
            </>
          )}
        </Box>
        <Grid container spacing={2} sx={{ justifyContent: 'center', display: 'flex' }}>
          <Grid item xs={4} sx={{ justifyContent: 'center', display: 'flex' }}>
            {eventData && (
              <>
                <div style={{
                  backgroundImage: eventData.organizer_img ? `url(${eventData.organizer_img})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '250px',
                  width: '250px',
                  borderRadius: '30px',
                  boxShadow: '0 4px 4px rgb(103, 103, 103)'
                }}>
                </div>
              </>
            )}

          </Grid>

          {eventData && (
            <>
              <Grid item xs={4}>
                <Typography component="div" style={{ textAlign: 'left', color: '#004aad' }}>
                  <p style={{ ...borderBottomStyle }}>Location</p>
                  <p style={{ ...borderBottomStyle }}>Organizer</p>
                  <p style={{ ...borderBottomStyle }}>Inscription Fee</p>
                  <p style={{ ...borderBottomStyle }}>Date</p>
                  <p >Description</p>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography component="div" style={{ textAlign: 'left' }}>
                  <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{routeData && (routeData.location) || 'pending...'} </p>
                  <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{eventData.organizer || 'pending...'} </p>
                  <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>US${eventData.price || 'pending...'}</p>
                  <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{(new Date(eventData.date)).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  }) || 'pending...'}</p>
                  <p style={{ marginBottom: '8px' }}>{eventData.description || 'pending...'}</p>
                </Typography>
              </Grid>
              <Grid container alignItems="center" direction="column">
                <Grid item>
                  {!user ?
                    <Link to={`/signin`}>
                      <Button style={{ margin: '10px', borderBottom: '2px solid #1976d2' }} size='large' >
                        Log in to join the event!
                      </Button>
                    </Link> :
                    <>
                      {!eventData.usersJoin.includes(user.id) ?
                        <Link>
                          <Button style={{ margin: '10px', borderBottom: '2px solid #1976d2' }} size='large' onClick={handleSubscribeClick}
                            disabled={isButtonDisabled}>
                            {isSubscribed ? 'Subscribed to this event' : 'Subscribe to this event'}
                          </Button>
                        </Link> :
                        <Link>
                          <Button style={{ margin: '10px', borderBottom: '2px solid #1976d2' }} size='large' disabled>
                            Subscribed to this event
                          </Button>
                        </Link>
                      }
                    </>
                  }

                </Grid>

                <Grid item >
                  <Button onClick={handleBackClick} style={{ margin: '2px', backgroundColor: "rgba(63, 101, 154)", color: "white" }} size='large'>
                    BACK
                  </Button>
                </Grid>
              </Grid>
            </>
          )}

        </Grid>
      </Grid>
    </CardContent>

  )
}

export default EventDetails