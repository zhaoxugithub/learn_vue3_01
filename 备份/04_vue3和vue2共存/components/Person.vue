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

    <div>
        <h1>a:{{ a }}</h1>
        <h1>c:{{ c }}</h1>
        <button @click="b">点我</button>
    </div>

</template>

<!-- js or ts -->
<script lang="ts">

export default {
    // 组件名称
    name: 'Person',

    beforeCreate() {
        console.log("beforeCreate")
    },


    data() {
        return {
            a: 100,
            // data 方法是可以读取setup里面的数据，但是必须要加上this
            c: this.name,
        }
    },

    methods: {
        b() {
            console.log("method.b")
        }
    },


    // 执行顺序 setup -> beforeCreate
    //         setup -> data,method
    // vue2 中的 data,methods 可以和vue3 中的setup 共存
     
    setup() {

        console.log("setup")
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

        // 交出去，让结构中的变量知道
        return { name, age, changeName, changeAge, showTel }

    }

}

</script>