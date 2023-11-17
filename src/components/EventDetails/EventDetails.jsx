import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getEvent } from '../../service/eventService'
import { Typography, Grid, Paper, Container } from '@mui/material'

const EventDetails = () => {
  const [eventData, setEventData] = useState(); // Estado para almacenar datos de eventos
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL

  useEffect(() => {
    console.log(id)
    getEvent(id).then((res) => {
      console.log(res)
      setEventData(res); // Update the state with the response data
      
    });

  }, [id])
  console.log(eventData)

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
      sx={{ gap: '20px', padding: '10px', justifyContent: 'center', boxSizing: 'border-box', display: 'flex', alignItems: 'center', height: '67vh' }} >
      <Grid >
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
      </Grid>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Card a la derecha */}
        <Grid item sx={{ width: 500, height:'100%' }}>
          <Paper style={paperStyle}>
            {eventData && (
              <>
                <Typography color='white' variant="h5">Event Name: {eventData.name}</Typography>
                <Typography color='white' variant="h5">Organizer: {eventData.organizer}</Typography>
              </>
            )}
          </Paper>
        </Grid>
      </div>

    </Grid>

  )
}

export default EventDetails