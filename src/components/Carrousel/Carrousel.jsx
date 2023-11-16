import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carrousel.css'
import CarrouselSlide from '../CarrouselSlide/CarrouselSlide';

const Carrousel = () => {

  const routes = {
    name: 'routes',
    links: [
    'https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5037378/pexels-photo-5037378.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/4803903/pexels-photo-4803903.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5928325/pexels-photo-5928325.jpeg?auto=compress&cs=tinysrgb&w=600']
}
  const athletes = {
    name: 'athletes',
    links: [
    'https://u-static.fotor.com/images/text-to-image/result/PRO-204232549d544c20be33f30498397590.jpg',
    'https://u-static.fotor.com/images/text-to-image/result/PRO-a43fa803866b4c4b8f7859da6fe11439.jpg',
    'https://u-static.fotor.com/images/text-to-image/result/PRO-e643f55febf645a19070efd9f7cb17e4.jpg',
    'https://u-static.fotor.com/images/text-to-image/result/PRO-7ae609fa907e4bd3b577914305cdf789.jpg'
  ]}

  const train = {
    name: 'train',
    links: [
    'https://images.pexels.com/photos/4164757/pexels-photo-4164757.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/4348626/pexels-photo-4348626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/7462557/pexels-photo-7462557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/4065510/pexels-photo-4065510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  ]}

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
      style={{ height: '400px', width: '90%'}} >
      <SwiperSlide>
        <CarrouselSlide name={athletes.name} links={athletes.links}/>
      </SwiperSlide>  
      <SwiperSlide>
        <CarrouselSlide name={routes.name} links={routes.links}/>
        </SwiperSlide> 
      <SwiperSlide>
        <CarrouselSlide name={train.name} links={train.links}/>
      </SwiperSlide> 
    </Swiper>
  )
}

export default Carrousel