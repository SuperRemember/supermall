<template>
  <!--  底部导航栏  -->
  <tab-bar>
    <tab-bar-item path="/Home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/Category">
      <img slot="item-icon" src="~assets/img/tabbar/all.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/all_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/Shop_car">
      <img slot="item-icon" src="~assets/img/tabbar/shopcar.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcar_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/Profile">
      <img slot="item-icon" src="~assets/img/tabbar/person.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/person_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components:{
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>
