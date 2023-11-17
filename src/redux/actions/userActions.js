import axios from 'axios';
import { urlBackend } from '../../App';

const userActions = {
    signUpUser: (user) => {
        const userData = {
            fullName: user.firstName + " " + user.lastName,
            email: user.email,
            password: user.password,
            from: user.from,
            aplication: "training-app"
        }
        return async (dispatch, getState) => {
            const res = await axios.post(`${urlBackend}/api/users/auth/signup`, { userData })

            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            });
        }
    },

    preSignIn:(params)=>{
        return async(dispatch,getState) => {
            try{
                const user = await axios.get(`${urlBackend}/api/users/auth/presignin`, { params })
               if (!user.data.success){
                   dispatch({
                        type: 'message',
                        payload: {
                            view: true,
                            message: 'Your email has not been registered yet. Please, sign up before logging in',
                            success: user.data.success
                        }
                    });
                    return false
                }else{
                    return true
                }
                
            }catch{

            }
            
      
        }
    },

    signInUser: (userData) => {
        
        return async (dispatch, getState) => {

            const user = await axios.post(`${urlBackend}/api/users/auth/signin`, { userData })
            if (user.data.success) {
                localStorage.setItem('token', user.data.response.token);
                dispatch({ type: 'user', payload: user.data.response.dataUser });
                dispatch({ type: 'userChange', payload: true });
            }
            
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,
                    success: user.data.success
                }
            });
        }
    },
    
     SignOutUser: (closeuser) => {
        localStorage.removeItem('token')
        return async (dispatch, getState) => {
            dispatch({ type: 'user', payload: null });
            dispatch({ type: 'userChange', payload: false});
        }
    },
    VerificarToken: (token) => {
        return async (dispatch, getState) => {
            await axios.get(`${urlBackend}/api/users/auth/signInToken`, {
                headers: { 'Authorization': 'Bearer ' +token }
            })
                .then(user => {
                    console.log(user)
                    if (user.data.success) {
                        dispatch({ type: "user", payload: user.data.response })
                        dispatch({
                            type: "message",
                            payload:
                            {
                                view: true,
                                message: user.data.message,
                                success: user.data.success
                            }
                        })
                    }else {
                        console.log(user)
                        localStorage.removeItem('token')}
                }).catch(error =>{
                    console.log(error)
                    if(error.response.status === 401){
                        dispatch({
                            type: "message",
                            payload:
                            {
                                view: true,
                                message: "Please Sign In again",
                                success: false
                            }
                        })
                        localStorage.removeItem('token')
                    }
                })
        }
    }
}
export default userActions;