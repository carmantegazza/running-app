export const getRoutes = async () => {
   try {
      const request =  await fetch('http://localhost:4000/api/routes')
     const data = await request.json()
     return data.routes
   } catch (error) {
        return []
   }
}

export const getRoute = async (routeId) => {
   try {
      const request =  await fetch(`http://localhost:4000/api/route/${routeId}`)
     const data = await request.json()
     return data.route
   } catch (error) {
        return []
   }
 }