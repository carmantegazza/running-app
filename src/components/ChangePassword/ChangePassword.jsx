import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import userActions from '../../redux/actions/userActions';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Visibility from '@mui/icons-material/Visibility';
import { VisibilityOff } from '@mui/icons-material';
import { Divider, IconButton, Tooltip,InputAdornment, Link, Box, Container, Checkbox, TextField, CssBaseline, Button } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/system'
import {KeyRound} from 'lucide-react'



const TextFieldTheme = styled(TextField)(({ theme }) => ({

  'input:-internal-autofill-selected': {
    backgroundColor: 'white',
  },
}));

// const thisTheme = createTheme({
//     components: {
//         MuiButtonBase: {
//             defaultProps: {
//                 disableRipple: true,
//             }
//         }
//     }
// })

/* if(userData.password===userData.confirmPassword){
            await dispatch(userActions.signUpUser(userData))
                .then(res => {
                    if (!res) {
                        setActualData(userData)
                        setOpenDialog(true)
                    }else {
                        navigate('/login')
                    }
                })
        }else{
            setPasswordsMatch(false)
                dispatch({
                type:'message',
                payload:{
                    view:true,
                    message:'Passwords must match',
                    success:false
                }
            })
        }         */
export default function LogIn() {
    const dispatch = useDispatch()
    const [sendButtonHovered, setSendButtonHovered] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRemember, setShowRemember] = useState(false)
    const [rememberAccount, setRememberAccount] = useState(true);
    const [forgotPassword,setForgotHover] = useState(false)
    const [hasAccount, setHasAccount] = useState(false);
    const [isFocused,setIsFocused] = useState(false);
    const [passwordsMatch,setPasswordsMatch] = useState(true)

    const navigate = useNavigate();
    

    // const checkAcc = async (event) => {

    //     const data = new FormData(event.currentTarget);
    //     const userData = {
    //         email: data.get('email'),
    //         from: 'signUp-form',
    //         aplication: 'training-app'
    //     }
    //     try {
    //         const params = {
    //             email: userData.email,
    //             from: userData.from,
    //             aplication: userData.aplication
    //         }
    //         const hasAcc = await dispatch(userActions.preSignIn(params))

    //         setHasAccount(hasAcc)

    //         if (!hasAcc) {
    //             navigate('/signup')
    //         }

    //     } catch (err) {
    //         console.error('Error during login processs', err)
    //     }

    // }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const uniqueString = urlParams.get('string')
        const data = new FormData(event.currentTarget);
        const userData = {
            newPassword: data.get('newPassword'),
            repeatPassword: data.get('repeatPassword'),
            uniqueString:uniqueString,

        };
        if(userData.newPassword === userData.repeatPassword){
            await dispatch(userActions.changePassword(userData))
                .then(res => {
                    dispatch({
                        type:'message',
                        payload:{
                            view:true,
                            message:'Your password has been updated',
                            success:true
                        }
                    })
                    navigate('/login')
                })
        }else{
            setPasswordsMatch(false)
                dispatch({
                type:'message',
                payload:{
                    view:true,
                    message:'Passwords must match',
                    success:false
                }
            })
        }
        


    };

    // const handlePreLogin = async (event) => {
    //     event.preventDefault()

    //     !hasAccount ? checkAcc(event) : handleSubmit(event)

    // }
    // const handleLoginVariables = {
    //     rememberCheckbox: ()=>{
    //             setRememberAccount(!rememberAccount)
    //     }
    // }
    
    const handleClicks = {
        showPassword:{
            mouseDown:()=>{
                setShowPassword(true)

            },
            mouseUp: ()=>{
                setShowPassword(false)
            }
        },
        forgot:()=>{
            let user = document.getElementById('email').value;
            userActions.ForgotPassword(user);
        }
    }
    const handleHovers = {
        sendButton: {
            handleMouseEnter: () => {
                setSendButtonHovered(true);
            },
            handleMouseLeave: () => {
                setSendButtonHovered(false);
            }
        },
        remember: {
            handleMouseEnter: () => {
                setShowRemember(true);
            },
            handleMouseLeave: () => {
                setShowRemember(false);
            }
        },
        forgot: {
            handleMouseEnter: () => {
                setForgotHover(true);
            },
            handleMouseLeave: () => {
                setForgotHover(false);
            }
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh',
            border:'2px solid black'
        }}>
            <div className='form_container'
                style={{
                    display: "flex",
                    backgroundColor: "transparent",
                    paddingTop: 10,
                    paddingBottom: 10,
                    width: "auto",
                    height: "auto",
                    justifySelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid",
                    borderRadius: "20px",
                }}>
                <Container component="main" maxWidth="xs" sx={{padding:0}}>
                    <CssBaseline />
                    <Box
                        sx={{
                            width: '300px',
                            height: 'auto',
                            marginY: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <section style={{ width: 'auto', height: 'auto' }}>
                            Change password
                            {/* <GoogleLogin
                                style={{ width: '20%' }}
                                onSuccess={googleSubmit}
                                buttonText="login"
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            /> */}
                        </section>
                        <Divider sx={{ mt: 4, mb:1, width: '100%' }} variant="middle"></Divider>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', gap: 2 }}>
                            <div className='form_main_container'>
                            <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="newPassword"
                                    variant='outlined'
                                    label="New Password"
                                    name="newPassword"
                                    autoComplete="Repeat Password"
                                    style={{ display: 'block'}}
                                    autoFocus
                                    type={showPassword ? 'text' : 'password'}
                                    // InputProps={{
                                    //     endAdornment:
                                    //         <InputAdornment position="end">
                                    //             <IconButton
                                    //                 aria-label="toggle password visibility"
                                    //                 onMouseDown={handleClicks.showPassword.mouseDown}
                                    //                 onMouseUp={handleClicks.showPassword.mouseUp}
                                    //                 edge="end">
                                    //                 {showPassword ? <VisibilityOff /> : <Visibility />}
                                    //             </IconButton>
                                    //         </InputAdornment>
                                    //}}
                                />
                                {/* <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    variant='outlined'
                                    label="New Password"
                                    name="password"
                                    autoComplete="email"
                                    autoFocus
                                    disabled={hasAccount}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position='end' style={{TextFieldTheme}}>
                                                <CheckCircleOutlineIcon edge="end" style={{ color: 'green', visibility: hasAccount ? 'visible' : 'hidden'}}>
                                                </CheckCircleOutlineIcon>
                                            </InputAdornment>
                                    }}
                                /> */}
                                
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="repeatPassword"
                                    variant='outlined'
                                    label="Repeat Password"
                                    name="repeatPassword"
                                    autoComplete="Repeat Password"
                                    style={{ display: 'block' }}
                                    autoFocus
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onMouseDown={(e)=>{
                                                        e.preventDefault();
                                                        handleClicks.showPassword.mouseDown()}}
                                                    onMouseUp={(e)=>{
                                                        e.preventDefault()
                                                        handleClicks.showPassword.mouseUp()
                                                    }}
                                                    edge="end"
                                                    style={{opacity:isFocused?'1':'0'}}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                    }}
                                    onFocus={()=>{setIsFocused(true)}}
                                    onBlur={()=>{setIsFocused(false)}}
                                />
                                
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent:'space-between'
                                }}>
                                    {/* <Tooltip 
                                        title="Stay Connected!" 
                                        arrow >
                                        <Checkbox 
                                            style={{padding:'0'}} 
                                            onClick={handleLoginVariables.rememberCheckbox} 
                                            onMouseEnter={handleHovers.remember.handleMouseEnter} 
                                            onMouseLeave={handleHovers.remember.handleMouseLeave} 
                                            value="remember" 
                                            color="secondary"/>
                                    </Tooltip> */}

                                    <Button
                                        variant='outlined'
                                        onMouseEnter={handleHovers.sendButton.handleMouseEnter}
                                        onMouseLeave={handleHovers.sendButton.handleMouseLeave}
                                        type="submit"
                                        style={{
                                            margin:'auto',
                                            width: '50%',
                                            height: '50px',
                                            cursor: 'pointer',
                                            backgroundColor: sendButtonHovered ? 'rgb(87, 141, 255,0.2)' : 'rgb(255, 255, 255,0.5)',
                                        }}>
                                        Send
                                    </Button>
                                    {/* <Tooltip title="Forgot Password?" arrow>
                                        <Link 
                                            onClick={handleClicks.forgot}
                                            href="#" 
                                            variant="body2"
                                            style={{ visibility: hasAccount ? 'visible' : 'hidden' }}>
                                                <KeyRound color="black" onMouseEnter={handleHovers.forgot.handleMouseEnter} onMouseLeave={handleHovers.forgot.handleMouseLeave}/> 
                                        </Link>
                                    </Tooltip> */}
                                    {/* <FormControlLabel
                                        control={ 
                                            <Link 
                                                href="#" 
                                                variant="body2"
                                                style={{ visibility: hasAccount ? 'visible' : 'hidden' }}>
                                                    <KeyRound color="black" onMouseEnter={handleHovers.forgot.handleMouseEnter} onMouseLeave={handleHovers.forgot.handleMouseLeave}/> 
                                            </Link>
                                        }
                                        style={{width:'20px',margin:'0'}}
                                    /> */}
                                    {/* <Link href="#" variant="body2"
                                        style={{ visibility: hasAccount ? 'visible' : 'hidden' }}>
                                        <KeyRound color="black" onMouseEnter={handleHovers.forgot.handleMouseEnter} onMouseLeave={handleHovers.forgot.handleMouseLeave}/> 
                                    </Link> */}
                                </div>
                            </div>
                            
                        </Box>
                    </Box>
                </Container>
            </div>            
        </Box>
    );
}