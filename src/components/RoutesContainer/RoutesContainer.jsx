import { Box, FormControl, Select, InputLabel, MenuItem, TextField, Button, Container, Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { getRoutes } from '../../service/routeService'
import RouteElement from '../RouteElement/RouteElement'
import './RoutesContainer.css'

const RoutesContainer = () => {

 const [data, setData] = useState([])

 //para el filtro de locations
const [locations, setLocations] = useState([])
const [filtered, setFiltered] = useState([])
 
 useEffect(() => {
  getRoutes().then((res) => {
    setLocations(res.map((route) => route.location))
    setData(res)
    setFiltered(res)
    })

  
}, [])

console.log(data)

//para el select
const [location, setLocation] = useState('')

const handleChange = (e) => {
  if (e.target.value == 'all') {
    setFiltered(data)
  } else {
    const filteredLoc = data.filter((route)  => route.location == e.target.value)
    setFiltered(filteredLoc)
  }
  setLocation(e.target.value)
}

//para boton de busqueda
const inputSearch = useRef(null)

const handleClick = (e) => {
  console.log(inputSearch.current.value)
}

return (
    <Box>
      <h2>Routes</h2>

      <TextField id="input-search" label="Location" variant="outlined" inputRef={inputSearch}/>
      <Button variant="contained" onClick={handleClick}>Search</Button>

      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel id="location-select-label">Location</InputLabel>
        <Select
          labelId="location-select-label"
          id="location-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem key='all' value='all' defaultValue={true}>All</MenuItem>
          {locations.map( location => <MenuItem key={location} value={location}>{location}</MenuItem>)}
        </Select>
      </FormControl>
      <Container sx={{ 
      width: '100vw',
      height: '84vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingY: '20px',
      boxSizing:'border-box' 
    }}>
      <Box sx={{
        height: '100%',
        width: 600,
        boxSizing: 'border-box',
        overflow: 'hidden',
        boxShadow: 'inset 0px 0px 100px 10px rgba(255,255,255,0.4), 0px 0px 30px 5px rgba(0,0,0,0.6),0px 0px 150px 15px rgba(0,0,0,0.3)',
        borderRadius: 2,
        backgroundColor: 'rgba(63, 101, 154,0.8)',
      }}>
        <div
          style={{
            height: '97.6%',
            overflow: 'auto',
            padding: '10px',
            marginY:'10px',

          }}>

          <Grid
            container
            direction='column'
            style={{
              justifyContent: 'center',
              width: '100%',
              marginX: 'auto',
              gap: 5
            }}>
             {filtered.length > 0 && 
              filtered.map((route) => {
                return (
              <RouteElement key={route.id} infoRoute={route} className='routeElement'></RouteElement>
          )
})}

          </Grid>
        </div>
      </Box>

    </Container>

    </Box>
  )
}

export default RoutesContainer