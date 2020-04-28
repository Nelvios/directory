<template>
  <div class="home">
      <app-button></app-button>
      <app-map></app-map>
      <app-emp-detail v-if="isHidden"></app-emp-detail>
  </div>
</template>

<script>
import button from '@/components/button.vue'
import map from '@/components/map.vue'
import employeeDetail from '@/components/empDetail.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    'app-button': button,
    'app-map': map,
    'app-emp-detail': employeeDetail
  },
  computed: {
    ...mapGetters(['isHidden'])
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
  .toRight{
    margin-right: 270px;
  }
</style>
