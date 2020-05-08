<template>
  <v-row>
    <v-col cols="4">
      <v-select
        v-model="select"
        :items="items"
        label="Search By"
      ></v-select>
    </v-col>
    <v-row>
      <v-col cols="4">
        <v-text-field label="Input Full Name" v-if="select === 'Full Name'" v-model="fullName"></v-text-field>
        <v-text-field label="Input Initial" v-if="select === 'Initial'" v-model="initial"></v-text-field>
      </v-col>
      <v-col
      cols="2"
      align-self="center">
        <v-btn v-if="select" @click="searchEmployee">Search</v-btn>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      select: null,
      items: ['Full Name', 'Initial'],
      fullName: null,
      initial: null
    }
  },
  methods: {
    searchEmployee () {
      if (this.fullName) {
        const reformatFullName = this.fullName.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
        const queryObject = {
          queryParams: 'fullName',
          query: reformatFullName
        }
        this.$store.commit('setQuery', queryObject)
        // this.$router.push({ name: 'Home', query: { name: queryObject.query } })
        // this.$store.dispatch('findQuery', queryObject).then(res => {
        //   const temp = this.$store.getters.getEmployeeDetail
        //   this.$store.commit('querySeat', temp)
        // })
      } else if (this.initial) {
        const queryObject = {
          queryParams: 'initial',
          query: this.initial.toUpperCase()
        }
        this.$store.commit('setQuery', queryObject)
        // this.$router.push({ name: 'Home', query: { initial: queryObject.query } })
        // this.$store.dispatch('findQuery', queryObject)
      }
    }
  },
  computed: {
    updateNameInitial: function () {
      return this.$store.getters.queryData
    }
  },
  watch: {
    updateNameInitial: function (value) {
      if (this.fullName !== value.fullName) {
        this.fullName = value.fullName
      } else if (this.initial !== value.initial) {
        this.initial = value.initial
      } else if (!value.fullName && !value.initial) {
        this.fullName = null
        this.initial = null
      }
    }
  }
}
</script>

<style scoped>
v-select{
  width: 400px;
}
</style>
