<template>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :zoom="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img class="swiper-zoom-container__img" src='@/assets/img/bedroomSlider1.png' />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img class="swiper-zoom-container__img" src='@/assets/img/bedroomSlider2.jpg' />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img class="swiper-zoom-container__img" src='@/assets/img/bedroomSlider3.jpg'/>
        </div> </swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/zoom';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
  
    import { Zoom, Navigation, Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Zoom, Navigation, Pagination],
        };
      },
    };
  </script>