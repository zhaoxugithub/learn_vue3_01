<!-- 结构 -->
<template>
    <!-- 根据条件渲染Person组件 -->
    <Person />
</template>
<!-- 
    父beforeMount ===> (子类挂载操作) ====> 父onMounted
-->
<!-- js or ts -->
<script lang="ts" setup name='App'>
import Person from './components/Person.vue';
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
