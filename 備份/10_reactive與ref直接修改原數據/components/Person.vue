<template>
  <div class="person">
    <h2>一輛{{car.brand}}車，價值:{{ car.price }}萬</h2>
    <button @click="changePrice">修改器車的價錢</button>
    <button @click="changeCart">修改汽車</button>
    <br>
    <h2>遊戲列表</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFristGame">修改第一個遊戲的名稱</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { ref } from 'vue';
import { reactive } from 'vue';

  let car = reactive({brand:'寶馬',price:100})
  let games = ref([
    { id:'15df15641dsf65', name:'LOL'},
    { id:'15df115fds45fd', name:'圓神'},
    { id:'15dft78r4yhr65', name:'三國無雙'}
  ]);
  function changePrice(){
    car.price +=10 ;
  }
  function changeFristGame(){
    games.value = [
    { id:'15df15641dsf65', name:'刺客教條'},
    { id:'15df115fds45fd', name:'曼威蜘蛛俠'},
    { id:'15dft78r4yhr65', name:'薩爾達'}
  ];
  }
  function changeCart(){
    // car = {brand:'ToYoTa',price:100} 錯誤的
    Object.assign(car,{brand:'ToYoTa',price:100})
  }

</script>




<style scoped>
.person {
  background-color: lightblue;
  box-shadow: 0 0 10px;
  padding: 20px;
}
</style>
