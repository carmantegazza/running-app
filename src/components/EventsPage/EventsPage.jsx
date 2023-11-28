import React from 'react';
import { getEvents, updateEvent } from '../../service/eventService';
import { useState, useEffect } from 'react';
import { Stack, Divider, Card, CardHeader, CardContent, Typography, Avatar, Box} from '@mui/material';
import { FaRegCalendarPlus } from '@react-icons/all-files/fa/FaRegCalendarPlus.esm'
import { FaRegCalendarMinus } from '@react-icons/all-files/fa/FaRegCalendarMinus.esm'
import { FaInfo } from '@react-icons/all-files/fa/FaInfo.esm'
import { Link } from 'react-router-dom';

const EventsPage = () => {
    
    const [allEvents, setAllEvents] = useState();

    useEffect(() => {
        getEvents().then((res) => {
          setAllEvents(res); 
        });
    
      }, [])

    return (
        <Stack
        marginTop={5}
        paddingX={10}
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        {allEvents && allEvents.map ((event) => {
            return (
                <Card key={event.id} style={{ marginBottom: 10 }} sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardHeader avatar={<Avatar alt={event.organizer} src={event.organizer_img} sx={{ width: 56, height: 56 }}/>}
                                title={event.name}
                                subheader={event.organizer}>
                    </CardHeader>
                    <CardContent sx={{ flex: '1 0 auto' }}>              
                        <Typography variant="body1" gutterBottom>{event.description}</Typography>
                        <Typography variant="overline" gutterBottom>Inscription fee: ${event.price}</Typography>
                    </ CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='overline' textAlign='center' color='#004aad'>Log in to join the event!</Typography>
                  {/* <IconButton> <FaRegCalendarPlus /> </IconButton>
                  <IconButton> <FaRegCalendarMinus /> </IconButton>
                  <Link to={`/event/${event._id}`}>
                    <IconButton> <FaInfo color="#004aad"/> </IconButton>
                  </Link> */}
                </Box>
                
              </Card>
            )
        })}

      </Stack>
  )
}

export default EventsPage