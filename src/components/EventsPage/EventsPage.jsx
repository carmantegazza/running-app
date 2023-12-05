import React from 'react';
import { getEvents } from '../../service/eventService';
import { getUser } from '../../service/userService';
import { useState, useEffect } from 'react';
import { Stack, Divider, Card, CardHeader, CardContent, Typography, Avatar, Box, IconButton} from '@mui/material';
import EventActions from '../EventActions/EventActions';
import { useSelector } from 'react-redux';

const EventsPage = () => {
    
    const [allEvents, setAllEvents] = useState();
    const user = useSelector((store) => store.userReducer.user);
    const [userData, setUserData] = useState();
  
  useEffect(() => {
    user &&
    getUser(user.id).then((res) => {
      setUserData(res); 
    });
  
  }, [])  

    useEffect(() => {
        getEvents().then((res) => {
          setAllEvents(res); 
        });
    
      }, [])  

     return (
      <>
      <Typography marginTop='15vh' variant='h3'> All the events </Typography>
        <Stack
        paddingX={10}
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        {allEvents && allEvents.map ((event) => {
            return (
                <Card key={event._id} style={{ marginBottom: 10 }} sx={{ display: 'flex' }}>
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
                  <EventActions eventData={event} userData={userData}/>
                </Box>
                
              </Card>
            )
        })}

      </Stack>
      </>
  )
}

export default EventsPage