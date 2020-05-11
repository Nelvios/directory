<template>
  <div class="home">
    <app-search></app-search>
    <app-map></app-map>
    <app-emp-detail></app-emp-detail>
  </div>
</template>

<script>
import map from '@/components/map.vue'
import employeeDetail from '@/components/empDetail.vue'
import search from '@/components/searchEmp.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    'app-map': map,
    'app-emp-detail': employeeDetail,
    'app-search': search
  },
  methods: {
    manipulateQuery (fullName, initial) {
      let temp
      if (fullName || initial) {
        console.log('masuk sini')
        if (fullName) {
          temp = {
            queryParams: 'fullName',
            query: fullName
          }
        } else if (initial) {
          temp = {
            queryParams: 'initial',
            query: initial
          }
        }
        this.$store.dispatch('findQuery', temp).then(res => {
          const temp2 = this.$store.getters.getEmployeeDetail
          this.$store.commit('querySeat', temp2)
        })
      } else {
        console.log('masuk situ')
        temp = {
          queryParams: null,
          query: null
        }
        this.$store.commit('setQuery', temp)
      }
    },
    updateRoute (data) {
      if (data.queryParams === 'fullName') {
        this.$router.push({ name: 'Home', query: { name: data.query } })
      } else if (data.queryParams === 'initial') {
        this.$router.push({ name: 'Home', query: { initial: data.query } })
      }
    }
    // updateQuery (fullName, initial) {
    //   console.log(fullName)
    //   console.log(initial)
    //   let temp
    //   if (fullName || initial) {
    //     temp = {
    //       fullName,
    //       initial
    //     }
    //   } else {
    //     temp = {
    //       fullName: null,
    //       initial: null
    //     }
    //   }
    //   this.$store.commit('setQuery', temp)
    // }
  },
  computed: {
    ...mapGetters(['isHidden']),
    triggerQuery: function () {
      return this.$store.getters.queryData
    }
  },
  watch: {
    $route (to, from) {
      console.log(from)
      // console.log(to.query)
      if (!to.query.name && !to.query.initial) {
        console.log('masuk sini')
        this.$store.commit('deleteSearchedSeat')
        this.manipulateQuery(this.$route.query.name, this.$route.query.initial)
      } else {
        this.manipulateQuery(this.$route.query.name, this.$route.query.initial)
        // this.updateQuery(this.$route.query.name, this.$route.query.initial)
      }
    },
    triggerQuery: function (value) {
      this.updateRoute(value)
    }
  },
  created () {
    this.$store.dispatch('getAllSeat')
    // this.updateQuery(this.$route.query.name, this.$route.query.initial)
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
