<template>
  <div class="person">
    <h4>{{ sum }}</h4>
    <button @click="add">點我+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">狗+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import useDog from '@/hooks/useDog';
  import useSum from '@/hooks/useSun';
  const {dogList,getDog} = useDog();
  const {sum,add} = useSum();
  

  
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
  img{
    height: 100px;
    margin-right: 10px;
  }
</style>