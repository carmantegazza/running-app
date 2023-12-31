import React, { useEffect, useState, useRef } from 'react'
import RoutesContainer from '../RoutesContainer/RoutesContainer'
import { getRoutes } from '../../service/routeService'
import { Box, Select, MenuItem, Button, FormControl, InputLabel, Grid, OutlinedInput, IconButton } from '@mui/material'
import { MdClear } from '@react-icons/all-files/md/MdClear'


const RoutesPage = () => {

  const [data, setData] = useState([])
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState('')
  const [routesToRender, setRoutesToRender] = useState([])
  const inputSearch = useRef(null)
  const [locationFiltered, setLocationFiltered] = useState('')
   
  useEffect(() => {
     getRoutes().then((res) => {
       setLocations([...new Set(res.map((route) => route.location))])
       setData(res)
       setRoutesToRender(res)
       })   
       
  }, [])

   const handleChange = (e) => {
    setLocationFiltered(e.target.value)
     if (e.target.value === 'all') {
       setRoutesToRender(data)
     } else {
       const filteredLoc = data.filter((route)  => route.location === e.target.value)
        setRoutesToRender(filteredLoc)
    }
    setLocation(e.target.value)
   }

   const handleClick = () => {
    if (locationFiltered !== 'all' && locationFiltered) {
      const searchedInLocation = data.filter((route) => route.location === locationFiltered)
      const searchedNames = searchedInLocation.filter((route) => (route.name.toLowerCase()).includes(inputSearch.current.value))
      setRoutesToRender(searchedNames)
    } else {
      const searchedNames = data.filter((route) => (route.name.toLowerCase()).includes(inputSearch.current.value))
      setRoutesToRender(searchedNames)
    }
   }

   const handleClickClear = () => {
    inputSearch.current.value = '';
    setRoutesToRender(data) 

  }

  return (
    <Box style={{
      height:'70vh'
    }}>
      <Grid container display="flex" px='1.5vw' justifyContent='center' alignItems='space-evenly' gap="20px" paddingTop="10px" >
       
        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <FormControl sx={{ minWidth: 300 }}>
          <InputLabel id="location-select-label">Location</InputLabel>
            <Select 
              value={location}
              label="Location"
              onChange={handleChange}
              > 
              <MenuItem key='all' value='all' selected={true} >All</MenuItem>
              {locations.map(location => <MenuItem key={location} value={location}>{location}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <FormControl >
            <InputLabel>Search</InputLabel>
            <OutlinedInput
            inputRef={inputSearch}
            endAdornment={
                <IconButton onClick={handleClickClear}>
                  <MdClear color='#004aad'/>
                </IconButton>
                
              

            }> </OutlinedInput>
          </FormControl>
          <Button variant="contained" onClick={handleClick} sx={{height: '100%'}}>Search</Button>
        </Grid>
      </Grid> 
      {routesToRender.length > 0 ? <RoutesContainer routes={routesToRender} />: <div style={{width:'100%', display:'flex', textAlign:'center', justifyContent:'center'}} > No results found</div>}
    </Box>
  )
}

export default RoutesPage