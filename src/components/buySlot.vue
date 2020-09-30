<template>
<!--  Handles the clicks only if enabled-->
  <div @click="subtractMoney" :class="cost > this.$store.state.points ? 'slot-disabled buySlot' : 'slot-enabled buySlot'">
    <div :class="cost > this.$store.state.points ? 'disabled texts' : 'enabled texts'">
<!--      changes color of text based on if the slot is enabled or not-->
      <h1 class="name">{{name}}</h1>
<!--      Display the name-->
      <h3 class="cost">${{cost}}</h3>
<!--      Display the cost-->
      <h3 class="speed">Speed: 1 click per {{ ((speed * 10) / 10)}}s</h3>
<!--      Display the speed-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'buySlot',
  props: {
    // pass in props from the previous component
    name: String,
    altName: String,
    cost: Number,
    speed: Number
  },
  data() {
    return {
      interval: null
    }
  },
  methods: {
    subtractMoney() {
      // Check if the user has enough money to purchase the slot
      if (this.cost <= this.$store.state.points) {
        // uses decrement function in the global store
        this.$store.commit('decrement', {
          amount: this.cost,
          name: this.altName
        })
        // Sets an interval in the global store with the speed passed down as a prop
        this.$store.dispatch('interval', {
          speed: this.speed
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  font-weight: lighter;
}
.buySlot {
  border: 1px solid whitesmoke;
  padding: 5px;
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
  .texts {
    color: darkgrey;
  }
}
.slot-enabled {
  background-color: goldenrod;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .texts {
    font-weight: bold;
    color: whitesmoke;
  }
}
</style>
