<template>
<h2>计算属性和监视</h2>
<fieldset>
  <legend>姓名操作</legend>
  姓：<input type="text" placeholder="请输入姓氏" v-model="user.firstName" /> <br />
  名：<input type="text" placeholder="请输入名字" v-model="user.lastName"/>
</fieldset>

<fieldset>
  <legend>计算属性和监视演示</legend>
   姓名：<input type="text" placeholder="显示姓名"/><br />
   姓名：<input type="text" placeholder="显示姓名"/><br />
   姓名：<input type="text" placeholder="显示姓名"/><br />
</fieldset>
</template>

<script lang="ts">
  import { defineComponent, reactive,computed} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: '东',
      lastName: '西'
    })
    const com = computed(() => {
      return user.firstName + '_' + user.lastName
    })

    return {
      user,
      com
    }
  }

  }
)
</script>
