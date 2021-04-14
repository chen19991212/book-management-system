const LoginPage = () => import('../views/login/LoginPage.vue')
const HomePage = () => import('../views/home/Home.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/home',
    component: HomePage
  }
]

export default routes