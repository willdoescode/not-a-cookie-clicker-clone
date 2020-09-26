<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="$store.dispatch('increment')">Click me</button>
    <button @click="$store.dispatch('resetAll')">Reset Game</button>
    <h1>{{$store.state.points}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.$store.dispatch('setStorage')
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
