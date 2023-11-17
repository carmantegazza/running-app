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
     console.log(request)
    const data = await request.json()
    console.log(data)
    return data.event
  } catch (error) {
       return []
  }
}
 