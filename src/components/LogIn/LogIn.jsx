import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import userActions from '../../redux/actions/userActions';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Visibility from '@mui/icons-material/Visibility';
import {VisibilityOff} from '@mui/icons-material';
import {IconButton, OutlinedInput,InputLabel,InputAdornment,Link,FormControl,Box,Container,Grid,Checkbox,FormControlLabel,TextField,CssBaseline,Button} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function LogIn() {
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [hasAccount,setHasAccount]= useState(false);
    const [open, setOpen] = useState(true)
    const user = useSelector((store) => store.userReducer.user);
    const navigate = useNavigate();
    const handleMouseDownPassword = () => {
        
        setShowPassword(true)

    }
    const handleMouseUpPassword = () => {
        setShowPassword(false)
    }
     const handlePreLogin = async (event) => {
        event.preventDefault()

        !hasAccount ? checkAcc(event) : handleSubmit(event)

     }
    const checkAcc = async (event) =>{

        const data = new FormData(event.currentTarget);
        const userData ={
            email:data.get('email'),
            from:'signUp-form',
            aplication:'training-app'
        }
        try{
            const params = {
                email:userData.email, 
                from: userData.from,
                aplication:userData.aplication
            }
            const hasAcc = await dispatch(userActions.preSignIn(params))
            
            setHasAccount(hasAcc)
             
            if(!hasAcc){
                navigate('/signup')
            }
            
        }catch(err){
            console.error('Error during login processs',err)
        }
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let userInput = document.getElementById('email');
        userInput.disabled=false
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
            from:"signUp-form",
            aplication: "training-app"
        };


        dispatch(userActions.signInUser(userData))
        
        
    };
    const googleSubmit = async (event) => {

        const token = event.credential;
        const decoded = await jwtDecode(token);
        console.log(decoded)
        const userData = {
            email: decoded.email,
            password: decoded.family_name+"AMD23google",
            from: "google",
            aplication: "training-app"
        };
            dispatch(userActions.signInUser(userData))
    
        };
    
        const handleMouseEnter = () => {
            setIsHovered(true);
          };
        
          const handleMouseLeave = () => {
            setIsHovered(false);
          };


        return (
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'70vh'
            }}>
                <div className='form_container'
                style={{display:"flex",
                    backgroundColor:"transparent",
                    width:"450px", 
                    height:"350px", 
                    justifySelf:"center",
                    marginTop:10,
                    justifyContent:"center", 
                    alignItems:"center",
                    border:"2px solid",
                    borderRadius:"20px"}}>
                <div className='complement_container'>
                    <div className='letter_container'>
                        <p>
                        </p>
                    </div>
                    <div className='image_container'></div>
                </div>
                {/* {...user ? disabled} */}
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box
                        sx={{
    
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
    
                        <Box component="form" onSubmit={handlePreLogin} noValidate sx={{ mt: 1 }}>
                            <div className='form_main_container'>
                                {/* <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    variant='outlined'
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    disabled={hasAccount}
                                > 
                                </TextField> */}
                                <FormControl sx={{
                                    width:'100%',
                                    // visibility: hasAccount ? 'visible' : 'hidden'
                                    }} 
                                    variant="outlined" 
                                    disabled={hasAccount}>
                                    <InputLabel htmlFor="dynamic-password-TextField">Email adress</InputLabel>
                                    <OutlinedInput
                                        id="email"
                                        name='email'
                                        endAdornment={
                                            <CheckCircleOutlineIcon position="end" style={{visibility: hasAccount ? 'visible' : 'hidden', backgroundColor:'transparent'}}>

                                            </CheckCircleOutlineIcon>
                                        }
                                        label="password">
                                    </OutlinedInput>
                                </FormControl> 
                                <FormControl sx={{
                                    width:'100%',
                                    visibility: hasAccount ? 'visible' : 'hidden'
                                    }} 
                                    variant="outlined" 
                                    disabled={!hasAccount}>
                                    <InputLabel htmlFor="dynamic-password-TextField">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        name='password'
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton 
                                                    aria-label="toggle password visibility"
                                                    onMouseDown={handleMouseDownPassword}
                                                    onMouseUp={handleMouseUpPassword}
                                                    edge="end">
                                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="password">
                                    </OutlinedInput>
                                </FormControl>               
                                

                                <div style={{
                                    display:"flex",
                                    justifyContent:"space-between",
                                    alignItems:"center",
                                }}>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="secondary" />}
                                        label="Remember me"
                                    />
                                    <Link href="#" variant="body2" 
                                            style={{visibility: hasAccount ? 'visible' : 'hidden'}}>
                                        Forgot password?
                                    </Link>
                                </div>
                                
                            </div>
                            
                            <Button    
                                variant='outlined' 
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                type="submit"
                                className="custom-btn btn-7 form_submit_button"
                                style={{
                                    marginLeft:'25%',
                                    width:'50%',
                                    height:'50px',
                                    cursor:'pointer',
                                    borderRadius:'20px',
                                    backgroundColor: isHovered ? 'rgb(87, 141, 255,0.7)' : 'rgb(87, 141, 255,0.5)',
                                }}>
                                Send
                            </Button>
                            {/* <button
                                style={{
                                    marginLeft:'25%',
                                    width:'50%',
                                    height:'50px',
                                    cursor:'pointer',
                                    borderRadius:'20px',
                                    backgroundColor: isHovered ? 'rgb(87, 141, 255,0.7)' : 'rgb(87, 141, 255,0.5)',
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                    type="submit"
                                className="custom-btn btn-7 form_submit_button">
                                <span>
                                    SIGN IN
                                </span>
                            </button> */}
                            
                            
                            <Grid container style={{display:'flex', width:'100%',justifyContent:'space-between', alignItems:'center', marginTop:'10px'}}>
                                {/* <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid> */}
                                <GoogleLogin
                                style={{width:'20%'}}
                                onSuccess={googleSubmit}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                                />
                            </Grid>
                            
                        </Box>
                    </Box>
    
                </Container>
            </div>
            </Box>
            
        );
    }