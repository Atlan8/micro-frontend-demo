<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <span>来自子应用的变量：</span>
      <span>{{ subCounter }}</span>
    </div>
    <div class="micro-app">
      <iframe src="http://127.0.0.1:5500/iframe/sub-app/index.html" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main-About',
  data() {
    return {
      subCounter: 0
    }
  },
  mounted() {
    window.addEventListener('message', (val) => {
      const origin = val.origin;
      if (origin !== "http://127.0.0.1:5500") return;
      console.log('来自子应用的消息：', val)
    }, false)
  },
  beforeDestroy() {
    window.removeEventListener('message', () => {})
  },
}
</script>

<style lang="scss" scoped>
.micro-app {
  border: 1px solid #000;
}
</style>