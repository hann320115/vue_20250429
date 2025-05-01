<template>
  <div class="talk">
    <button @click="addTalk">獲得一句話</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>
<script setup name="Love" lang="ts">
  import axios from 'axios';
  import { nanoid } from 'nanoid';
  import { reactive } from 'vue';

  let talkList = reactive([
    {id:'1f5s4d',title:'床前明月光'},
    {id:'greg8e',title:'疑似地上霜'},
    {id:'hgj41s',title:'舉頭望明月'},
  ])
  async function addTalk(){
    try{
      let getData = await axios.get('https://v1.hitokoto.cn/')
      let obj = {id:nanoid(),title:getData.data.hitokoto}
      talkList.push(obj)
    }catch(error){
      alert(error)
    }
  }
  </script>

<style>
  .talk{
    background-color: #5eaadf;
    padding: 10px;
    border-radius:10px;
    box-shadow: 0 0 10px;
  }
</style>