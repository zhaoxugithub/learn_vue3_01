<!-- 结构 -->
<template>

    <div class="person">
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
        <button @click="changeName"> 修改名字</button>
        <button @click="changeAge"> 修改年龄</button>
        <button @click="changeNameRefs"> 修改名字(toRefs)</button>
        <button @click="changeAgeRefs"> 修改年龄(toRefs)</button>
    </div>

</template>

<!-- setup的简单写法 -->
<script lang="ts" setup name="Person">
import {reactive, toRefs, toRef} from "vue";

// 定义一个响应式对象数据
let person = reactive({
    name: 'zhangsan',
    age: 20
})

// --------------------------------------------

// // 返回的不是一个响应式数据,不是一个引用类型
// let tempPerson = person;
// console.log(tempPerson)
//
// // 返回的不是一个响应式数据,不是一个引用类型
// let {name, age} = person
// console.log(name, age)
//
//
// //  并不会修改person里面的name属性
// function changeName() {
//     name += '~'
//     console.log(name)
// }
//
// // 并不会修改person里面的age属性
// function changeAge() {
//     age += 1;
//     console.log(age)
// }

// ----------------------------------------------

// 这里定义的名称要和对象里面的名称一样, toRef 将person里面的属性字段转成了引用类型
let {name, age} = toRefs(person)
let aaaa = toRef(person, 'age')

console.log(name)
console.log(age)
console.log(aaaa)


// 这里的修改会影响到person里面的值
function changeNameRefs() {
    name.value += '~'
    console.log(name.value, person.name)
}

function changeAgeRefs() {
    age.value += 1
    console.log(age.value, person.age)
}
</script>


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
