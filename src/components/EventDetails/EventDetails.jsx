import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

import { Typography, Grid, Paper, Container } from '@mui/material'

const EventDetails = () => {
  const [data, setData] = useState();
  const { id } = useParams()

  useEffect(() => {
    // getEventsFromOneRoute().then((res) => {
    //   setData(res.filter((events) => events._id === id))
    //   console.log(data)
    // })

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
                <Typography color='white' variant="h5">Event Name: {data[1].name}</Typography>
                <Typography color='white' variant="h5">Organizer: {data[1].organizer}</Typography>
                
              </>
            )}
          </Paper>
        </Grid>
        {/* Card a la derecha */}
        <Grid item xs={7}>
          <div style={{
            backgroundImage: data ? `url(${data[1].organizer_img})` : 'none',
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

export default EventDetails