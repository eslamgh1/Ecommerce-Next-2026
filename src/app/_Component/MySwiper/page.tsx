"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function MySwiper(
    { imageList, slidesPerView, spaceBetween }:
        {
            imageList: string[],
            spaceBetween?: number,
            slidesPerView?: number,
        }) {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            loop
            
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
        className='w-full'
        >

            {/* Dynmaic */}
            {imageList.map((src) => <SwiperSlide key={src}><img className='w-full h-[400px]' src={src} alt="src" /></SwiperSlide>)}
            {/* Static */}
            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
            ...
        </Swiper>
    );
};