<template>
  <div class="countStyle">
    <h2>當前加總數字：{{ countStore.sum }}</h2><br>
    <h2>地址：{{ countStore.address }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>
<script setup name="Count" lang="ts">
  import { useCountStore } from '@/store/count';
  import { ref } from 'vue';
  let n = ref(1)
  // 引入倉庫
  const countStore = useCountStore();

  function add(){
    // 第一種修改數據方式
    countStore.sum ++
    // 第一種修改數據方式 (修改碎片)
    countStore.$patch({
      sum: 99,
      address:'仁德國中'
    })
    // 第三種方式
    countStore.increment(n.value)
  }
  function minus(){

  }

</script>

<style scoped>
  .countStyle{
      background-color: #7d9fb7;
      padding: 10px;
      border-radius:10px;
      box-shadow: 0 0 10px;
  }
  select,button{
    margin: 0 5px;
    height: 20px;
  }
</style>