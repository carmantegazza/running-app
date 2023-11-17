import React, {useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import userActions from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);
    // const [showPassword,setShowPassword] = useState(false);

    // const handleShowPassword = () => {
    //     setShowPassword(true)
    //     showPassword ?  

    // }

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            from: "signUp-form"
        };
        dispatch(userActions.signUpUser(userData))
        navigate('/signin')
    };

    const googleSubmit = async (event) => {

        const token = event.credential;
        const decoded = await jwtDecode(token);
        console.log(decoded)
        const userData = {
            email: decoded.email,
            password: decoded.family_name+"AMD23google",
            firstName: decoded.given_name,
            lastName: decoded.family_name,
            from: "google"
        };
       
            dispatch(userActions.signUpUser(userData))
           navigate('/signin')
    };


    return (
        <div className='form_container'
             style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'70vh'
        }}>
            <div className='complement_container' >
                <div className='letter_container'>
                    <p>
                        
                    </p>
                </div>
                <div className='image_container'></div>
            </div>
            <Container component="main" maxWidth="xs" style={{display:"flex",
                    backgroundColor:"transparent",
                    width:"450px", 
                    height:"auto", 
                    justifySelf:"center",
                    marginTop:10,
                    justifyContent:"center", 
                    alignItems:"center",
                    border:"2px solid",
                    borderRadius:"20px"}}>
                <CssBaseline />
                <Box
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingY:3
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
                            <div style={{
                                    display:"flex",
                                    justifyContent:"space-between",
                                    alignItems:"center",
                                }}>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="secondary" />}
                                        label="Remember me"
                                    />
                                    {/* <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link> */}
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
                                SIGN UP
                            </span>
                        </button>
                        
                        <Grid container style={{display:'flex', width:'100%',justifyContent:'space-between', alignItems:'center', marginTop:'10px'}}>
                            {/* <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid> */}
                            <GoogleLogin
                            onSuccess={googleSubmit}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                            <Grid item>
                                <LinkRouter to='/login' className="liks_router links_forms"> Sign In </LinkRouter>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </div>
    );
}