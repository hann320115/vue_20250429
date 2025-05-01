import axios from "axios";
import { defineStore } from "pinia";
import { nanoid } from 'nanoid';

export const useLoveTalkStore = defineStore('talk',{
  actions:{
    async addTalk(){
      try{
        let getData = await axios.get('https://v1.hitokoto.cn/')
        let obj = {id:nanoid(),title:getData.data.hitokoto}
        this.talkList.push(obj)
      }catch(error){
        alert(error)
      }
    }
  },
  state(){
    return{
      talkList : JSON.parse(localStorage.getItem('talkList')||'') || [] //||[] 防止是null
    }
  }
})
