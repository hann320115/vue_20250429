<template>
  <ul class="news-list">
    <li>編號：{{id}}</li>
    <li>標題：{{title}}</li>
    <li>內容：{{content}}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  defineProps(['id','title','content'])
</script>

<style scoped>
    .news-list {
      list-style: none;
      padding-left: 20px;
    }
  
    .news-list>li {
      line-height: 30px;
    }
  </style>