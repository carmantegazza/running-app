import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getRoutes } from '../../service/routeService'
import { Box, Typography } from '@mui/material'

const RouteDetails = () => {
    const [data, setData] = useState();
    const {id} = useParams()

    useEffect(() => {
        getRoutes().then((res) => {
            setData(res.filter((route) => route._id === id))
        })

    }, [id])


  
  return (
    <Box>
        { data && (
        <Box>
        <Typography color='blue' variant="h5">Route Name: {data[0].name}</Typography>
        <Typography color='blue' variant="h5">Distance: {data[0].distance} metros</Typography>
        <Typography color='blue' variant="h5">Location: {data[0].location}</Typography>
        </Box>
        ) }
    </Box>

  )
}

export default RouteDetails