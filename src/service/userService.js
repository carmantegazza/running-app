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

  export const updateUser = async (userId, user) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/users/${userId}`, { user });
      return res.data; 
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
      return []; 
    }
  };

