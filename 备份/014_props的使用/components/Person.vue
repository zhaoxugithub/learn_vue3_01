<!-- 结构 -->
<template>
    <!--  -->
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.id">
                item.id: {{ item.id }} - item.name: {{ item.name }} - item.age: {{ item.age }}
            </li>
        </ul>
    </div>
</template>

<!-- setup的简单写法 -->
<script lang="ts" setup name="Person">
import type { Persons } from '@/types';
import { defineProps } from 'vue';
// 第一种写法: 仅仅接收
// const props = defineProps(['list', 'x'])
// console.log(props.list)
// console.log(props.x)

// // 第二种写法: 接收+限制类型
// let pp = defineProps<{ list: Persons, x: Number }>()
// console.log(pp.list)
// console.log(pp.x)


// // 第三种写法：接收 + 限制类型 + 指定默认值 + 限制必要性
let props = withDefaults(defineProps<{ list?: Persons }>(), {
    list: () => [{ id: 'asdasg01', name: '小猪佩奇', age: 18 }]
    , x: 1
})
console.log(props.list)
console.log(props.x)

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
