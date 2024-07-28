<!-- 结构 -->
<template>
    <!--  -->
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我</button>
    </div>
</template>


<!-- setup的简单写法 -->
<script lang="ts" setup name="Person">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

let sum = ref(0)
function add() {
    sum.value++
}

console.log("create...")

// 挂载前
onBeforeMount(() => {
    console.log("zi onBeforeMount")
})

// 挂载完成
onMounted(() => {
    console.log("zi onMounted")
})

// 更新前和更新后，只要触发操作，就会执行
// 更新前
onBeforeUpdate(() => {
    console.log("zi onBeforeUpdate")
})

// 更新完成
onUpdated(() => {
    console.log("zi onUpdated")
})

// 卸载前
onBeforeUnmount(() => {
    console.log("zi onBeforeUnmount")
})

// 卸载完成
onUnmounted(() => {
    console.log("zi onUmounted")
})

</script>

<!-- scoped: 局部样式,无脑加,只是针对当前的这个vue生效-->
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
</style>
