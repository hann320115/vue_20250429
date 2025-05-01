<template>
  <div class="person">
    <h4>{{ sum }}</h4>
    <button @click="add">點我+1</button>

    <!-- <h2>台北</h2>
    <h2 ref="title2">台中</h2>
    <h2>高雄</h2>
    <button @click="shoLog">show 出台中</button> -->
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

  let sum = ref(0)
  function add(){
    console.log(sum.value);
    sum.value ++
  }
  onBeforeMount(()=>{
    console.log("掛載前");
  })
  onMounted(()=>{
    console.log("掛載完畢");
  })
  onBeforeUpdate(()=>{
    console.log("更新前");
  })
  onUpdated(()=>{
    console.log("更新完畢");
  })
  onBeforeUnmount(()=>{
    console.log("卸載前");
  })
  onUnmounted(()=>{
    console.log("卸載完畢");
  })
  
  
  
</script>








<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>