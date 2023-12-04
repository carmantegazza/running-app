import React, { useState, useEffect } from 'react';
import { Avatar, Typography, Paper, Button, TextField, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateUser, getUser } from '../../service/userService';
import { getEvents, deleteUserByEvent } from '../../service/eventService';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart.esm';
import { useSelector } from 'react-redux';

const Profile = () => {
    const [isEditing, setEditing] = useState(false);
    const user = useSelector((store) => store.userReducer.user);

    const [userData, setUserData] = useState();

    const [allEvents, setAllEvents] = useState([]);
    const [subEvents, setSubEvents] = useState([]);
    const [favEvents, setFavEvents] = useState([]);

    const [tempFullName, setTempFullName] = useState('');
    const [tempEmail, setTempEmail] = useState('');
    // const [tempDob, setTempDob] = useState('');
    const [disabledEvents, setDisabledEvents] = useState([]);

    // Variables globales para almacenar eventos a eliminar temporalmente
    const [favEventsToDelete, setFavEventsToDelete] = useState([]);
    const [subEventsToDelete, setSubEventsToDelete] = useState([]);

    useEffect(() => {
        user &&
            getUser(user.id).then((res) => {
                setUserData(res);
            });
            

    }, [user, userData])

    console.log(userData);

    useEffect(() => {
        if (user) {
          getUser(user.id).then((res) => {
            setUserData(res);
          });
        }
      }, [user]);

    useEffect(() => {
        if (userData && allEvents.length > 0) {
          const userSubEvents = allEvents.filter((event) => event.usersJoin.includes(userData._id));
          setSubEvents(userSubEvents);
    
          const userFavEvents = userData.favEvents
            ? userData.favEvents.map((favEventId) => allEvents.find((event) => event._id === favEventId))
            : [];
          setFavEvents(userFavEvents);
        }

      }, [userData, allEvents]);

    // useEffect(() => {
    //     setTempFullName(userData.fullName);
    //     setTempEmail(userData.email);
    //     console.log("informacion" + userData)
    // }, []);

    const handleEditClick = () => {
        setEditing(true);
    };

    // const handleSaveClick = async () => {

    //     try {
    //         setEditing(false);

    //         setSubEvents((prev) => prev.filter((event) => !subEventsToDelete.includes(event._id)));
    //         setFavEvents((prev) => prev.filter((event) => !favEventsToDelete.includes(event._id)));

    //         setSubEventsToDelete([]);
    //         setFavEventsToDelete([]);

    //         userData.fullName = tempFullName;
    //         userData.email = tempEmail;
    //         userData.favEvents = favEvents;

    //         await updateUser(userData.id, user);
    //         subEvents.forEach(async (event) => {
    //             await deleteUserByEvent(event.id, userData.id);
    //         });

    //     } catch (error) {
    //         console.error('Error updating user:', error);
    //     }
    // };

    // const handleCancelClick = () => {
    //     setEditing(false);

    //     setTempFullName(userData.fullName);
    //     setTempEmail(userData.email);
    //     // setTempDob(user.dob);

    //     setSubEventsToDelete([]);
    //     setFavEventsToDelete([]);
    // };

    // const handleAvatarClick = () => {
    //     // Aquí puedes implementar la lógica para cargar una nueva imagen.
    //     // Por ejemplo, abrir un cuadro de diálogo para seleccionar un archivo.
    //     // Luego, actualiza el estado con la nueva URL de la imagen.
    //     console.log('Cambiar imagen de perfil');
    // };

    // const saveEachEventToDelete = (eventId) => {
    //     setSubEventsToDelete((prev) => [...prev, eventId]);
    // };

    // const saveEachFavEventToDelete = (eventId) => {
    //     setFavEventsToDelete((prev) => [...prev, eventId]);
    // };

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
        <Grid>
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

                    {/* <Box
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
                            <Typography key={event._id} component="div" style={{ padding: '5px', textAlign: 'left', color: '#004aad', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                {event.name}
                                {isEditing && (
                                    <IconButton color="gray" onClick={() => saveEachEventToDelete(event._id)} disabled={disabledEvents.includes(event._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </Typography>
                        ))
                    ) : (
                        <Typography component="div" style={{ textAlign: 'left', color: '#004aad' }}>No events favorites</Typography>
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

                    {userData.favEvents.length > 0 ? (
                        userData.favEvents.map((event) => (

                            <Typography key={event._id} component="div" style={{ padding: '5px', textAlign: 'left', color: '#004aad', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                {event.name}
                                {isEditing && (
                                    <IconButton color="gray" onClick={() => saveEachFavEventToDelete(event._id)} disabled={disabledEvents.includes(event._id)}>
                                        <FaHeart color='#C41E3D' />
                                    </IconButton>
                                )}
                            </Typography>
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
                    )} */}
                </Paper>
            )
            }

        </Grid >
    );
};

export default Profile;


