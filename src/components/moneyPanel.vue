<template>
  <div class="panel">
    <button @click="$store.dispatch('resetAll')">Reset Game</button>
    <h1 class="money-text">${{$store.state.points}}</h1>
    <div class="money-container">
      <img class="money" @click="$store.dispatch('increment')" src='../assets/money-bag-png-19720.png'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(to bottom, #2d545e, #12343b);
  border: 1px solid black;
  .money-text {
    color: whitesmoke;
  }
  .money-container {
    display: flex;
    align-items: center;
    margin-top: 17vh;
    justify-content: center;
    img {
      width: 20vw;
      transition: 0.3s;
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
