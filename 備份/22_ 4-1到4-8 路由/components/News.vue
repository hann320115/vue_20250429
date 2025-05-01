<template>
    <div class="news">
      <ul>
        <li v-for="news in newsList" :key="news.id">
          <!-- 第一種寫法 query -->
          <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&title=${news.content}`">{{news.title}}</RouterLink> -->
          <!-- 第二種寫法  -->
          <RouterLink :to="{
            path:'/news/detail', // 對應路由定義的參數，也可以使用name不使用path
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }">{{news.title}}</RouterLink>
        </li>
      </ul>
      <div class="news-content">
        <RouterView />
      </div>
    </div>
  </template>
  
  <script setup lang="ts" name="News">
    import {reactive} from 'vue';
    import {RouterView,RouterLink} from 'vue-router';
    
    const newsList = reactive([
      {id:'query01',title:'歐巴馬重新上任',content:'美國總統'},
      {id:'query02',title:'IDF戰機空中意外擊發火焰彈',content:'於昨天下午執行例行訓練期間，發生空中火焰彈意外擊發情事，並未造成意外，目前已派員調查。'},
      {id:'query03',title:'貴婦奈奈回台歸案家當太多',content:'網紅始祖貴婦奈奈被控與前男友黃博健等人藉投資醫美診所吸金詐騙近2億元'},
      {id:'query04',title:'美國與烏克蘭簽署重建與礦產協議',content:'烏克蘭與美國週三（4/30）簽署美國總統川普大力推動的礦產協議，未來美國將優先取得烏克蘭礦產交易，並為烏克蘭重建提供資金。'},
    ])
  </script>
  


  
  <style scoped>
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
  }
  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }
  .news li::marker{
    color: #64967E;
  }
  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
  </style>