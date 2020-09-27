<template>
  <div class="panel">
    <button @click="$store.dispatch('resetAll')">Reset Game</button>
    <h1>${{$store.state.points}}</h1>
    <div class="money-container">
      <img class="money" @click="$store.dispatch('increment')" src='../assets/money-bag-png-19720.png'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  computed: {
    points() {
      return this.$store.state.points
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(to bottom, darkgreen, lightgreen);
  border: 1px solid black;
  .money-container {
    display: flex;
    align-items: center;
    margin-top: 20vh;
    justify-content: center;
    img {
      width: 20vw;
      transition: 0.3s;
      &:active {
        transform: scale(0.8);
      }
    }
  }
}
</style>
