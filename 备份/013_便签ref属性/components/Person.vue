<!-- 结构 -->
<template>

    <div class="person">
        <h1 ref="title1">尚硅谷</h1>
        <h2 ref="title2">前端</h2>
        <h3 ref="title3">Vue</h3>
        <h4 id="title4">id_title4</h4>
    </div>

    <input type="text" ref="inpt"> <br><br>
    <button @click="showLog"> 点我打印内容 </button>

</template>

<!-- setup的简单写法 -->
<script lang="ts" setup name="Person">

import { defineExpose, ref } from 'vue';

let title1 = ref()
let title2 = ref()
let title3 = ref()


function showLog() {
    // 通过id获取元素DOM
    const t1 = document.getElementById('title4')
    // 打印内容
    // console.log((t1 as HTMLElement).innerText)
    // console.log((<HTMLElement>t1).innerText)
    // console.log(t1?.innerText)
    console.log(t1)
    /** */
    // 通过ref获取基本元素的dom
    console.log(title1.value)
    console.log(title2.value)
    console.log(title3.value)

    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    // 暴露出给父亲组件
    defineExpose({ a, b, c })
}
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
