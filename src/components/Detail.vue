<template>
  <div>
      {{content}}
  </div>
</template>

<script>
import { Panel } from 'vux';
export default {
  components: {
  },
  computed: {
      content() {
          return this.store.state.detail;
      }
  },
  created() {
      dispatch('getDetail', {
          id: this.$route.params.id
      });
      
      console.log('this route', this.$route);
  },
};
</script>
