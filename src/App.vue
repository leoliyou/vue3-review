<template>
  <h2>parent</h2>
  <h2>msg:{{ msg }}</h2>
  <button @click="msg+= '==='">更新数据</button>
  <hr />
  <Child :msg="msg"  msg2="zhenxiang"  @xxx="xxx"/>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import Child from "./components/Child.vue";
  export default defineComponent({
    name: "App",
    components: {
      Child
    },
    setup() {
      const msg = ref("hahhahahah");
      function xxx(txt:string) {
      msg.value+=txt
      }
      return {
        msg,
        xxx
      };
    },
  });
</script>
