<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handleToSub">前往子应用</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()

const handleToSub = () => {
  router.push('/sub-app')
}
</script>