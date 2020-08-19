<template>
  <div id="home">
    <!--  顶部导航栏模块  -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <!--  轮播图模块  -->
      <home-swiper :banners="banners"></home-swiper>
      <!--  推荐列表模块  -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!--  本周流行模块  -->
      <feature-view></feature-view>
      <!--  三分类模块  -->
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <!--  商品组件  -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <!--  返回顶部按钮  -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import {getHomeMultidata,getHomeGoods} from "network/home";

  export default {
        name: "Home",
        components:{
          HomeSwiper,
          RecommendView,
          FeatureView,
          NavBar,
          TabControl,
          GoodsList,
          Scroll,
          BackTop
        },
        data(){
          return {
            banners:[],
            recommends:[],
            goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]}
            },
            currentType:'pop',
            isShowBackTop:false
          }
        },
        computed:{
          showGoods(){
            return this.goods[this.currentType].list
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
          //事件监听相关方法
          tabClick(index){
                switch (index) {
                    case 0:
                      this.currentType = 'pop'
                      break
                    case 1:
                      this.currentType = 'new'
                      break
                    case 2:
                      this.currentType = 'sell'
                }
              },

          //返回顶部按钮事件
          backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0)
          },

          //控制返回顶部按钮显示和隐藏
          contentScroll(position){
            // console.log(position);
            this.isShowBackTop = (-position.y) > 700
          },

          //监听上拉加载更多
          loadMore(){
            this.getHomeGoods(this.currentType)
            //再一次刷新是因为图片还没有加载完成，加载完成后整个content内容的高度就变高了
            this.$refs.scroll.scroll.refresh()
          },

          //网络请求相关方法
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
                getHomeGoods(type,page).then(res=>{
                  this.goods[type].list.push(...res.data.list)
                  this.goods[type].page += 1

                  this.$refs.scroll.finishPullUp()
                })
              },



        }
  }
</script>

<!-- 在style中设置scoped，样式只会对本组件中的元素进行修改 -->
<style scoped>
  #home{
    padding-top:44px ;
    /*viewport height*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
  }
  .tab-control{
    position: sticky;
    /*当该组件达到44px时浏览器会将position改变为flex*/
    top: 44px;
    z-index: 8;
    background-color: white;
  }

  .content{
    /*height: 300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/
</style>
