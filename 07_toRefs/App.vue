<template>
<h2>name:{{ name }}</h2>
<h2>age:{{ age }}</h2>
</template>

<script lang="ts">
import { reactive,toRefs} from 'vue'


export default {
  setup() {
    const user = reactive({
      name: 'xiao',
      age:16
    })
    const { name,age} = toRefs(user)
    // setInterval(() => {
    //   name.value += "++"
    //   age.value++
    // },1000)

    return {
    name,age
    }
  }

}
</script>
