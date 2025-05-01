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
      talkList:[
        {id:'1f5s4d',title:'床前明月光'},
        {id:'greg8e',title:'疑似地上霜'},
        {id:'hgj41s',title:'舉頭望明月'},
      ]
    }
  }
})
