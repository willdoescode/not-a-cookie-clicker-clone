<template>
  <div class="panel">
    <buy-slot name="Slow Helper" alt-name="slowHelper" cost="60" v-if="$store.state.slowHelper" />
    <buy-slot name="Fast Helper" alt-name="fastHelper" cost="69" v-if="$store.state.fastHelper" />
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
  background-color: slategray;
  border: 1px solid whitesmoke;
  overflow: auto;
  .slot {
    width: 100%;
  }
}
</style>
