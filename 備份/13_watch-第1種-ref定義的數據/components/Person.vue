<template>
  <div class="person">
    <h2>當前總和：{{sum}}</h2>
    <button @click="changeSum">+1</button>
  </div>
</template>


<script lang="ts" setup name="Person">
  import {ref,watch} from 'vue';
  
  let sum = ref(0);
  function changeSum(){
    sum.value ++
  }
  // 監聽 (ref定義的數據)
  const x = watch(sum,(newValue,oldValue)=>{
    console.log('sum有更新值',newValue,oldValue)
    if(newValue>=10){
      console.log('已經解除了監聽')
      x(); //解除監聽
    }
  })

</script>



<style scoped>
.person {
  background-color: lightblue;
  box-shadow: 0 0 10px;
  padding: 20px;
}
</style>
