<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年齡: {{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">查看聯繫方式</button>
  </div>
</template>


<script lang="ts" setup name="Person">
  import {ref} from'vue';

  // data--------------------------------------------
  let a = 666;
  let tel = '0911555444'

  // 響應式data --------------------------------------------
  let name = ref('小李');
  let age = ref(18);

  console.log("1",name)
  console.log("2",age)
  console.log("3",tel)

  // 方法---------------------------------------------
  function changeName(){
    name.value="老王";
  }
  function changeAge(){
    age.value += 1;
  }
  function showTel(){
    alert(tel);
  }
</script>




<style scoped>
.person {
  background-color: lightblue;
  box-shadow: 0 0 10px;
  padding: 20px;
}
</style>
