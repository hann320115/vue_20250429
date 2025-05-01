import { defineStore } from "pinia";

export const useLoveTalkStore = defineStore('talk',{
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
