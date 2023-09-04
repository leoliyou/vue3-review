<template>
  <h2>Child</h2>
  <h3>msg:{{ msg }}</h3>
  <!-- <h3>count:{{ count }}</h3> -->
  <!-- <h3>msg2:{{ msg2 }}</h3> -->
  <!-- <h3>msg2:{{ $attrs.msg2 }}</h3> -->
  <button @click="$emitXxx">分发事件</button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Child",
    props: ["msg"],
    emits: ["xxx"],
    setup(props, { attrs, slots, emit }) {
      console.log("setup执行了", this);
      const showMsg = () => {
        console.log("setup中的showMsg方法");
      };

      function emitXxx() {
        emit("xxx", "++");
      }
      return {
        showMsg,
        emitXxx,
      };
      //   console.log(props.msg,attrs.msg2,slots,emit)
    },
    //  data() {
    //    return {
    //         count:10
    //       }
    //   }
  });
</script>
