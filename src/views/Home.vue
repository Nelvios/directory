<template>
  <div class="home">
      <app-button></app-button>
      <app-map></app-map>
  </div>
</template>

<script>
import button from '@/components/button.vue'
import map from '@/components/map.vue'

export default {
  name: 'Home',
  components: {
    'app-button': button,
    'app-map': map
  },
  created () {
    this.$store.dispatch('getAllSeat')
  }
}
</script>

<style lang="scss">
  .home {
    margin-left: 160px; /* Same as the width of the sidebar */
    padding: 0px 10px;
    }
</style>
