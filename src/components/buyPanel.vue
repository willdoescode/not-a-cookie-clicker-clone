<template>
  <div class="panel">
    <buy-slot
      name="Slow Helper"
      alt-name="slowHelper"
      cost="10" speed="1"
      v-if="$store.state.slowHelper"
    />
    <buy-slot
      name="Fast Helper"
      alt-name="fastHelper"
      cost="69"
      speed="0.5"
      v-if="$store.state.fastHelper"
    />
    <buy-slot
      name="Even Faster"
      alt-name="evenFaster"
      cost="200"
      speed="0.2"
      v-if="$store.state.evenFaster"
    />
  </div>
</template>

<script>
import buySlot from "@/components/buySlot";

export default {
  name: 'buyPanel',
  components: {
    buySlot
  },
  data() {
    return {
      wow: false
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
  overflow: auto;
}
</style>
