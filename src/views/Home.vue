<template>
  <div class="home">
      <app-map></app-map>
      <app-emp-detail></app-emp-detail>
  </div>
</template>

<script>
import map from '@/components/map.vue'
import employeeDetail from '@/components/empDetail.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
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
    }
  .toRight{
    margin-right: 270px;
    transition: margin-right .5s;
  }
  .toLeft{
    margin-right: 0;
    transition: margin-right .5s;
  }
</style>
