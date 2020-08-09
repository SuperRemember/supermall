<template>
  <div id="home">
    <!--  顶部导航栏模块  -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--  轮播图模块  -->
    <home-swiper :banners="banners"></home-swiper>
    <!--  推荐列表模块  -->
    <recommend-view :recommends="recommends"></recommend-view>
    <!--  本周流行模块  -->
    <feature-view></feature-view>
    <!--  三分类模块  -->
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <!--  商品组件  -->
    <goods-list :goods="goods['pop'].list"></goods-list>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "../../components/goods/GoodsList";

  import {getHomeMultidata,getHomeGoods} from "../../network/home";

  export default {
        name: "Home",
        components:{
          HomeSwiper,
          RecommendView,
          FeatureView,
          NavBar,
          TabControl,
          GoodsList
        },
        data(){
          return {
            banners:[],
            recommends:[],
            goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]}
            }
          }
        },
        created() {
          //1.请求多个数据
          this.getHomeMultidata()

          //2.请求商品数据
          this.getHomeGoods('pop')
          this.getHomeGoods('new')
          this.getHomeGoods('sell')
        },
        methods:{
              getHomeMultidata(){
                getHomeMultidata().then(res=>{
                  console.log(res);
                  // this.result = res;
                  this.banners = res.data.banner.list
                  this.recommends = res.data.recommend.list
                })
              },
              getHomeGoods(type){
                const page = this.goods[type].page+1
                getHomeGoods('pop',page).then(res=>{
                  this.goods[type].list.push(...res.data.list)
                  this.goods[type].page += 1
                })
              }
        }
  }
</script>

<style scoped>
  #home{
    padding-top:44px ;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    /*当该组件达到44px时浏览器会将position改变为flex*/
    top: 44px;
    z-index: 9;
    background-color: white;
  }
</style>
