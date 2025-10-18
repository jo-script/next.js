'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





function Page() {

  return (
    <div>

      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          height:'300px'
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-[300px]'>
          <img className='w-full h-full' src="https://i.pinimg.com/1200x/3f/d0/07/3fd007d6b2afcc5aa0cc7324f2faa20a.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        pagination={true} 
        // modules={[Pagination]} className="mySwiper"
        >
        <SwiperSlide>
          <img className='w-full h-full' src="https://i.pinimg.com/1200x/3f/d0/07/3fd007d6b2afcc5aa0cc7324f2faa20a.jpg" alt="" />

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Page
