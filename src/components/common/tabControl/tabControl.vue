<template>
  <div class="tabcontrol">
    <div class="a" v-for="(item,index) in titles" :key="index" @click="itemClick(index)" :class="{active:  index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  data() {
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      console.log(this.currentIndex)
    }
  },
  props:{
    titles:{
      type:Array,
      default() {
        return[]
      },
    }
  }
}
</script>

<style scoped>
.tabcontrol{
  display: flex;

}

.a{
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
}
.active{
  color:  var(--color-high-text);
 
}
.active span{
  border-bottom: var(--color-tint) solid 3px;
}
.a span{
  padding: 5px;
}
</style>