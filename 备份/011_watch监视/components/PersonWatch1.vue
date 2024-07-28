<!-- 结构 -->
<template>
    <div class="personWatch1">
        <h2>情况一：监视【ref】定义的【基本类型】数据</h2>
        <p>sum: {{ sum }}</p>
        <button @click="add">add</button>
    </div>
</template>


<!-- 

- 作用：监视数据的变化（和`Vue2`中的`watch`作用一致）
- 特点：`Vue3`中的`watch`只能监视以下**四种数据**：

> 1. `ref`定义的数据。
> 2. `reactive`定义的数据。
> 3. 函数返回一个值（`getter`函数）。
> 4. 一个包含上述内容的数组。

-->


<!-- setup的简单写法 -->
<script lang="ts" setup name="PersonWatch1">

import { ref, watch } from 'vue';

// 数据
let sum = ref(0)

// 方法
function add() {
    sum.value += 1
}

// 监视 watch
// watch("监视的对象", "回调函数")
// 当监视的对象ref()修饰的基本数据，发生变化时，回调函数会被调用
const x = watch(sum, (newVal, oldVal) => {
    console.log("sum变化了:", newVal, oldVal)
    // 如果当满足一个条件就停止监视
    if (newVal >= 5) {
        x()
    }
})

console.log(x)
/*

() => {
    effect2.stop();
    if (scope) {
      remove(scope.effects, effect2);
    }
  }

这里的x是一个函数，调用x()就会停止监视

*/


</script>


<style scoped>
.personWatch1 {
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
