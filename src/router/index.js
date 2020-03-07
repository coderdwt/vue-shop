import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const home=()=>import('../views/home/home.vue')
const kind=()=>import('../views/kind/kind.vue')
const shop=()=>import('../views/shop/shop.vue')
const profile=()=>import('../views/profile/profile.vue')
const detail=()=>import ('../views/detail/detail.vue')
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/kind',
    component:kind
  },
  {
    path:'/shop',
    component:shop
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/detail/:iid',
    component:detail
  }
]


const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
