import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// 路由map
router.map({
  '/Home': {
    component: Home
  },
  '/TimeEntries': {
    component: TimeEntries,
    subRoutes: {
      '/LogTime': {
        component: LogTime
      }
    }
  }
})

router.redirect({
  '*': '/Home'
})

router.start(App, '#app')
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
