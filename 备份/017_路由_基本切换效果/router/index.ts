// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 引入一个一个可能要呈现组件

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式（稍后讲解）
  routes: [ //一个一个的路由规则
    {
      path: '/home',
      // component: Home
      component:  () => import('@/components/Home.vue')
    },
    {
      path: '/news',
      // component: News,
      component: () => import('@/components/News.vue')
    },
    {
      path: '/about',
      // component: About
      component: () =>  import('@/components/About.vue')
    },
  ]
})

// 暴露出去router
export default router
