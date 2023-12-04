import React from 'react'
import { updateFavEvent, getUser } from '../../service/userService'
import { getEvent, updateEvent } from '../../service/eventService';
import { useState } from 'react';
import { ButtonGroup, Typography, IconButton} from '@mui/material';
import { FaRegCalendarPlus } from '@react-icons/all-files/fa/FaRegCalendarPlus.esm'
import { TiTick } from '@react-icons/all-files/ti/TiTick.esm'
import { FaRegHeart } from '@react-icons/all-files/fa/FaRegHeart.esm'
import { FaHeart } from '@react-icons/all-files/fa/FaHeart.esm'
import { FaInfo } from '@react-icons/all-files/fa/FaInfo.esm'
import { Link } from 'react-router-dom';


const EventActions = ({eventData, userData}) => {

  const [user, setUser] = useState(userData)
  const [eventInfo, setEventInfo] = useState(eventData)

  const handleUpdateEvent = async (eventId, userId) => {
    try {
      await updateEvent(eventId, userId, user);
      const updatedEvent = await getEvent(eventId)
      setEventInfo(eventInfo => ({...eventInfo, ...updatedEvent}));
    } catch (error) {
      console.error('Error updating event:', error);

    }

  };

  const handleUpdateFavEvent = async (eventId) => {
    try {
      await updateFavEvent(eventId, user._id , eventInfo);
      
      const updateduser = await getUser(user._id);
  
      setUser(user => ({ ...user, ...updateduser }));
    } catch (error) {
      console.error('Error updating fav event:', error);
    }
  };


  return (
    <>
    { !user ?
      <Typography variant='overline' textAlign='center' color='#004aad'>Log in to join the event!
      </Typography> :
      <ButtonGroup>
        {!eventInfo.usersJoin.includes(user._id) ?
        <IconButton onClick={() => handleUpdateEvent(eventInfo._id, user._id)} title='Join the event!'> 
          <FaRegCalendarPlus /> 
        </IconButton>:
        <IconButton disabled> <TiTick /> </IconButton>                        
        }
        <IconButton onClick={() => handleUpdateFavEvent(eventInfo._id)}>
          {user.favEvents ?
            user.favEvents.includes(eventInfo._id) ?
            <FaHeart color='#C41E3D'
                      title='Remove from favourites'/> :
            <FaRegHeart title='Add to favourites'/>:
            <FaRegHeart title='Add to favourites'/>

          }
        </IconButton>
        <Link to={`/event/${eventData._id}`}>
          <IconButton> <FaInfo color="#004aad" title='More info'/> </IconButton>
        </Link></ButtonGroup> 
     }
    </>
  )
}
// 
export default EventActions