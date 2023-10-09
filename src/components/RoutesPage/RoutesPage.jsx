import React, { useEffect, useState, useRef } from 'react'
import RoutesContainer from '../RoutesContainer/RoutesContainer'
import { getRoutes } from '../../service/routeService'
import { Box, Select, MenuItem, TextField, Button, FormControl, InputLabel, Grid } from '@mui/material'

const RoutesPage = () => {

  const [data, setData] = useState([])
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState('')
  const [routesToRender, setRoutesToRender] = useState([])
  const inputSearch = useRef(null)
   
  useEffect(() => {
     getRoutes().then((res) => {
       setLocations([...new Set(res.map((route) => route.location))])
       setData(res)
       setRoutesToRender(res)
       })     
  }, [])

   const handleChange = (e) => {
     if (e.target.value === 'all') {
       setRoutesToRender(data)
     } else {
       const filteredLoc = data.filter((route)  => route.location === e.target.value)
        setRoutesToRender(filteredLoc)
    }
   }

   const handleClick = () => {
     const searchedNames = data.filter((route) => (route.name.toLowerCase()).includes(inputSearch.current.value))
     const searchedLocations = data.filter((route) => (route.location.toLowerCase()).includes(inputSearch.current.value))
     const searchedResults = searchedNames.concat(searchedLocations)
     setRoutesToRender(searchedResults)
   
   }

   const handleClickClear = () => {
    setRoutesToRender(data) 
  }

  return (
    <Box>
      <Grid container m='20px' justifyContent='center' alignItems='space-evenly'>
      <TextField id="input-search" label="Search" variant="outlined" inputRef={inputSearch} placeholder='Search'/>
      <Button variant="contained" onClick={handleClick}>Search</Button>
      <Button variant="outlined" onClick={handleClickClear}>Clear</Button>
    
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
        {locations.map(location => <MenuItem key={location} value={location}>{location}</MenuItem>)}
      </Select>
      </FormControl>

      </Grid> 
      <RoutesContainer routes={routesToRender} />
    </Box>
  )
}

export default RoutesPage