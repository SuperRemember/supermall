<template>
    <div class="goods-item">
      <img :src="goodsItem.show.img" alt="">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
      props:{
          goodsItem:{
            type:Object,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .goods-item{
    padding-bottom:40px ;
    position: relative;
    width: 48%;
  }

  .goods-item img{
    width: 100%;
    border-radius:5px ;
  }

  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;             /*overflow 属性规定当内容溢出元素框时发生的事情,使用hidden内容会被修剪，并且其余内容是不可见的。*/
    text-align: center;
  }

  .goods-info p{
    overflow: hidden;              /*overflow 属性规定当内容溢出元素框时发生的事情,使用hidden内容会被修剪，并且其余内容是不可见的。*/
    text-overflow: ellipsis;     /*text-overflow 属性规定当文本溢出包含元素时发生的事情。ellipsis	->显示省略符号来代表被修剪的文本。*/
    white-space: nowrap;        /*white-space 属性设置如何处理元素内的空白。nowrap规定段落中的文本不进行换行*/
    margin-bottom: 3px;
  }

  .goods-info .price{
    color: red;
    margin-right: 20px;
  }

  .goods-info .collect{
    position: relative;
  }

  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
