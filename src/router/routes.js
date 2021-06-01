import Layout from '@/layout';

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/LoginPage.vue'),
    hidden: true,
    meta: { title: '图书后台管理系统'}
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/Home.vue'),
        name: 'Home',
        meta: { title: '首页', affix: true }
      }
    ]
    
  }
]

export const asyncRoutes = [
  {
    path: '/book',
    name: 'book',
    component: Layout,
    redirect: '/book/create',
    meta: { title: '图书管理', roles: ['admin', 'editor'] },
    children: [
      {
        name: 'bookCreate',
        path: '/book/create',
        component: () => import('@/views/book/Create'),
        meta: { title: '上传图书', roles: ['admin'] }
      },
      {
        name: 'bookEdit',
        path: '/book/edit/:fileName',
        component: () => import('@/views/book/Edit'),
        hidden: true,
        meta: { title: '编辑图书', icon: 'edit', roles: ['admin'], activeMenu: '/book/list' }
      },
      {
        name: 'bookList',
        path: '/book/list',
        component: () => import('@/views/book/List'),
        meta: { title: '图书列表', icon: 'list', roles: ['editor'] }
      }
    ]
  },
]
