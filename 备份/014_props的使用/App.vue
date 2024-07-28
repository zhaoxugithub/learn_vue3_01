<!-- 结构 -->
<template>
    <div class="app">
        <h1>学习VUE3</h1>
        <!-- 务必看懂下面这一行代码
         
        : 变量 ==> 代表动态绑定,用于计算
        -->
        <h2 a="1+1" :b="1 + 1" c="x" :d="x" ref="qwe">测试</h2>
    </div>
    <!-- 给 person 这个组件传入了一个 list 和 x变量-->
    <Person :list="persons" :x />
</template>

<!-- js or ts -->
<script lang="ts" setup name='App'>
import { reactive } from 'vue';
import { type Persons, type PersonInter } from '@/types';
import Person from './components/Person.vue';
let x = 100
let persons = reactive([
    { id: 1, name: '张三', age: 18 },
    { id: 2, name: '李四', age: 20 },
    { id: 3, name: '王五', age: 22 },
]);
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
