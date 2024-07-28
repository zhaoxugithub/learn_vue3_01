<!-- 结构 -->
<template>

    <div class="person">
        <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
        <button @click="changeBrand">修改汽车的品牌</button>
        <button @click="changePrice">修改汽车的价格</button>
        <button @click="changeCar1">修改汽车1</button>
        <hr>
        <h1>当前求和为:{{ sum }}</h1>
        <button @click="changeSum">点我sum+1</button>
    </div>

</template>

<!-- setup的简单写法 -->
<script lang="ts" setup name="Person">

import {reactive, ref} from 'vue'

// 数据
let car = reactive({brand: '奔驰', price: 100})
let sum = ref(0)

// 方法
function changeBrand() {
    car.brand = '宝马'
}

function changePrice() {
    car.price = 10
}

function changeCar1() {
    // 模拟服务端返回
    // 这么写页面不更新的
    // car = { brand: '奥拓', price: 1 }
    // 如果初始化数据使用reactive包裹
    // 使用reactive 更新返回数据,但是是没有办法更新的，需要用Object.assign() 方法
    // car = reactive({brand: '奥迪', price: 10000}) 这个是没有办法更新的
    // 这个Object.assign() 可以更新数据
    Object.assign(car, {brand: '奥迪', price: 10000})
}

function changeSum() {
    sum.value += 1
}

</script>
