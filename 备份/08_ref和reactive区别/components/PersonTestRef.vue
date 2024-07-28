<!-- 结构 -->
<template>
    <div class="personTestRef">
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
<script lang="ts" setup name="PersonTestRef">

import {ref} from 'vue'

// 数据
let car = ref({brand: '奔驰', price: 100})
let sum = ref(0)

// 方法
function changeBrand() {
    // 必须要加上value
    car.value.brand = '宝马'
}

function changePrice() {
    car.value.price = 10
}

function changeCar1() {
    // 模拟服务端返回
    car.value = {brand: 'byd', price: 100000000000000000}
}

function changeSum() {
    sum.value += 1
}

</script>
