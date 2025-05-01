<template>
  <div class="count">
    <h2>當前加總數字：{{ sum }}</h2>
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
  import { ref } from 'vue';

  let sum = ref(0);
  let n = ref(1)

  function add(){
    sum.value += n.value
  }
  function minus(){
    sum.value -= n.value
  }

</script>

<style scoped>
  .count{
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