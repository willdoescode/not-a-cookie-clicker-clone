<template>
<!--  Disable right clicking on app to help prevent some people from accessing developer console-->
  <div id="app" @contextmenu="disableRightClick">
<!--    Add the two main panels-->
    <money-panel class="panel" />
    <buy-panel class="panel" />
  </div>
</template>

<script>
// Import the main panels
import moneyPanel from "@/components/moneyPanel";
import buyPanel from "@/components/buyPanel";

export default {
  name: 'App',
  components: {
    moneyPanel,
    buyPanel
  },
  // On mount get the values from localStorage
  mounted() {
    this.$store.dispatch('setStorage')
  },
  computed: {
    // Set up a points function so I can use watch
    points() {
      return this.$store.state.points
    }
  },
  // Prevent default right click
  methods: {
    disableRightClick(e) {
      e.preventDefault()
    }
  },
  watch: {
    // Set the tab title based on the point value
    points(after) {
      if (after < 2) {
        // Grammar
        document.title = `${after} dollar - Not A Cookie Clicker Clone`
      } else {
        document.title = `${after} dollars - Not A Cookie Clicker Clone`
      }
    }
  }
}
</script>

<!-- I like scss way more than normal css-->
<style lang="scss">
* {
  margin: 0;
  // Got to have a nice font family that's totally not pulled from the cookie clicker website
  font-family: 'Merriweather', Georgia, serif;
}

#app {
  // Make font smooooooooth
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // Everything can be solved with display flex
  display: flex;
  .panel {
    // Flex grow 1 solves all of my problems ever
    flex-grow: 1;
    text-align: center;
  }
}
</style>
