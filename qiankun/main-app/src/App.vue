<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div id="container"></div>
    <router-view />
  </div>
</template>

<script setup>
import { initGlobalState } from 'qiankun';
import { onMounted } from 'vue';

const actions = initGlobalState({'store-sub-app': ''})

onMounted(() => {
  actions.onGlobalStateChange((state, prev) => {
    console.log('=========== main app =========',state, prev)
  })
})


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
