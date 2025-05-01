<template>
  <div class="person">
    <h3>姓名：{{ person.name }}</h3>
    <h3>年齡：{{ person.age }}</h3>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changePerson">修改整個人</button>

  </div>
</template>


<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue';
  let person = reactive({
    name:'小李',
    age:18
  })
  function changeName(){
    person.name += "~"
  }
  function changeAge(){
    person.age ++
  }
  function changePerson(){
    Object.assign(person,{name:'老王',age:90})
  }
  // 監視
  watch(person,(newValue,oldValue)=>{
    console.log(newValue,oldValue)
  })


</script>



<style scoped>
.person {
  background-color: lightblue;
  box-shadow: 0 0 10px;
  padding: 20px;
}
</style>
