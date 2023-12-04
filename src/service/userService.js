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

<<<<<<< HEAD
  export const updateUser = async (userId, user) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/users/${userId}`, { user });
      return res.data; 
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
      return []; 
    }
  };

=======
  export const getUser = async ( userId ) => {
    try {
       const res = await axios.get(`http://localhost:4000/api/user/${userId}`)
      return res.data.route
    } catch (error) {
         return []
    }
  }
>>>>>>> 8d6d3d4090cf88087e7d9dd348f58c23778ffef6
