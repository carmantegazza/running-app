import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getEvent } from '../../service/eventService'
import { Typography, Grid, Paper, Container } from '@mui/material'

const EventDetails = () => {
  const [eventData, setEventData] = useState(); // Estado para almacenar datos de eventos
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL

  useEffect(() => {
    getEvent(id).then((res) => {
      setEventData(res); // Update the state with the response data
    });

  }, [id])



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
    <Container sx={{
      height: '84vh',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Grid container
        direction='row' gap='10px' padding='10px' justifyContent='center' >
        {/* Card a la izquierda */}
        <Grid item xs={7} >
          <Paper style={paperStyle}>
            {eventData && (
              <>
                <Typography color='white' variant="h5">Event Name: {eventData.name}</Typography>
                <Typography color='white' variant="h5">Organizer: {eventData.organizer}</Typography>

              </>
            )}
          </Paper>
        </Grid>
      </Grid>

    </Container>

  )
}

export default EventDetails