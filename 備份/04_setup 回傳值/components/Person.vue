<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年齡: {{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">查看聯繫方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
    setup(){
      // data--------------------------------------------
      let name = '小李';
      let age = 18;
      let tel = '0911555444'
      // 方法---------------------------------------------
      function changeName(){
        name="老王";
      }
      function changeAge(){
        age += 1;
      }
      function showTel(){
        alert(tel);
      }

      // 返回---------------------------------------------
      // return {name,age,tel,changeName,changeAge,showTel}
      return ()=>"呵呵"
    }
  };
</script>

<style scoped>
.person {
  background-color: lightblue;
  box-shadow: 0 0 10px;
  padding: 20px;
}
</style>
