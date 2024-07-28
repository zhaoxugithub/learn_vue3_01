<!-- 结构 -->
<!-- 以下这些都是VUE2的语法 -->
<template>
    <div class="person">
        <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <h2>测试：{{ obj.a.b.c.d }}</h2>
        <button @click="changeCarPrice">修改汽车价格</button>
        <button @click="changeFirstGame">修改第一游戏</button>
        <button @click="test">测试</button>
    </div>
</template>

<!-- js or ts -->
<script lang="ts">
/*
【reactive 创建：对象类型的响应式数据】
- **作用：**定义一个**响应式对象**（基本类型不要用它，要用`ref`，否则报错）
- **语法：**`let 响应式对象= reactive(源对象)`。
- **返回值：**一个`Proxy`的实例对象，简称：响应式对象。
- **注意点：**`reactive`定义的响应式数据是“深层次”的。
  如果reactive 如果重新分配一个对象就会丢失响应式
*/
export default {
    // 组件名称
    name: 'Person',
}
</script>
<!-- setup的简单写法 -->
<script lang="ts" setup>
import { reactive } from 'vue';
// 数据
let car = reactive({ brand: '奔驰', price: 100 })
let games = reactive([
    { id: 'aaa1', name: '英雄联盟' },
    { id: 'aaa2', name: '王者荣耀' },
    { id: 'aaa3', name: '原神' },
])
let obj = reactive({
    a: {
        b: {
            c: {
                d: 666
            }
        }
    }
})

function changeCarPrice() {
    car.price = 9999
}

function changeFirstGame() {
    games[0].name = '流星湖铁剑'
}

function test() {
    obj.a.b.c.d = 1000000
}
</script>
