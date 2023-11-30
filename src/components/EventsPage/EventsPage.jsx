import React from 'react';
import { getEvents, updateEvent } from '../../service/eventService';
import { addFavEvent, getUser } from '../../service/userService'
import { useState, useEffect } from 'react';
import { ButtonGroup, Stack, Divider, Card, CardHeader, CardContent, Typography, Avatar, Box, IconButton} from '@mui/material';
import { FaRegCalendarPlus } from '@react-icons/all-files/fa/FaRegCalendarPlus.esm'
import { TiTick } from '@react-icons/all-files/ti/TiTick.esm'
import { FaRegHeart } from '@react-icons/all-files/fa/FaRegHeart.esm'
import { FaHeart } from '@react-icons/all-files/fa/FaHeart.esm'
import { FaInfo } from '@react-icons/all-files/fa/FaInfo.esm'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EventsPage = () => {
    
    const user = useSelector((store) => store.userReducer.user);
    const [allEvents, setAllEvents] = useState();
    const [userData, setUserData] = useState();
    const [hasJoined, setHasJoined] = useState(false);

    useEffect(() => {
        getEvents().then((res) => {
          setAllEvents(res); 
        });
    
      }, [])  

      useEffect(() => {
        getUser().then((res) => {
          setUserData(res); 
        });
    
      }, [])  
      
    console.log(userData)  

    return (
        <Stack
        marginTop={10}
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
                  { !user ?
                    <Typography variant='overline' textAlign='center' color='#004aad'>Log in to join the event!
                    </Typography> :
                    <ButtonGroup>
                      {!event.usersJoin.includes(user.id) ?
                      <IconButton onClick={() => updateEvent(event._id, user.id, user)}> 
                        <FaRegCalendarPlus /> 
                      </IconButton>:
                      <IconButton disabled> <TiTick/> </IconButton>                        
                      }
                      {!userData.favEvents ? 
                      <IconButton onClick={() => addFavEvent( event._id, user.id, user )}> <FaRegHeart /> </IconButton>:
                      <IconButton> <FaHeart color='#C41E3D'/> </IconButton>
                      }
                      <Link to={`/event/${event._id}`}>
                        <IconButton> <FaInfo color="#004aad"/> </IconButton>
                      </Link></ButtonGroup> 
                   }
                </Box>
                
              </Card>
            )
        })}

      </Stack>
  )
}

export default EventsPage