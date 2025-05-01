<template>
  <div class="talk">
    <button @click="loveTalkStore.addTalk()">獲得一句話</button>
    <ul>
      <li v-for="talk in loveTalkStore.talkList" :key="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>
<script setup name="Love" lang="ts">
  import { useLoveTalkStore } from '@/store/loveTalk';
  const loveTalkStore = useLoveTalkStore();
                    //本次更改訊息   最新狀態
  loveTalkStore.$subscribe((matate,state)=>{
    console.log('loveTalkStore數據發生了變化',matate,state)
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
  });
  
  </script>

<style>
  .talk{
    background-color: #5eaadf;
    padding: 10px;
    border-radius:10px;
    box-shadow: 0 0 10px;
  }
</style>