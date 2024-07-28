<!-- 结构 -->
<template>
    <div class="app">
        <h1>学习VUE3</h1>
        <!-- 使用自己写的组件 -->
        <PersonWatch1 />
        <PersonWatch2 />
        <PersonWatch3 />
        <PersonWatch4 />
        <PersonWatch5 />
    </div>
</template>

<!-- js or ts -->
<script lang="ts">
import PersonWatch1 from './components/PersonWatch1.vue';
import PersonWatch2 from './components/PersonWatch2.vue';
import PersonWatch3 from './components/PersonWatch3.vue';
import PersonWatch4 from './components/PersonWatch4.vue';
import PersonWatch5 from './components/PersonWatch5.vue';

export default {
    // 组件名称
    name: 'App',
    components: { PersonWatch1, PersonWatch2, PersonWatch3, PersonWatch4, PersonWatch5 }
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
