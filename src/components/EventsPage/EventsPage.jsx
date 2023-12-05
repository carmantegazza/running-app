import React from 'react';
import { getEvents } from '../../service/eventService';
import { getUser } from '../../service/userService';
import { useState, useEffect } from 'react';
import { Stack, Divider, Card, CardHeader, CardContent, Typography, Avatar, Box, IconButton} from '@mui/material';
import EventActions from '../EventActions/EventActions';
import { useSelector } from 'react-redux';
import '../Home/Home.css'

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
      <Box sx={{backgroundColor: 'rgba(63, 101, 154)',     
                boxShadow: '0px 100px 55px 90px rgba(63, 101, 154)',
                marginTop: '12vh',
                paddingY: '5vh',
                // position: 'fixed',
                width: '100vw',}}> 
        <Typography  variant='h3' color='white' textAlign='center' > Run Inspired </Typography>
        <Typography  variant='h5' color='white' textAlign='center'  >  Elevate your runs on the track and hikes on the trail, join our athlete hosted events! </Typography>
      </Box>

      <Stack
        // position='relative'
        // zIndex='1'
        // marginTop='40vh'
        paddingX={10}
        // overflow= 'hidden'
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