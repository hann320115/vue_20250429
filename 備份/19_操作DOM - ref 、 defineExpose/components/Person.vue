<template>
  <div class="person">
    <h2>台北</h2>
    <h2 ref="title2">台中</h2>
    <h2>高雄</h2>
    <button @click="shoLog">show 出台中</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,defineExpose} from 'vue'
  let title2 = ref()
  function shoLog(){
    console.log(title2.value)
  }

  defineExpose({title2})
  
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