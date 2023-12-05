import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const CarrouselSlide = ({name, links}) => {
    const [text, setText] = useState('')
    const [link, setLink] = useState('')
    useEffect( () => {
        switch (name){
            case 'athletes':
                setText('Events. Run Inspired')
                setLink('events')
                 break;
            case 'routes': 
                setText('Routes. Run Everywhere')
                setLink('routes')
                break;
            case 'train':
                 setText('Ready. Set. traAIn')
                 setLink('login')
                 break;
            default:   
        }
    }, [])

  return (
   
    <Grid container height='100%' sx={{ marginX: 'auto', width: {xs: '85%', md: '80%'}}}>
      <Grid container height='auto' width='100%' justifyContent='center' style={{backgroundColor: 'rgba(63, 101, 154)'}}>
        <Link to={link} style={{textDecoration: 'none'}}>
        <Typography fontSize= {{xs: '30px', md: '45'}} color='white' textAlign='center'>{text}</Typography>
        </Link>
        </Grid>
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