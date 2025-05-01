import axios from "axios";
import { defineStore } from "pinia";
import { nanoid } from 'nanoid';
import { reactive } from "vue";

// export const useLoveTalkStore = defineStore('talk',{
//   actions:{
//     async addTalk(){
//       try{
//         let getData = await axios.get('https://v1.hitokoto.cn/')
//         let obj = {id:nanoid(),title:getData.data.hitokoto}
//         this.talkList.push(obj)
//       }catch(error){
//         alert(error)
//       }
//     }
//   },
//   state(){
//     return{
//       talkList : JSON.parse(localStorage.getItem('talkList')||'') || [] //||[] 防止是null
//     }
//   }
// })

// 組合式寫法
export const useLoveTalkStore = defineStore('talk',()=>{
  const talkList = reactive(JSON.parse(localStorage.getItem('talkList')||''));
  async function addTalk(){
    try{
      let getData = await axios.get('https://v1.hitokoto.cn/')
      let obj = {id:nanoid(),title:getData.data.hitokoto}
      talkList.push(obj)
    }catch(error){
      alert(error)
    }
  }
  return {talkList,addTalk}
})