<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="~/assets/images/sample-01.jpg"></div>
      <div class="swiper-slide"><img src="~/assets/images/sample-02.jpg"></div>
      <div class="swiper-slide"><img src="~/assets/images/sample-03.jpg"></div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<!--<template>
<div class="row">
  <div id="accordion">...</div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="~/assets/images/sample-01.jpg"></div>
      <div class="swiper-slide"><img src="~/assets/images/sample-02.jpg"></div>
      <div class="swiper-slide"><img src="~/assets/images/sample-03.jpg"></div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  <div class="medium-6 medium-offset-3 cell" data-aos="fade-up">
      <img src="~/assets/images/sample-01.jpg">
    </div>
    <div class="medium-6 medium-offset-3 cell" data-aos="fade-up">
      <img src="~/assets/images/sample-02.jpg">
    </div>
    <div class="medium-6 medium-offset-3 cell" data-aos="fade-up">
      <img src="~/assets/images/sample-03.jpg">
    </div>
  </div>
  
</template>-->

<script>
import $ from 'jquery'
import 'aos/dist/aos.css'
import aos from 'aos'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/bundle'
export default {
  // layout: 'home',
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    aos.init()
    $('#accordion').accordion()
  }
}
</script>

<style>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>