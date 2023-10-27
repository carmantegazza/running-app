import axios from 'axios';
import { urlBackend } from '../../App';

const userActions = {

    signUpUser: (user) => {

        const userData = {
            fullName: user.firstName + " " + user.lastName,
            email: user.email,
            password: user.password,
            from: user.from,
            aplication: "heroes"
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
    signInUser: (userData) => {

        return async (dispatch, getState) => {

            const user = await axios.post(`${urlBackend}/api/users/auth/signin`, { userData })
            console.log(user)
            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response.userData });
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
        return async (dispatch, getState) => {
            const user = await axios.post(`${urlBackend}/api/auth/signout`, { closeuser })
            localStorage.removeItem('token')
            dispatch({ type: 'user', payload: null });
            return user
        }

    },

}
export default userActions;