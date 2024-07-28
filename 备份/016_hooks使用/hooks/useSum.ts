import { computed, onMounted, ref } from "vue";

export default function () {
    let bigSum = computed(() => {
        return sum.value * 10
    })

    let sum = ref(0);

    onMounted(() => {
        sum.value = 1;
    })


    function add() {
        sum.value++;
    }
    return { sum, add, bigSum }
}