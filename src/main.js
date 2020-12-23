// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCesium from 'vue-cesium'
// VueCesium 默认使用 `https://unpkg.com/cesium/Build/Cesium/Cesium.js`
//import lang from 'vue-cesium/lang/zh-hans'
Vue.use(VueCesium)
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
