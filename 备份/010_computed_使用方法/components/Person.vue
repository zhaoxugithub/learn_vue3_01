<!-- 结构 -->
<template>
    <div class="person">
        <!-- v-model: 双向绑定, 浏览器输入,会影响到这个值 -->
        <!-- v-model: 双向绑定, 这个值的变动也会 影响浏览器输入 -->
        姓：<input type="text" v-model="firstName"> <br>
        名：<input type="text" v-model="lastName"> <br>
        <button @click="changeFullName">将全名改成li-si</button> <br>

        <!-- 虽然这里用了很多次，但是实际上只会计算一次 -->
        全名：<span>{{ fullName }}</span> <br>
        全名：<span>{{ fullName }}</span> <br>
        全名：<span>{{ fullName }}</span> <br>
        全名：<span>{{ fullName }}</span> <br>
        全名：<span>{{ fullName }}</span> <br>
        全名：<span>{{ fullName }}</span> <br>
    </div>
</template>

<!-- setup的简单写法 -->
<script lang="ts" setup name="Person">
import { computed, ref } from 'vue';

let firstName = ref('zhang')
let lastName = ref('san')

// // fullName 是一个被计算出来的ref，且是只读的，所以不可以被更改
// let fullName = computed(() => {
//     console.log(1)
//     return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
// })

let fullName = computed({
    get() {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    set(val) {
        const [str1, str2] = val.split('-')
        firstName.value = str1
        lastName.value = str2
    }
})


// 打印出来的这个是一个Ref
console.log(fullName)



function changeFullName() {
    // 我尝试去更改fullName的值,结果发现不能被修改
    // fullName.value = 'li-si'
    // 如果我想要修改这个computed出来的字段，应该做怎么做？？
    // 需要在computed 里面加上set,get
    fullName.value = 'li-si'
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
