import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Modal, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, DialogSlide } from "@mui/material"
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import userActions from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [actualData, setActualData] = useState({})

    const hovers = {

        handleMouseEnter: () => {
            setIsHovered(true);
        },

        handleMouseLeave: () => {
            setIsHovered(false);
        }

    }

    const dialogActions = {

        open: () => {
            setOpenDialog(true)
        },

        close: () => {
            setOpenDialog(false)
        },
        onResendEmail: async () => {
            await dispatch(userActions.onVerifyFail.SendEmail(actualData))
            .then(res=>{
                console.log('this is response in onResendEmail' , res)
                navigate('/login')
            })
        },
        
        onChangeEmail: async () => {
             setOpenDialog(false)
            await dispatch(userActions.deleteDocument(actualData,'changeEmailOnSignup'))
            .then(res=>{
                console.log('this is response in onResendEmail' , res)
            })
            
            // await dispatch(userActions.onVerifyFail.changeUserMail(actualData))
            // .then(res=>{
            //     console.log('this is response in onChangeEmail', res)
            // })
        },
        continueWithoutVerify:()=>{
            navigate('/login')
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            from: "signUp-form"
        };
        ;
        await dispatch(userActions.signUpUser(userData))
            .then(res => {
                if (!res.success) {
                    setActualData(userData)
                    setOpenDialog(true)
                }
                else {
                    navigate('/login')
                }
            })
    };


    const googleSubmit = async (event) => {

        const token = event.credential;
        const decoded = await jwtDecode(token);
        console.log(decoded)
        const userData = {
            email: decoded.email,
            password: decoded.family_name + "AMD23google",
            firstName: decoded.given_name,
            lastName: decoded.family_name,
            from: "google"
        };

        dispatch(userActions.signUpUser(userData))
        navigate('/signin')
    };


    return (
        <>
            {/* {!openDialog? */}
            <div className='form_container'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70vh'
                }}>
                <div className='complement_container' >
                    <div className='letter_container'>

                    </div>
                    <div className='image_container'></div>
                </div>
                <Container component="main" maxWidth="xs" style={{
                    display: "flex",
                    backgroundColor: "transparent",
                    width: "450px",
                    height: "auto",
                    justifySelf: "center",
                    marginTop: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid",
                    borderRadius: "20px"
                }}>
                    <CssBaseline />
                    <Box
                        sx={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingY: 3
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

                            </div>
                            <button
                                style={{
                                    marginLeft: '25%',
                                    width: '50%',
                                    height: '50px',
                                    cursor: 'pointer',
                                    borderRadius: '20px',
                                    backgroundColor: isHovered ? 'rgb(87, 141, 255,0.7)' : 'rgb(87, 141, 255,0.5)',
                                }}
                                onMouseEnter={hovers.handleMouseEnter}
                                onMouseLeave={hovers.handleMouseLeave}
                                type="submit"
                                className="custom-btn btn-7 form_submit_button">
                                <span>
                                    SIGN UP
                                </span>
                            </button>

                            {/* <Grid container style={{display:'flex', width:'100%',justifyContent:'space-between', alignItems:'center', marginTop:'10px'}}>
                            <GoogleLogin
                            onSuccess={googleSubmit}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        /> */}
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <LinkRouter to='/login' className="liks_router links_forms"> Sign In </LinkRouter>
                            </div>

                        </Box>
                    </Box>

                </Container>
            </div>
            {/* : */}
            {openDialog && (
                <Dialog
                    open={openDialog}
                    onClose={dialogActions.close}
                //  action={
                //  <IconButton
                //      aria-label="close"
                //      color="inherit"
                //      size="small"
                //      onClick={() => {
                //          handleClose(true);
                //      }}>
                //          <CloseIcon fontSize="inherit" />
                //  </IconButton>}
                >
                    <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
                        {"Select an option to continue"}
                    </DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText id="alert-dialog-description">
                            It seems to be an errror while sending the validation email, please select an option to continue
                        </DialogContentText> */}
                    </DialogContent>
                    <DialogActions>
                        <Button color="inherit" size="small" onClick={dialogActions.onResendEmail}>
                            Resend email
                        </Button>
                        <Button color="inherit" size="small" onClick={dialogActions.onChangeEmail}>
                            Change email
                        </Button>
                        <Button color="inherit" size="small" onClick={dialogActions.continueWithoutVerify}>
                            Continue without verifying
                        </Button>
                    </DialogActions>
                    {/* {(typeof showSnackbar.message) === "string" ?
                                    (<>{showSnackbar.message}</>) :
                                    <ul>
                                        {showSnackbar.message.map(message =>
                                            <li>{message.message}</li>
                                        )}
                                    </ul>
                                }
                                <Button color="inherit" size="small" onClick={userEmailActions.onResendEmail}>
                                    {showSnackbar.interactionOptions.option1}
                                </Button>
                                <Button color="inherit" size="small" onClick={userEmailActions.onChangeEmail}>
                                    {showSnackbar.interactionOptions.option2}
                                </Button> */}

                </Dialog>
            )}
            {/* } */}
        </>
    );
}


export default SignUp