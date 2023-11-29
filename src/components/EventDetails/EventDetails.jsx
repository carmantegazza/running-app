import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getEvent } from '../../service/eventService'
import { Typography, Grid, Button, Box, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

const EventDetails = () => {
  const [eventData, setEventData] = useState(); // Estado para almacenar datos de eventos
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL

  useEffect(() => {
    getEvent(id).then((res) => {
      setEventData(res); // Update the state with the response data
    });

  }, [id])

  const borderBottomStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: '8px',
  };

  return (


    <CardContent>
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
            {/* Left side: Titles */}
            {eventData && (
              <>
                <div style={{
                  backgroundImage: eventData ? `url(${eventData.organizer_img})` : 'none',
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
                  <p style={{ ...borderBottomStyle }}>Organizer</p>
                  <p style={{ ...borderBottomStyle }}>Price</p>
                  <p >Description</p>
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography component="div" style={{ textAlign: 'left' }}>
                  <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>{eventData.organizer || 'pending...'} metres</p>
                  <p style={{ ...borderBottomStyle, marginBottom: '8px' }}>US${eventData.price || 'pending...'}</p>
                  <p style={{ marginBottom: '8px' }}>{eventData.description || 'pending...'}</p>
                </Typography>

                <Typography component="div" style={{ textAlign: 'right', paddingTop: '20px' }}>
                  <Link to={`/routes/${eventData.route}`}>
                    <Button style={{ margin: '2px', backgroundColor: "rgba(63, 101, 154)", color: "white" }} size='large' >
                      BACK ...
                    </Button>
                  </Link>
                </Typography>
              </Grid>

              <Link to={`/signin`}>
                <Button style={{margin: '10px', borderBottom: '2px solid #1976d2'}} size='large' >
                  Subscribe to this event
                </Button>
              </Link>

            </>
          )}

        </Grid>

      </Grid>
    </CardContent>

  )
}

export default EventDetails