export const  getEventsFromOneRoute = async () => {
    try {
      const request =  await fetch('http://localhost:4000/api/eventforroute/6522fc826fa32f1d5ab7da34')
      const data = await request.json()
      return data.events
      } catch (error) {
         return []
    }
 }