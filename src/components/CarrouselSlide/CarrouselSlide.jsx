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
    })

  return (
   
    <Grid container height='100%' width= '85%' sx={{marginX: 'auto'}}>
      <Grid container height='15%' width='100%' justifyContent='center' style={{backgroundColor: 'rgba(63, 101, 154)'}}>
        <Typography variant='h4' color='white'>{text}</Typography></Grid>
        <Grid container height='80%'>
        {links.map((element) => (
        <Grid item xs={6} lg={3} 
            style={{backgroundImage: `url(${element})`, 
            backgroundSize: 'cover'}}>
        </Grid>
    ))}        
      </Grid>
    </Grid>
   
  )
}

export default CarrouselSlide