import React from 'react'
import { updateFavEvent, getUser } from '../../service/userService'
import { getEvent, updateEvent } from '../../service/eventService';
import { useState } from 'react';
import { ButtonGroup, Typography, IconButton} from '@mui/material';
import { FaRegCalendarPlus } from '@react-icons/all-files/fa/FaRegCalendarPlus.esm'
import { TiTick } from '@react-icons/all-files/ti/TiTick.esm'
import { FaRegHeart } from '@react-icons/all-files/fa/FaRegHeart.esm'
import { FaHeart } from '@react-icons/all-files/fa/FaHeart.esm'
import { FaInfo } from '@react-icons/all-files/fa/FaInfo.esm';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";


const EventActions = ({eventData, userData}) => {

  const [user, setUser] = useState(userData)
  const [eventInfo, setEventInfo] = useState(eventData)
  console.log(user)

  const dispatch = useDispatch()

  const handleUpdateEvent = async (eventId, userId) => {
    try {
      await updateEvent(eventId, userId, user);
      const updatedEvent = await getEvent(eventId)
      setEventInfo(eventInfo => ({...eventInfo, ...updatedEvent}));
      dispatch({
        type: "message",
        payload:
        {
            view: true,
            message: "You suscribed to this event: " + eventData.name ,
            success: true
        }
      }) 
    } catch (error) {
      console.error('Error updating event:', error);

    }
  };

  const dispatchFavAlert = (user, eventId) => {
    if (!user.favEvents.includes(eventId)) {
      dispatch({
        type: "message",
        payload:
        {
            view: true,
            message: "You added " + eventData.name + " to your favourites" ,
            success: true
        }
      }) 
    } else {
      dispatch({
        type: "message",
        payload:
        {
          view: true,
          message: "You removed " + eventData.name + " from your favourites" ,
          success: false
        }
        })
    }       
  }

  const handleUpdateFavEvent = async (eventId) => {
    try {
      await updateFavEvent(eventId, user._id , eventInfo);  
      const updateduser = await getUser(user._id);
      setUser(user => ({ ...user, ...updateduser }));
      dispatchFavAlert(user, eventId)
          
    } catch (error) {
      console.error('Error updating fav event:', error);
    }
  };

  return (
    <>
    { !userData ?
      <Link to={`/signin`}  style={{textDecoration: 'none'}}>
        <Typography variant='overline' textAlign='center' color='#004aad' >      
          Log in to join the event!
      </Typography>
      </Link>
       :
      <ButtonGroup>
        {!eventInfo.usersJoin.includes(user._id) ?
        <IconButton onClick={() => handleUpdateEvent(eventInfo._id, user._id)} title='Join the event!'> 
          <FaRegCalendarPlus /> 
        </IconButton>:
        <IconButton size='medium' disabled> <TiTick /> </IconButton>                        
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