import { Box, FormControl, Select, InputLabel, MenuItem, TextField, Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { getRoutes } from '../../service/routeService'

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
      {filtered.length > 0 && 
        filtered.map((route) => {
          return (
            <Box key={route.id}>
              <p>{route.name}</p>
              <p>{route.location}</p>
            </Box>
          )
        })}
    </Box>
  )
}

export default RoutesContainer