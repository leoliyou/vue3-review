<template>
<h2>计算属性和监视</h2>
<fieldset>
  <legend>姓名操作</legend>
  姓：<input type="text" placeholder="请输入姓氏" v-model="user.firstName" /> <br />
  名：<input type="text" placeholder="请输入名字" v-model="user.lastName"/>
</fieldset>

<fieldset>
  <legend>计算属性和监视演示</legend>
   姓名：<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
   姓名：<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
   姓名：<input type="text" placeholder="显示姓名" v-model="fullName3"/><br />
</fieldset>
</template>

<script lang="ts">
  import { defineComponent, reactive,computed,ref,watch,watchEffect} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: '东',
      lastName: '西'
    })
    const fullName1 = computed(() => {
      return user.firstName + '-' + user.lastName
    })
    const fullName2 = computed({
      get() {
        return user.firstName + '-' + user.lastName
      },
      set(val:string) {
        const names = val.split('-')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })
    const fullName3= ref('')
    // watch(user, ({ firstName, lastName }) => {
    //   fullName3.value = firstName + ' ' + lastName
    // }, { immediate: true, deep: true })

    watchEffect(() => {
       fullName3.value= user.firstName + '-' + user.lastName
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }

  }
)
</script>
