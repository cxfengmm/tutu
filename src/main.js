// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//axios(将其挂载在vue的原型上，全局可用this.axios，避免重复引用)
import axios from 'axios'
let url = 'https://cettapi.chaohoko.com/'
axios.defaults.baseURL = url
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios = axios

import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

//滚动到页面底部加载下一页函数封装
Vue.prototype.scroll = function (callback) {
  window.onscroll = function () {
    let t = document.documentElement.scrollTop;
    let wh = window.innerHeight;
    let bh = document.body.offsetHeight;
    if( t + wh >= bh){
      callback && callback();
    }
  }
}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


