<!-- 结构 -->
<template>

    <div class="person">
        <h2>sum:{{ sum }}, 放大:{{ bigSum }}</h2>
        <button @click="add">sum+1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index">
        <hr>
        <button @click="getDog">getDog</button>
    </div>

</template>

<!-- setup的简单写法 -->
<script lang="ts" setup name="Person">
//

// hooks 模块开发
// 将同一个功能的代码(变量和方法)封装到一个模块中,然后在组件中引入使用




import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

const { sum, add, bigSum } = useSum()
const { dogList, getDog } = useDog()
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

img {
    height: 100px;
    margin: 5px;
}
</style>
