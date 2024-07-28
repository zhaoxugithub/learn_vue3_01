<!-- 结构 -->
<template>
    <div class="personWatch2">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>
<!-- 
监视`ref`定义的【对象类型】数据：直接写数据名，监视的是对象的【地址值】，若想监视对象内部的数据，要手动开启深度监视。

> 注意：
>
> * 若修改的是`ref`定义的对象中的属性，`newValue` 和 `oldValue` 都是新值，因为它们是同一个对象。
>
> * 若修改整个`ref`定义的对象，`newValue` 是新值， `oldValue` 是旧值，因为不是同一个对象了。


-->

<!-- setup的简单写法 -->
<script lang="ts" setup name="PersonWatch2">

import { ref, watch } from 'vue';
// 数据
let person = ref({
    name: '张三',
    age: 18
})

// 方法
function changeAge() {
    person.value.age += 1
}

function changeName() {
    person.value.name += '~'
}

function changePerson() {
    person.value = {
        name: '李四',
        age: 20
    }
}


/* // 这种情况只有在person.value整个对象发生变化时才会触发
watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
}) */


// 这种情况只要person对象里面属性有变化就会触发
// 需要加上这个deep:true
// watch(person, (newValue, oldValue) => {
//     console.log('person变化了', newValue, oldValue)
// }, { deep: true, immediate: true })

//上面的这个也可以写成如下这样：
watch(() => person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
}, { deep: true, immediate: true })


/*

    监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....） 

*/
</script>


<style scoped>
.personWatch2 {
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
