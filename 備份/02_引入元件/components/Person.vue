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
    data() {
      return {
        name: '小李',
        age: 30,
        tel: '0955444666'
      }
    },
    methods: {
      showTel() {
        alert(this.tel);
      },
      changeName(){
        this.name="老王";
      },
      changeAge(){
        this.age += 1;
      }
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
