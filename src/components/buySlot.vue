<template>
  <div @click="subtractMoney" :class="cost > this.$store.state.points ? 'slot-disabled buySlot' : 'slot-enabled buySlot'">
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
    altName: String,
    cost: Number
  },
  methods: {
    subtractMoney() {
      if (this.cost <= this.$store.state.points) {
        this.$store.commit('decrement', {
          amount: this.cost,
          name: this.altName
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.buySlot {
  width: 100%;
  border: 1px solid whitesmoke;
  .texts {
    color: whitesmoke;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
.slot-disabled {
  background-color: gray;
  cursor: default;
}
.slot-enabled {
  background-color: #39a0ca;
  cursor: pointer;
}
.disabled {
  text-decoration: line-through;
}
</style>
