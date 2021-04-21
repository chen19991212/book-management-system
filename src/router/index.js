import Vue from 'vue'
import VueRouter from 'vue-router'

import {constantRoutes,asyncRoutes} from './routes.js'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject){
  if(onResolve || onReject)
    return originalPush.call(this,location,onResolve,onReject)

  return originalPush.call(this,location).catch(err => err)
}

/* const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:constantRoutes
}) */

const createRouter = () => new VueRouter({
  //mode: 'history',
  routes:constantRoutes
})
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
