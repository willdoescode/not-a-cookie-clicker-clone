<template>
  <div id="app">
    <Panel class="panel" />
    <Panel class="panel" />
    <Panel class="panel" />
  </div>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  name: 'App',
  components: {
    Panel
  },
  mounted() {
    this.$store.dispatch('setStorage')
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  .panel {
    flex-grow: 1;
    text-align: center;
  }
}
</style>
