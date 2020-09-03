<template>
<van-swipe :autoplay="3000" style="height: 200px">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image.image" style="height: 100%;
  width: 100%;"/>
  </van-swipe-item>
</van-swipe>

</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  name: "swiperVant",
  props: {
    images: {
      type:Array
    }
  },
  data() {
      return {
        
      };
  },
}
</script>

<style scoped>
  
</style>