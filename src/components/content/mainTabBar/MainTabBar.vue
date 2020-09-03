<template>
  <div>
    <tabbar>
      <tab-bar-item text="/home">
        <img slot="item-icon1" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon2" src="@/assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item text="/category">
        <img slot="item-icon1" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon2" src="@/assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item text="/cart">
        <img slot="item-icon1" src="@/assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon2" src="@/assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item text="/profile">
        <img slot="item-icon1" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon2" src="@/assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tabbar>
  </div>
</template>

<script>
  import TabBarItem from "components/common/tabbar/TabBarItem"
  import tabbar from "components/common/tabbar/TabBer"
  
  export default {
    name: 'MainTabBar',
    components: {
      tabbar,
      TabBarItem
    }
  }
</script>

<style scoped>


</style>
