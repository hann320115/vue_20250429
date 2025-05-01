<template>
  <div class="person">
    <!-- v-model 寫法 -->
    <!-- 缺點：寫法看上去複雜混亂 -->
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{ firstName }}{{ lastName }}</span>
    <hr>
    <!-- computed 計算屬性 -->
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{ fullName }}</span>
  </div>
</template>


<script lang="ts" setup name="Person">
  import {ref,computed} from 'vue';
  let firstName = ref("老");
  let lastName = ref("李");
  // ----- computed 計算屬性 (唯讀不可修改) -----
  // 缺點：唯讀不可修改(可以修改firstName、lastName來變更fullName，但不可直接fullName=...)
  let fullName = computed(()=>{
    return firstName.value + lastName.value
  })
</script>



<style scoped>
.person {
  background-color: lightblue;
  box-shadow: 0 0 10px;
  padding: 20px;
}
</style>
