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
            
            if (res.data.success) {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                });
                return true
            } else {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return false
                //  return {
                //     message: res.data.message,
                //      success: res.data.success,
                //      allowsInteraction:true,
                //      interactionOptions:{
                //      option1:'Resend email',
                //     option2:'Change my email'
                //      }
                //  }
            }

        }
    },

    preSignIn: (params) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.get(`${urlBackend}/api/users/auth/presignin`, { params })
                if (!user.data.success) {
                    dispatch({
                        type: 'message',
                        payload: {
                            view: true,
                            message: 'Email not registered yet. Please, sign up before logging in',
                            success: user.data.success
                        }
                    });
                    return false
                } else {
                    return true
                }

            } catch (e) {
                console.log(e)
            }
        }
    },
    onVerifyFail: {
        SendEmail: (userData) => {
            return async (dispatch, getState) => {
                console.log('entering SendEmail')
                try {
                    console.log('entering SendEmail try logic')
                    const serverRes = await axios.post(`${urlBackend}/api/users/auth/sendemail`, { userData })
                    console.log(serverRes.data.success)
                    if (serverRes.data.success) {
                        console.log('Email sent')
                        dispatch({
                            type: 'message',
                            payload: {
                                view: true,
                                message: 'Email successfully sent. Check your inbox for verifying your account',
                                success: true
                            }
                        });
                        return true
                    } else {
                        dispatch({
                            type: 'message',
                            payload: {
                                view: true,
                                message: 'Oops something went wrong. You have access to your account, but you will not be able to use the hole functionalities until you verify your email.',
                                success: false
                            }
                        })
                        return false
                    }

                } catch (err) {
                    console.log('Error sending email', err.message)
                    dispatch({
                        type: 'message',
                        payload: {
                            view: true,
                            message: 'Oops something went wrong. You have access to your account, but you will not be able to use the hole functionalities until you verify your email.',
                            success: false
                        }
                    })
                    return false
                }


            }
        },
    //     changeUserMail: (userData) => {
    //         return async (dispatch, getState) => {
    //             try {
    //                 console.log('entering changeUserMail')

    //                 return true

    //             } catch (err) {
    //                 console.log('Error changing email', err.message)
    //                 dispatch({
    //                     type: 'message',
    //                     payload: {
    //                         view: true,
    //                         message: 'Oops something went wrong. We werent able to modify your email, please try again later',
    //                         success: false
    //                     }
    //                 })
    //                 return true
    //             }
    //         }
    //     }
    },
    deleteDocument:(userData,typeOfDelete)=>{
        return async (dispatch,getState)=>{
            try{
                const res = await axios.delete(`${urlBackend}/api/users/auth/deletedocument`, { data: userData })
                switch(typeOfDelete){
                    case 'changeEmailOnSignup':
                        dispatch({
                            type:'message',
                            payload:{
                                view:true,
                                message:'Now you can change your email and send the form again',
                                success:res.data.success
                            }
                        })
                        return true
                    case 'deleteUser':
                        return true
                }
                
                return true
            }catch(err){
                console.log(err.message)
            }
        }
    },
    signInUser: (userData) => {

        return async (dispatch, getState) => {

            const user = await axios.post(`${urlBackend}/api/users/auth/signin`, { userData })
            if (user.data.success) {
                if (userData.remember) {
                    localStorage.setItem('token', user.data.response.token);
                    dispatch({ type: 'user', payload: user.data.response.dataUser });
                    dispatch({ type: 'userChange', payload: true });
                } else {
                    sessionStorage.setItem('token', user.data.response.token);
                    dispatch({ type: 'user', payload: user.data.response.dataUser });
                    dispatch({ type: 'userChange', payload: true });
                }

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
            dispatch({ type: 'userChange', payload: false });
        }
    },
    VerificarToken: (token) => {
        return async (dispatch, getState) => {
            await axios.get(`${urlBackend}/api/users/auth/signInToken`, {
                headers: { 'Authorization': 'Bearer ' + token }
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
                    } else {
                        console.log(user)
                        localStorage.removeItem('token')
                    }
                }).catch(error => {
                    console.log(error)
                    if (error.response.status === 401) {
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
    },
    ForgotPassword: async (email) => {
        const serverResponse = await axios.get(`${urlBackend}/api/users/auth/forgotpassword`, { params: { email } })
        console.log(serverResponse)
    }
}
export default userActions;