import Vue from 'vue'
import VueRouter from "vue-router";

//懒加载方式导入
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shop_car = () => import('../views/shopcar/Shopcar')
const Profile = () => import('../views/profile/Profile')

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
//replace方式
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
//push方式
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    path: '',
    redirect:'/Home'
  },
  {
    path: '/Home',
    component:Home
  },
  {
    path: '/Category',
    component:Category
  },
  {
    path: '/Shop_car',
    component:Shop_car
  },
  {
    path: '/Profile',
    component:Profile
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

//3.导出
export default router

