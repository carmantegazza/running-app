import * as React from 'react';
import { useEffect , useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link as LinkRouter } from 'react-router-dom'
import userActions from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton'


export default function SignIn() {
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false);
    const [showPassword,setShowPassword] = useState(false);

    const handleMouseDownPassword = () => {
        
        setShowPassword(true)
        // showPassword ?  

    }
    const handleMouseUpPassword = () => {
        setShowPassword(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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
                
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box
                        sx={{
    
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
    
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <div className='form_main_container'>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    color='secondary'
                                />
                                <FormControl sx={{width:'100%'}} variant="outlined">
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
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </div>
                                
                            </div>
    
                            <button
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
                            </button>
                            
                            
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
                                <Grid item style={{width:'30%'}}>
                                    <LinkRouter to='/signup' className="liks_router links_forms"> Or Sign Up </LinkRouter>
                                </Grid>
                            </Grid>
                            
                        </Box>
                    </Box>
    
                </Container>
            </div>
            </Box>
            
        );
    }