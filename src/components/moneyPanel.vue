<template>
  <div class="panel">
    <h1 class="money-text" :style="{ transform: natural, color: colors }">${{$store.state.points}}</h1>
    <div class="money-container">
      <img class="money" :style="{ transform: natural }" @click="$store.dispatch('increment')" src='../assets/PngItem_560827.png'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  data() {
    return {
      natural: 'scale(1)',
      colors: 'whitesmoke'
    }
  },
  computed: {
    points() {
      return this.$store.state.points
    }
  },
  watch: {
    points() {
      this.natural = 'scale(1.1)'
      this.colors = 'gold'
      setTimeout(() => {
        this.natural = 'scale(1)'
        this.colors = 'whitesmoke'
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(to bottom, #379683, #05386b);
  border: 1px solid whitesmoke;
  .money-text {
    color: whitesmoke;
    margin-top: 5px;
    transition: 0.2s;
  }
  .money-container {
    display: flex;
    align-items: center;
    margin-top: 15vh;
    justify-content: center;
    img {
      width: 20vw;
      transition: 0.1s;
      &:hover {
        cursor: pointer;
      }
      &:active {
        transform: scale(0.8) rotate(20deg);
      }
    }
  }
}
</style>
