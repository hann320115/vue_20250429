import { defineStore } from "pinia";
                                  // id  
export const useCountStore = defineStore('count',{
  actions:{
    increment(value:number){
      this.sum += value
    }
  },
  // 存取數據的地方
  state(){
    return{
      sum: 0,
      address:'新豐高級中學'
    }
  },
  getters:{
    dobuleSum(state){
      return state.sum *2
    }
  }
})