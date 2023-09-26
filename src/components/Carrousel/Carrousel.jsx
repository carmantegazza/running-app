import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Grid } from '@mui/material';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from '../../media/people1.jpg'
import image2 from '../../media/people2.jpg'
import './Carrousel.css'

const Carrousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      effect={`fade`}
      navigation={true}
      pagination={{
          clickable: true,
      }}
      autoplay={{delay: 3000}}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
                style={{ height: "300px" }}

    >
      <SwiperSlide>
        <Grid container spacing='xs' height='100%' width= '85%' sx={{marginX: 'auto'}}>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></Grid>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></Grid>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></Grid>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
      <Grid container height='100%' width= '85%' sx={{marginX: 'auto'}}>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover', }}></Grid>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover' }}></Grid>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover' }}></Grid>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover' }}></Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
      <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover', }}></Grid>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover' }}></Grid>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover' }}></Grid>
          <Grid item xs={6} lg={3} style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover' }}></Grid>
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Carrousel