<template>
  <div id="app">
    <money-panel class="panel" />
  </div>
</template>

<script>
import moneyPanel from "@/components/moneyPanel";

export default {
  name: 'App',
  components: {
    moneyPanel
  },
  mounted() {
    this.$store.dispatch('setStorage')
  },
  computed: {
    points() {
      return this.$store.state.points
    }
  },
  watch: {
    points(after) {
      document.title = `$${after} / Not A Cookie Clicker Clone`
    }
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
