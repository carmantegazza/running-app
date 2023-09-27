import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'

const CarrouselSlide = ({name, links}) => {
    const [text, setText] = useState('')
    useEffect( () => {
        switch (name){
            case 'athletes':
                setText('Athletes. Run Inspired')
                 break;
            case 'routes': 
                setText('Routes. Run Everywhere')
                break;
            case 'train':
                 setText('Ready. Set. traAIn')
                 break;
            default:   
        }
    }, [])

  return (
   
    <Grid container height='100%' sx={{ marginX: 'auto', width: {xs: '85%', md: '80%'}}}>
      <Grid container height='auto' width='100%' justifyContent='center' style={{backgroundColor: 'rgba(63, 101, 154)'}}>
        <Typography fontSize= {{xs: '30px', md: '45'}} color='white' textAlign='center'>{text}</Typography></Grid>
        <Grid container height='80%'>
        {links.map((element, index) => (
        <Grid item 
            key={index}
            xs={6} lg={3} 
            style={{backgroundImage: `url(${element})`, 
            backgroundSize: 'cover', 
            backgroundAttachment: 'fixed'}}>
        </Grid>
    ))}        
      </Grid>
    </Grid>
   
  )
}

export default CarrouselSlide