// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import Icon from 'vue-awesome/components/Icon'
// 自定义样式，覆盖原有mint-ui样式
// import './assets/css/mint-ui-style.css'
import VueRouter from 'vue-router'
import "swiper/dist/css/swiper.css"
import Routes from "./router"
import 'mint-ui/lib/style.css'
//全局修改mint-UI样式 
import './assets/css/mint-ui-style.css'

Vue.use(MintUI);
Vue.use(VueAwesomeSwiper);
Vue.use(VueRouter);
Vue.config.productionTip = false
// ajax请求过期时间，最长5秒
axios.defaults.timeout = 5000
// 将axios放入Vue的原型链中，所有的组件都可以使用
Vue.prototype.axios = axios;


// Vue.component('icon', Icon)
/* eslint-disable no-new */

// 创建路由
const router =new VueRouter({
  routes:Routes,
  mode:"history"
})

new Vue({
  el: '#app',
  router,
  axios,
  MintUI,
  components: { App },
  template: '<App/>'
})
