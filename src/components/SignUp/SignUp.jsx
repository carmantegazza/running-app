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

export default function SignUp() {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            from:"signUp-form"
        };
        dispatch(userActions.signUpUser(userData))

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
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        color='secondary'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        color='secondary'
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus
                                color='secondary'
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        color='secondary'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="confirm-password"
                                        label="Confirm Password"
                                        type="password"
                                        id="confirm-password"
                                        color='secondary'
                                    />
                                </Grid>
                            </Grid>
                            <FormControlLabel
                                control={<Checkbox value="remember" color='secondary' />}
                                label="Remember me"
                            />
                        </div>
                        <button
                            type="submit"
                            className="custom-btn btn-7 form_submit_button">
                            <span>
                                SIGN UP
                            </span>
                        </button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <LinkRouter to='/signin' className="liks_router links_forms"> Already have an account? Sign In </LinkRouter>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </div>
    );
}