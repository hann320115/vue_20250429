

<template>
  <div class="box">
    <h1>Hello</h1>
    <Person/>
  </div>
</template>


<script lang="ts">
  import Person from './components/Person.vue';
  export default {
      name:'App', //組件名稱
      components:{Person} //註冊組件
  }
</script>


<style>
  .box{
      background-color: #c9c9c9;
      box-shadow: 0 0 10px;
      padding: 20px;
  }

</style>