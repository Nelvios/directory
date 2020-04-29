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
    padding: 0px 10px;
    grid-area: main;
    }
  .toRight{
    margin-right: 270px;
    transition: margin-right .5s;
  }
</style>
