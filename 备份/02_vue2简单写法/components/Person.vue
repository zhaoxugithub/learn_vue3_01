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
    data() {
        return {
            name: '赵旭',
            age: 19,
            tel: '18901842235'
        }
    },

    methods: {
        changeName() {
            this.name = 'zhang-san'
        },
        changeAge() {
            this.age += 1
            console.log(this.age)
        },
        showTel() {
            alert(this.tel)
        }
    },
}

</script>