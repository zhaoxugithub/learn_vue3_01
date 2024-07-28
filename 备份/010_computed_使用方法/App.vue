<!-- 结构 -->
<template>
    <div class="app">
        <h1>学习VUE3</h1>
        <!-- 使用自己写的组件 -->
        <Person/>
    </div>
</template>

<!-- js or ts -->
<script lang="ts">
import Person from './components/Person.vue'

export default {
    // 组件名称
    name: 'App',
    components: {Person}
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
