import React from 'react'
import { HeroContainer } from './style'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Navigation } from "swiper";


const Hero = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <HeroContainer>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" alt="" />
          <div className="swiper-content">
            <h4>Fixed-Height Slider</h4>
            <h5>Excellent bouquets for you</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" alt="" />
          <div className="swiper-content">
            <h4>Fixed-Height Slider</h4>
            <h5>Excellent bouquets for you</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" alt="" />
          <div className="swiper-content">
            <h4>Fixed-Height Slider</h4>
            <h5>Excellent bouquets for you</h5>
          </div>
        </SwiperSlide>
        <div id='prev' ref={navigationPrevRef}>
          <span></span> <br />
          Prev
        </div>
        <div id='next' ref={navigationNextRef}>
          <span></span> <br />
          Next
        </div>
      </Swiper>
    </HeroContainer>
  )
}

export default Hero