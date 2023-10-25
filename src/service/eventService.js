 export const getEventsFromOneRoute = async (eventsrouteId) => {
   try {
     const request = await fetch(`http://localhost:4000/api/eventforroute/${eventsrouteId}`);
     const data = await request.json();
     return data.events;
   } catch (error) {
     return [];
   }
 };
 