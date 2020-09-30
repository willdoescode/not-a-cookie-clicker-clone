<template>
  <div class="panel">
    <buy-slot
      name="Your Brain"
      alt-name="slowHelper"
      cost="20"
      speed="3"
      v-if="$store.state.slowHelper"
    />
    <buy-slot
      name="Your Brain On Drugs"
      alt-name="brainOnDrugs"
      cost="2000000"
      speed="-50"
      v-if="$store.state.brainOnDrugs"
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
