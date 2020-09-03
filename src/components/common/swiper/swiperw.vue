<template>
  <div id="a">
    <img src="@/assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div>
  </div>
</template>

<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from "vue";
Vue.use(ElementUI)
export default {
  name: "swiperw",
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>

</style>
