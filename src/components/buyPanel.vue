<template>
  <div class="panel">
    <buy-slot name="wow" cost="40" />
    <div @click="wow = !wow" class="slot">
      Hello
    </div>
    <div class="slot" v-if="wow">
      Hello
    </div>
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
  .slot {
    width: 100%;
  }
}
</style>
