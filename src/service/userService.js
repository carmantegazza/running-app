import axios from "axios";

export const addFavEvent = async ( eventId, userId, user ) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/users/${userId}`, { eventId });
      console.log(res.data);
      return res.data; 
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
      return []; 
    }
  };

  export const updateUser = async (userId, fullName, email) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/updateuser/${userId}`, {fullName, email});
      return res.data; 
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
      console.log('Error details:', error.response.data);
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
  };


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





