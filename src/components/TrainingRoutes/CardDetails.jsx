import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import {useParams}  from 'react-router-dom';

const CardDetails = () => {
    const [routeData, setRouteData] = useState(null);
    const {id} = useParams();
    const  API_ENDPOINT = `https://www.strava.com/api/v3/routes/${id}`

    useEffect(() => {
        const accessToken = '3293d542355f994fedd2ba8b460b7023dfe46a20';
        const routeId = '26945789';

        fetch(`https://www.strava.com/api/v3/routes/${routeId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setRouteData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la ruta de Strava:', error);
            });

    }, []);

    const paperStyle = {
        padding: '20px',
        backgroundColor: 'rgba(63, 101, 154)',
        borderRadius: '30px',
        boxShadow: '0 3px 3px rgb(103, 103, 103)',
        display: 'flex',
        flexDirection: 'column'
    };

    const containerStyle = {
        padding: '20px',
        backgroundColor: 'lightblue',
        borderRadius: '30px',
        boxShadow: '0 3px 3px rgb(103, 103, 103)',

    };

    return (
        <Grid container
            direction='row' gap='10px' padding='10px' justifyContent='center' >
            {/* Card a la izquierda */}
            <Grid item xs={4} >
                <Paper style={paperStyle}>
                    {routeData && (
                        <>
                            <Typography color='white' variant="h5">Nombre de la ruta: {routeData.name}</Typography>
                            <Typography color='white' variant="h5">Distancia {routeData.distance} metros</Typography>
                            <Typography color='white' variant="h5">Pais:</Typography>
                            <Typography color='white' variant="h5">Ciudad:</Typography>
                        </>
                    )}
                </Paper>
            </Grid>
            {/* Card a la derecha */}
            <Grid item xs={7}>
                <div style={{
                    backgroundImage: routeData ? `url(${routeData.map_urls.retina_url})` : 'none', // Verifica si routeData existe antes de acceder a sus propiedades
                    backgroundSize: 'cover', // Otras propiedades de estilo de fondo
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '500px', // Ajusta según tus necesidades
                    // width: '100vw',
                    borderRadius: '30px',
                    boxShadow: '0 3px 3px rgb(103, 103, 103)',
                }}>
                    {/* {routeData && (
                        <>
                            <div>Nombre de la ruta: {routeData.name}</div>
                            <Typography variant="body1">Distancia: {routeData.distance} metros</Typography>
                        </>
                    )} */}
                </div>
            </Grid>

        </Grid>
    );
};

export default CardDetails;
