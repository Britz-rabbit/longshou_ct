import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'

import '@/plugins/element'
import '@/plugins/lodash'
import '@/plugins/dataV'
import '@/plugins/swiper'
import '@/plugins/video'


//挂载全局组件
import titleBar from './components/titleBar'
import topMenu from './components/topMenu'
import waterBall from './components/ehcarts/waterBall'
import IR_video from './components/IR_video'
import robot_video from './components/robot_video'
//import ws from './components/ws'

Vue.component('titleBar', titleBar)
Vue.component('waterBall', waterBall)
Vue.component('topMenu', topMenu)
Vue.component('IR_video', IR_video)
Vue.component('robot_video', robot_video)
//Vue.component('ws',ws)


//创建并挂载$bus
class Bus {
  constructor() {
    this.callbacks = {}
  }
  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }
  $emit(name, args) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(cb => cb(args))
    }
  }
}
Vue.prototype.$bus = new Bus();

// 处理笔记本系统默认系统比例为150%带来的布局影响
// import { detectZoom } from '@/utils/detectZoom.js';
// const m = detectZoom();
// document.body.style.zoom = 100 / Number(m);



//引入websocket
//import websocket from './utils/websocket'
//Vue.prototype.$websocket=websocket

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});