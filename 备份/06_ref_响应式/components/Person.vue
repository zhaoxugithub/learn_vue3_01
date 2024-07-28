<!-- 结构 -->
<!-- 以下这些都是VUE2的语法 -->
<template>

    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ address }}</h2>
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
}

</script>


<!-- setup的简单写法 -->
<script lang="ts" setup>
/*

## 【ref 创建：基本类型的响应式数据】

- **作用：**定义响应式变量。
- **语法：**`let xxx = ref(初始值)`。
- **返回值：**一个`RefImpl`的实例对象，简称`ref对象`或`ref`，`ref`对象的`value`**属性是响应式的**。
- **注意点：**
  - `JS`中操作数据需要：`xxx.value`，但模板中不需要`.value`，直接使用即可。
  - 对于`let name = ref('张三')`来说，`name`不是响应式的，`name.value`是响应式的。

*/
import { ref } from 'vue';

// name 和 age 是一个refImpl 的实例对象，简称ref对象，他们的value属性都是响应式

let name = ref("zhaoxu")
let age = ref(20)

// tel 和 address就是一个普通的字符串，不是响应式的
let tel = 18901842235
let address = "上海"

console.log(1, name)
console.log(2, age)
console.log(3, tel)
console.log(4, address)



function changeName() {
    name.value = "lisi"
}

function changeAge() {
    age.value += 1
}

function showTel() {
    alert(tel)
}

</script>
