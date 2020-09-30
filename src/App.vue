<template>
  <div id="app" @contextmenu="disableRightClick">
    <money-panel class="panel" />
    <buy-panel class="panel" />
  </div>
</template>

<script>
import moneyPanel from "@/components/moneyPanel";
import buyPanel from "@/components/buyPanel";

export default {
  name: 'App',
  components: {
    moneyPanel,
    buyPanel
  },
  mounted() {
    this.$store.dispatch('setStorage')
  },
  computed: {
    points() {
      return this.$store.state.points
    }
  },
  methods: {
    disableRightClick(e) {
      e.preventDefault()
    }
  },
  watch: {
    points(after) {
      if (after < 2) {
        document.title = `${after} dollar - Not A Cookie Clicker Clone`
      } else {
        document.title = `${after} dollars - Not A Cookie Clicker Clone`
      }
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  font-family: 'Merriweather', Georgia, serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  .panel {
    flex-grow: 1;
    text-align: center;
  }
}
</style>
