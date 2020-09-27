<template>
  <div @click="subtractMoney" class="buySlot">
    <div class="texts" :class="cost > this.$store.state.points ? 'disabled' : 'enabled'">
      <h1 class="name">{{name}}</h1>
      <h3 class="cost">${{cost}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buySlot',
  props: {
    name: String,
    cost: Number
  },
  methods: {
    subtractMoney() {
      this.$store.commit('decrement', {
        amount: this.cost
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.buySlot {
  width: 100%;
  border: 1px solid whitesmoke;
  border-radius: 15vh;
  background-image: linear-gradient(to right, red, blue);
  .texts {
    color: whitesmoke;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.disabled {
  text-decoration: line-through;
}
</style>
