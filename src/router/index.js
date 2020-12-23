import Vue from 'vue'
import Router from 'vue-router'
import ditu from '@/components/ditu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ditu
    }
  ]
})
