import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getRoutes } from '../../service/routeService'
import { Box, Typography } from '@mui/material'

const RouteDetails = () => {
    const [data, setData] = useState(null);
    const {id} = useParams()

    useEffect(() => {
        getRoutes().then((res) => {
            setData(res.filter((route) => route._id === id))
            console.log(id)
            console.log(res)
            console.log(data)
        })

    }, [id])

    console.log(data)
  
  return (
    <Box>
        {/* <Typography color='white' variant="h5">Route Name: {data.name}</Typography>
        <Typography color='white' variant="h5">Distance: {data.distance} metros</Typography>
        <Typography color='white' variant="h5">Location: {data.location}</Typography> */}
    </Box>

  )
}

export default RouteDetails