import React, { useState, useEffect } from 'react';
import { Avatar, Typography, Paper, Button, TextField, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateUser, getUser, updateFavEvent } from '../../service/userService';
import { getEvents, unsuscribeFromEvent } from '../../service/eventService';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart.esm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const Profile = () => {
    const [isEditing, setEditing] = useState(false);
    const user = useSelector((store) => store.userReducer.user);

    const [userData, setUserData] = useState();
    const [reloadComponent, setReloadComponent] = useState(false);

    const dispatch = useDispatch();

    const [allEvents, setAllEvents] = useState([]);
    const [subEvents, setSubEvents] = useState([]);
    const [favEvents, setFavEvents] = useState([]);

    const [tempFullName, setTempFullName] = useState('');
    const [tempEmail, setTempEmail] = useState('');

    // Variables globales para almacenar eventos a eliminar temporalmente
    const [favEventsToDelete, setFavEventsToDelete] = useState([]);
    const [subEventsToDelete, setSubEventsToDelete] = useState([]);

    useEffect(() => {
        if (user) {
            getUser(user.id).then((res) => {
                setUserData(res);

                setTempFullName(res?.fullName || '');
                setTempEmail(res?.email || '');
            });
        }
    }, [user, reloadComponent]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const events = await getEvents();
                setAllEvents(events);
            } catch (error) {
                console.error('Error al obtener eventos:', error);
            }
        };

        fetchData();
    }, [reloadComponent]);

    useEffect(() => {
        if (userData && allEvents.length > 0) {
            const userSubEvents = allEvents.filter((event) => event.usersJoin.includes(userData._id));
            setSubEvents(userSubEvents);

            const userFavEvents = allEvents.filter((event) => userData.favEvents.find((favEventId) => event._id === favEventId))
            setFavEvents(userFavEvents);
        }

    }, [allEvents, userData]);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = async () => {

        try {
            setEditing(false);

            console.log("informacoin de subEvents" + subEvents)

            userData.fullName = tempFullName;
            userData.email = tempEmail;

            console.log(userData)

            await updateUser(userData._id, userData.fullName, userData.email)

            for (const eventId of subEventsToDelete) {
                await unsuscribeFromEvent(eventId, userData._id);
            }

            for (const eventId of favEventsToDelete) {
                await updateFavEvent(eventId, userData._id);
            }

            setReloadComponent(prevState => !prevState);
            
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleCancelClick = () => {
        setEditing(false);

        setTempFullName(userData.fullName);
        setTempEmail(userData.email);

        setSubEventsToDelete([]);
        setFavEventsToDelete([]);
    };

    // const handleUpdateFavEvent = async (eventId) => {
    //     try {
    //         await updateFavEvent(eventId, userData._id);

    //         const updatedUser = await getUser(userData._id);

    //         setUserData(userData => ({ ...userData, ...updatedUser }));
    //         dispatch({ type: 'UPDATE_USER', payload: updatedUser }); // Ajusta según tu lógica de acción

    //     } catch (error) {
    //         console.error('Error updating fav event:', error);
    //     }
    // };


    // const handleUpdateSubEvent = async (eventId) => {
    //     try {
    //         await unsuscribeFromEvent(eventId, userData._id);

    //         const updatedUser = await getUser(userData._id);

    //         setUserData(userData => ({ ...userData, ...updatedUser }));
    //         dispatch({ type: 'UPDATE_USER', payload: updatedUser }); // Ajusta según tu lógica de acción

    //     } catch (error) {
    //         console.error('Error updating fav event:', error);
    //     }
    // };

    const saveEachSubEventToDelete = (eventId) => {

        setSubEventsToDelete((prev) => [...prev, eventId]);

        console.log("evento a eliminar de subevents" + subEventsToDelete)
    };

    const saveEachFavEventToDelete = (eventId) => {
        setFavEventsToDelete((prev) => [...prev, eventId]);
    };

    const CircularAvatar = styled(Avatar)({
        width: 100,
        height: 100,
        margin: 'auto',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });

    const CameraButton = styled(Button)({
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)', // Centra el botón dentro del avatar
    });

    return (
        <Grid sx={{backgroundColor: 'rgba(63, 101, 154)',     
        boxShadow: '0px 80px 55px 45px rgba(63, 101, 154)',
        marginTop: '12vh',
        paddingY: '5vh',
        width: '100vw',}}>
            {userData && (
                <Paper elevation={3} style={{ padding: '30px', maxWidth: '400px', margin: 'auto' }}>
                    {/* <CircularAvatar alt="User Avatar" src={user.avatarUrl} onClick={handleAvatarClick}>
                        <CameraButton onClick={handleAvatarClick}>
                            <PhotoCameraIcon />
                        </CameraButton>
                    </CircularAvatar> */}
                    <Typography variant="h5" align="center" padding={"20px"} gutterBottom>
                        {isEditing ? (
                            <TextField
                                value={tempFullName}
                                onChange={(e) => setTempFullName(e.target.value)}
                                fullWidth
                                autoFocus
                                variant="standard"
                                align="center"
                            />
                        ) : (
                            userData.fullName
                        )}
                    </Typography>
                    <Typography variant="body2" align="center" color="textSecondary" style={{ textAlign: 'left', fontSize: '1rem', paddingBottom: '10px' }}>
                        {isEditing ? (
                            <TextField
                                value={tempEmail}
                                onChange={(e) => setTempEmail(e.target.value)}
                                fullWidth
                                variant="standard"
                            />
                        ) : (
                            `Email: ${userData.email}`
                        )}
                    </Typography>

                    <Box
                        bgcolor="rgba(63, 101, 154)"
                        color="white"
                        p={1}
                        textAlign="center"
                        fontFamily="Helvetica"
                        borderRadius={10}
                        marginBottom={1}
                    >
                        <Typography variant="h7" component="div">
                            EVENT SUBSCRIPTION
                        </Typography>
                    </Box>

                    {subEvents.length > 0 ? (
                        subEvents.map((event) => (

                            // <Typography key={event._id} component="div" style={{ padding: '5px', textAlign: 'left', color: '#004aad', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            //     {event.name}
                            //     {isEditing && (
                            //         <IconButton color="gray" onClick={() => handleUpdateSubEvent(event._id)}>
                            //             <DeleteIcon />
                            //         </IconButton>
                            //     )}
                            // </Typography>


                            !subEventsToDelete.includes(event._id) && (
                                <Typography key={event._id} component="div" style={{ padding: '5px', textAlign: 'left', color: '#004aad', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    {event.name}
                                    {isEditing && (
                                        <IconButton color="gray" onClick={() => saveEachSubEventToDelete(event._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    )}
                                </Typography>
                            )
                        ))
                    ) : (
                        <Typography component="div" style={{ textAlign: 'left', color: '#004aad' }}>No events subscribed</Typography>
                    )}
                    <Box
                        bgcolor="rgba(63, 101, 154)"
                        color="white"
                        p={1}
                        textAlign="center"
                        fontFamily="Helvetica"
                        borderRadius={10}
                        marginBottom={1}
                    >
                        <Typography variant="h7" component="div">
                            EVENT FAVORITES
                        </Typography>
                    </Box>

                    {favEvents.length > 0 ? (
                        favEvents.map((event) => (

                            // <Typography key={event._id} component="div" style={{ padding: '5px', textAlign: 'left', color: '#004aad', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            //     {event.name}
                            //     {isEditing && (
                            //         <IconButton color="gray" onClick={() => handleUpdateFavEvent(event._id)}>
                            //             <FaHeart color='#C41E3D' />
                            //         </IconButton>
                            //     )}
                            // </Typography>

                            !favEventsToDelete.includes(event._id) && (
                                <Typography key={event._id} component="div" style={{ padding: '5px', textAlign: 'left', color: '#004aad', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    {event.name}
                                    {isEditing && (
                                        <IconButton color="gray" onClick={() => saveEachFavEventToDelete(event._id)}>
                                            <FaHeart color='#C41E3D' />
                                        </IconButton>
                                    )}
                                </Typography>
                            )


                        ))
                    ) : (
                        <Typography component="div" style={{ textAlign: 'left', color: '#004aad' }}>No events favorites</Typography>
                    )}

                    {isEditing ? (
                        <>
                            <Button variant="contained" color="primary" onClick={handleSaveClick} fullWidth style={{ marginTop: '10px' }}>
                                Save
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleCancelClick} fullWidth style={{ marginTop: '10px' }}>
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <Button variant="outlined" color="primary" onClick={handleEditClick} fullWidth style={{ marginTop: '10px' }}>
                            Edit
                        </Button>
                    )}
                </Paper>
            )
            }

        </Grid >
    );
};




export default Profile;


