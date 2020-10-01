<template>
  <div class="panel">
    <h1 class="money-text" :style="{ transform: natural, color: colors }">${{$store.state.points}}</h1>
    <div class="money-container">
      <img alt="gold" class="money" :style="{ transform: natural }" @click="increment" src='../assets/clicker_image.png'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  data() {
    return {
      natural: 'scale(1)',
      colors: 'whitesmoke',
      lastClick: Number,
      clicks: [],
      count: 0
    }
  },
  computed: {
    points() {
      return this.$store.state.points
    }
  },
  methods: {
    increment() {
      this.clicks.push(new Date().getTime() - this.lastClick)
      this.lastClick = new Date().getTime()
      if (this.clicks.length >= 5) {
        let known = []
        this.clicks.shift()
        for (let item of this.clicks) {
          if (item in known || item + 1 in known || item - 1 in known || item + 2 in known || item - 2 in known || item + 3 in known || item - 3 in known) {
            known[item]++
          } else {
            known.push(item)
          }
        }
        // console.log(known.length, known) debugging code
        if (known.length <= 3) {
          this.$store.state.points = 0
          this.$store.state.slowHelper = true
          this.$store.state.brainOnDrugs = true
          this.clicks = []
          alert('stop auto clicking')
        } else {
          this.clicks = []
        }
        for (let i of known) {
          if (i < 10) {
            this.count++
          }
        }
        if (this.count >= 2) {
          this.$store.state.points = 0
          this.$store.state.slowHelper = true
          this.$store.state.brainOnDrugs = true
          this.clicks = []
          this.count = 0
          alert('stop auto clicking')
        }
      }
      this.$store.dispatch('increment')
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
  width: 85vw;
  background-image: linear-gradient(to bottom, #379683, #05386b);
  border: 1px solid whitesmoke;
  .money-text {
    color: whitesmoke;
    margin-top: 5px;
    transition: 0.2s;
    font-size: 3em;
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
