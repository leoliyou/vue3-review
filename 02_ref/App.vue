<template>
<h3>{{count}}</h3>
<button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'App',
  setup() {
    const count=ref(0)
    function updateCount() {
      count.value++
    }
    return {
      count,
      updateCount

    }
  }
});
</script>


