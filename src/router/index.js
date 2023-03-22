import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'index',
    component:() => import ('../views/index.vue'),
    children:[
      {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        name:'home',
        component:() => import("../views/Home.vue")
      },
      {
        path:'/me',
        name:'me',
        component:() => import("../views/Me.vue")
      },
      {
        path:'/order',
        name:'order',
        component:() => import("../views/Order.vue")
      },
      {
        path:'/address',
        name:'address',
        component:() => import("../views/Address.vue")
      },
      {
        path:'/city',
        name:'city',
        component:() => import("../views/City.vue")
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/shop',
    name: 'shop',
    redirect:"/goods",
    component: () => import('../views/Shop.vue'),
    children:[
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/Goods.vue'),
      },
      {
        path: '/comments',
        name: 'comments',
        component: () => import('../views/Comments.vue'),
      },
      {
        path: '/seller',
        name: 'seller',
        component: () => import('../views/Seller.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:"active",
  routes
})

//路由守卫
router.beforeEach((to,from,next) => {
  const isLogin = localStorage.ele_login ? true : false
  if(to.path == '/login'){
    next()
  }else{
    isLogin ? next() : next('/login')
  }
})

export default router
