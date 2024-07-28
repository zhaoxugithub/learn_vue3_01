<!-- 结构 -->
<template>
  <div class="app">
    <h1>学习VUE3</h1>
    <!-- 使用自己写的组件 -->
    <Person />
    <h1>测试TestRef</h1>
    <PersonTestRef />
  </div>
</template>

<!-- js or ts -->
<script lang="ts">
import Person from './components/Person.vue'
import PersonTestRef from './components/PersonTestRef.vue'
export default {
  // 组件名称
  name: 'App',
  components: { Person, PersonTestRef }
}
</script>

<!-- 样式 -->
<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
