<template>
  <div>名字{{ user.name }}</div>
  <div>年龄：{{ user.age }}</div>
  <div>媳妇：{{ user.wife.age }}</div>
  <div>性别：{{ user.gender}}</div>
  <div>车：{{ user.car }}</div>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
  import { defineComponent, reactive } from "vue";

  export default defineComponent({
    name: "App",
    setup() {
      let obj = {
        name: "tom",
        age: 23,
        wife: {
          name: "xiaohong",
          age: 25,
        },
        car: ["masha", "jorda", "haha"],
      }

      const user = reactive<any>(obj)
      console.log(user)

      const updateUser = () => {
        user.name = "row";
        user.age = 30;
        user.wife.age = 31;
        user.car[0] = "hleee";
        user.gender = 'male'
        delete user.age

        //   user.name+= '++'
        //   user.age += 2
        //   user.wife.age += ++
        //   user.car[0]= 'jjjjj'
      };

      return {
        user,
        updateUser,
      };
    },
  });
</script>
