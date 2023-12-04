import axios from "axios";

export const updateFavEvent = async ( eventId, userId, eventData ) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/users/${userId}`, { eventId });
      console.log(res.data);
      return res.data; 
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
      return []; 
    }
  };

  export const getUser = async ( userId ) => {
    try {
       const res = await axios.get(`http://localhost:4000/api/user/${userId}`)
      return res.data.route
    } catch (error) {
         return []
    }
  }