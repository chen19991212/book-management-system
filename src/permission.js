import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() 
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      console.log(hasRoles);
      if (hasRoles) {
        next()
      } else {
        try {
          //roles为权限信息
          const { roles } = await store.dispatch('user/getUserInfo')
          
          //const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          //console.log(accessRoutes);
          //router.addRoutes(accessRoutes)
          console.log(to);
          //next({ ...to, replace: true })
          next()
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
