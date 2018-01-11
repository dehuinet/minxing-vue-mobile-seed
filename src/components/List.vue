<template>
  <div>
      <panel :list="items" type="2"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux';
export default {
  components: {
    Panel,
  },
  computed: {
    items() {
      return this.store.state.list
    }
  },
  created() {
    store.dispatch('getList')
  }
};
</script>
