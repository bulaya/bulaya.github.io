// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-theme-chalk'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
