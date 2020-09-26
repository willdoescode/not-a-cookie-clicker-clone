<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="$store.dispatch('increment')">Hello</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
