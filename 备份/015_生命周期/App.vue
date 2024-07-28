<!-- 结构 -->
<template>
    <!-- 根据条件渲染Person组件 -->
    <Person v-if="isShow" />
</template>
<!-- 
    父beforeMount ===> (子类挂载操作) ====> 父onMounted
-->
<!-- js or ts -->
<script lang="ts" setup name='App'>
import { onBeforeMount, onMounted, ref } from 'vue';
import Person from './components/Person.vue';

let isShow = ref(true);
console.log("fu init..")

onBeforeMount(() => {
    console.log("fu beforeMount..")
})

// 挂载完毕
onMounted(() => {
    console.log('fu onMounted...');
});
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
