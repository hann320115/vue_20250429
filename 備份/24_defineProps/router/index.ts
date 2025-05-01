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
          path:'detail',
          component:Detail,
          // 將所有路由收到的params參數作為props傳給路由組件，因此此種寫法只能與params配合
          // props:true  //相當於加入<Detail id=???...>
          // defineProps 的 props寫法
          props(route){
            return route.query
          }
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