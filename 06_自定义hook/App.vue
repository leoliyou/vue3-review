<template>
  <h2>x:{{ x }},y:{{ y }}</h2>
  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误信息是：{{ errorMsg }}</h3>
<ul v-else>
  <li>id:{{ result.id }}</li>
  <li>address:{{ result.address }}</li>
  <li>distance:{{ result.distance }}</li>
</ul>
<hr />
<ul v-for="item in result" :key="item.id">
  <li>id:{{item.id }}</li>
  <li>title:{{ item.title }}</li>
  <li>price:{{ item.price }}</li>
</ul>

</template>

<script lang="ts">
import useMousePosition from "./hook/useMousePosition";
import useRequest from "./hook/useRequest"
import { watch } from "vue";

interface AddressData {
  id: number;
  name: string;
  distance: string;
}
interface ProductsData {
  id: string;
  title: string;
  price: number;
}



  export default {
    setup() {
      const { x, y } = useMousePosition();
      // const {loading, result, errorMsg} = useRequest("/data/address.json")
      const {loading, result, errorMsg} = useRequest<ProductsData[]>("/data/products.json")

      watch(result, () => {
        if (result.value)
        { console.log(result.value.length) }

      })

      return {
        x,
        y,
        loading,
        result,
        errorMsg
      };
    },
  };
</script>
