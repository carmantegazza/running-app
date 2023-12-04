import axios from "axios";

export const getEventsFromOneRoute = async (routeId) => {
   try {
     const request = await fetch(`http://localhost:4000/api/eventforroute/${routeId}`);
     const data = await request.json();
     return data.events;
   } catch (error) {
     return [];
   }
 };


 export const getEvent = async (eventId) => {
  try {
    const request =  await fetch(`http://localhost:4000/api/event/${eventId}`)
    const data = await request.json()
    return data.event
  } catch (error) {
       return []
  }
}

export const getEvents = async () => {
  try {
    const request =  await fetch('http://localhost:4000/api/events')
   const data = await request.json()
   return data.events
 } catch (error) {
      return []
 }
}

export const updateEvent = async (eventId, userId, user) => {
  try {
    const res = await axios.put(`http://localhost:4000/api/event/${eventId}`, { userId });
    return res.data; 
  } catch (error) {
    console.error('Error en la solicitud PUT:', error);
    console.log(userId)
    return []; 
  }
};


 