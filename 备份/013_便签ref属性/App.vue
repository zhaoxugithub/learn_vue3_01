<!-- 结构 -->
<template>
    <div class="app">
        <h1>学习VUE3</h1>
        <h2 ref="title2">你好</h2>
        <!-- 使用自己写的组件 -->
        <button @click="showLog">点我输出</button>
        <Person ref="ren" />
    </div>
</template>

<!-- js or ts -->
<script lang="ts" setup name='App'>
import { ref } from 'vue';
import Person from './components/Person.vue';

let title2 = ref();
let ren = ref()

function showLog() {
    console.log(title2.value);
    // 输出的自定义组件的一个实例
    console.log(ren);
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
