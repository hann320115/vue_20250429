<template>
  <div class="person">
    <h3>姓名：{{ person.name }}</h3>
    <h3>年齡：{{ person.age }}</h3>
    <h4>汽車：{{person.car.c1}}、{{person.car.c2}}</h4>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changeC1">修改第一台車</button>
    <button @click="changeC2">修改第二台車</button>
    <button @click="changeCar">修改所有車</button>

  </div>
</template>


<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue';
  let person = reactive({
    name:'小李',
    age:18,
    car:{
      c1:'TOYOTA',
      c2:'YANAHA'
    }
  })
  function changeName(){
    person.name += "~"
  }
  function changeAge(){
    person.age ++
  }
  function changeC1(){
    person.car.c1 = '奧迪'
  }
  function changeC2(){
    person.car.c2 = '寶馬'
  }
  function changeCar(){
    person.car = {c1:'法拉利',c2:'保時捷'}
  }
  // 監視
  watch(()=>person.name,(newValue,oldValue)=>{
    console.log("正確單獨監聽到了名字")
  })
  watch(()=>person.car,(newValue,oldValue)=>{
    console.log("正確單獨監聽到了car物件")
  },{deep:true})

</script>



<style scoped>
.person {
  background-color: lightblue;
  box-shadow: 0 0 10px;
  padding: 20px;
}
</style>
