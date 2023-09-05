import {ref } from "vue";
import axios from "axios";

export default function useUrlLoader<T>(url) {
  const loading = ref(true);
  const result = ref<T | null>(null);
  const errorMsg = ref("");

  axios
    .get(url)
    .then((response) => {
      loading.value = false;
      result.value = response.data;
    })
    .catch((error) => {
      loading.value = false;
      errorMsg.value = error.message || " unknown error";
    });

  return {
    loading,
    result,
    errorMsg,
  };
}