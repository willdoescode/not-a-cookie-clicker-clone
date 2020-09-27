<template>
  <div class="panel">
    <buy-slot name="wow" cost="2" />
    <buy-slot name="wow" cost="3" />
    <buy-slot name="wow" cost="4" />
    <buy-slot name="wow" cost="5" />
    <buy-slot name="wow" cost="6" />
    <buy-slot name="wow" cost="7" />
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
  background-color: #39a0ca;
  border: 1px solid whitesmoke;
  overflow: auto;
  .slot {
    width: 100%;
  }
}
</style>
