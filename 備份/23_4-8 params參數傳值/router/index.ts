import { createRouter, createWebHistory } from "vue-router";
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";
import Detail from "@/components/Detail.vue";


const router = createRouter({
  history:createWebHistory(),  // 路由器工作模式
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      name:'新聞',
      path:'/news',
      component:News,
      children:[
        {
          name:'newsDetail',
          path:'detail/:id/:title/:content?',  //params設定，加上?代表可傳可不傳
          component:Detail
        }
      ]
    },
    {
      path:'/about',
      component:About
    },

  ]
})

export default router