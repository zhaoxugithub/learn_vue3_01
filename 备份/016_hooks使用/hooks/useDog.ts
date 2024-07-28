import axios from "axios"
import { onMounted, reactive } from "vue"

export default function () {

    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_894.jpg'
    ])

    onMounted(() => {
        getDog()
    })

    // function getDog() {
    //     axios.get("https://dog.ceo/api/breed/pembroke/images/random")
    //         .then(
    //             Response => {
    //                 dogList.push(Response.data.message)
    //             },
    //             error => { console.error(error) }
    //         )
    // }
    // 优雅的写法
    async function getDog() {
        try {
            let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            console.log(result.data.message)
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    return { dogList, getDog }
}