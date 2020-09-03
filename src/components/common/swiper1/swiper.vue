<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <!-- <img src="../../static/images/ad1.jpg" alt=""> -->
        <img src="/assets/img/tabbar/category.svg" alt="">
      </div>
      <div class="swiper-slide">
        1
      </div>
      <div class="swiper-slide">
        1
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'swiper',
  mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true
        })
      },
}
</script>

  <style>
    body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {
        width: 500px;
        height: 300px;
        margin: 20px auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
  </style>