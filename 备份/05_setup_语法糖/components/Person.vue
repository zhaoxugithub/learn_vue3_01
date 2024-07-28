<!-- 结构 -->
<!-- 以下这些都是VUE2的语法 -->
<template>

    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">年龄+1</button>
        <button @click="showTel">点我查看联系方式</button>
    </div>

</template>

<!-- js or ts -->
<script lang="ts">

export default {
    // 组件名称
    name: 'Person',

    // setup() {

    //     console.log("setup")
    //     let name = "zhaoxu"
    //     let age = 20
    //     let tel = 18901842235

    //     function changeName() {
    //         name = "lisi"
    //     }

    //     function changeAge() {
    //         age += 1
    //     }

    //     function showTel() {
    //         alert(tel)
    //     }

    //     // 交出去，让结构中的变量知道
    //     return { name, age, changeName, changeAge, showTel }
    // }
    // setup 可以有一种比较简单的写法,直接在标签里面的写
}

</script>


<!-- setup的简单写法 -->
<script lang="ts" setup>
let name = "zhaoxu"
let age = 20
let tel = 18901842235

function changeName() {
    name = "lisi"
}

function changeAge() {
    age += 1
}

function showTel() {
    alert(tel)
}

</script>
