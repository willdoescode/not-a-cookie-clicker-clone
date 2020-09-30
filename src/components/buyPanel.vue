<template>
  <div class="panel">
<!--    Add each buy slot with their respective speeds, costs, and global state-->
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
// Add the component for each particular buy slot
import buySlot from "@/components/buySlot";

export default {
  name: 'buyPanel',
  components: {
    buySlot
  }
}
</script>

<style lang="scss" scoped>
.panel {
  // When in doubt; display: flex
  display: flex;
  flex-direction: column;
  height: 100vh;
  // Nice background gradient
  background-image: linear-gradient(to bottom, #379683, #05386b);
  border: 1px solid whitesmoke;
  overflow: auto;
}
</style>
