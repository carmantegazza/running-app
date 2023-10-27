import * as React from 'react';
// import '../styles/AppBarMUI.css'
// import '../styles/Forms.css'
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

export default function SignIn() {
    const dispatch = useDispatch()
    
        const handleSubmit = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const userData = {
                email: data.get('email'),
                password: data.get('password'),
                from:"signUp-form"
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
                from: "google"
            };
           
                dispatch(userActions.signInUser(userData))
        };
    
        return (
            <div className='form_container'>
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
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    color='secondary'
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="secondary" />}
                                    label="Remember me"
                                />
                            </div>
    
                            <button
                                type="submit"
                                className="custom-btn btn-7 form_submit_button">
                                <span>
                                    SIGN IN
                                </span>
                            </button>
                            <GoogleLogin
                                onSuccess={googleSubmit}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />;
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <LinkRouter to='/signup' className="liks_router links_forms"> Don't have an account? Sign Up </LinkRouter>
    
                                </Grid>
                            </Grid>
    
                        </Box>
                    </Box>
    
                </Container>
            </div>
        );
    }