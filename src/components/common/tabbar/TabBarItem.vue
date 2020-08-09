<template>
  <!--所有的item都展示同一个图片，同一个文字-->
  <div class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!--    <img src="../../assets/img/tabbar/home.svg" alt=""> -->
    <!--    <div>首页</div> -->
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'deepskyblue'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
         return this.isActive ? {color:this.activeColor}:{}
       }
    },
    data(){
      return{
        // isActive:true
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;                        /*平均分布*/
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 6px;
    vertical-align: middle;
  }

  .active{
    color: deepskyblue;
  }



</style>
