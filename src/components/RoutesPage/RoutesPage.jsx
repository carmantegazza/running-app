import React, { useEffect, useState, useRef } from 'react'
import RoutesContainer from '../RoutesContainer/RoutesContainer'
import { getRoutes } from '../../service/routeService'
import { Box, Select, MenuItem, Button, FormControl, InputLabel, Grid, OutlinedInput, IconButton, Typography } from '@mui/material'
import { MdClear } from '@react-icons/all-files/md/MdClear'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const RoutesPage = () => {

  const [data, setData] = useState([])
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState('')
  const [routesToRender, setRoutesToRender] = useState([])
  const inputSearch = useRef(null)
  const [locationFiltered, setLocationFiltered] = useState('')
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isSmallScreen)
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
      // display:'flex',
      // flexDirection: isSmallScreen ? 'column' : 'row',
      // marginTop:'80px',
      // height:'68vh',
      // width:'100%',
      // border:'2px solid black'
    }}> 
          <Box sx={{backgroundColor: 'rgba(63, 101, 154)',     
                boxShadow: '0px 80px 55px 45px rgba(63, 101, 154)',
                marginTop: '12vh',
                paddingY: '5vh',
                width: '100vw',}}> 
        <Typography  variant='h3' color='white' textAlign='center' > Run Everywhere </Typography>
        <Typography  variant='h5' color='white' textAlign='center'  >  Find the perfect trail for you, where are you going next? </Typography>
      </Box>
      <Grid container 
            sx={{display:'flex', 
            flexDirection:  'row',
            justifyContent: 'space-between', 
            width:'100%'}} 
            gap="20px" 
            padding="10px"
            paddingX='10vw'>   
        <Grid item  >
          <Grid container
          display='flex'
          justifyContent='center'
          flexDirection= 'column'
          marginTop='45px'
          sx={{width:'auto',}}>
            <Grid item paddingY='15px'>
              <Typography variant='h6'>Filter by location: </Typography>
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
            <Grid item paddingY='15px'>
            <Typography variant='h6'>Search by name of the trail: </Typography>
            <Grid item display='flex'>
              <FormControl >
                <OutlinedInput
                inputRef={inputSearch}
                endAdornment={
                    <IconButton onClick={handleClickClear}>
                      <MdClear color='#004aad'/>
                    </IconButton>
                }> </OutlinedInput>
              </FormControl>
              
              <Button variant="contained" onClick={handleClick} sx={{height:60}}>Search</Button>
            </Grid>
            
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{height:'100%'}}>
        {routesToRender.length > 0 ? <RoutesContainer routes={routesToRender} style={{height:'100%'}} />: <div style={{display:'flex', textAlign:'center', justifyContent:'center',height:'100%'}} > No results found</div>}      
        </Grid>

      </Grid> 
    </Box>
  )
}

export default RoutesPage