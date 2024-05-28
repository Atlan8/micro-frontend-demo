<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handleToSub">前往子应用</button>
    <button @click="handleSetCookie">设置Cookie</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Cookies from "js-cookie";

const router = useRouter();

const handleToSub = () => {
  router.push("/sub-app");
  // window.location.href = "/sub-app";
};

const handleSetCookie = () => {
  Cookies.set("custom-data", "yoo");
};
</script>
