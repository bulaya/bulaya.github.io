import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const list = r => require.ensure([], () => r(require('@/pages/list')), 'list')
const department = r => require.ensure([], () => r(require('@/pages/department')), 'department')
const routes = [
  {
    path: '/',
    component: list
  }, {
    path: '/d',
    component: department
  }]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
