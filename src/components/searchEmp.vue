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
      if (this.select === 'Full Name') {
        if (this.fullName) {
          this.initial = null

          const reformatFullName = this.fullName.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
          const queryObject = {
            queryParams: 'fullName',
            query: reformatFullName
          }
          this.$store.commit('setQuery', queryObject)
        }
      } else {
        if (this.initial) {
          this.fullName = null

          const queryObject = {
            queryParams: 'initial',
            query: this.initial.toUpperCase()
          }
          this.$store.commit('setQuery', queryObject)
        }
      }
    }
  },
  watch: {
    $route (to, from) {
      if (Object.keys(to.query).length === 0 && to.query.constructor === Object) {
        this.select = null
        this.fullName = null
        this.initial = null
      } else {
        if (to.query.name) {
          try {
            if (to.query.name.toUpperCase() !== this.fullName.toUpperCase()) {
              this.select = 'Full Name'
              this.fullName = to.query.name
            }
          } catch (err) {
            this.select = 'Full Name'
            this.fullName = to.query.name
          }
        } else if (to.query.initial) {
          try {
            if (to.query.initial.toUpperCase() !== this.initial.toUpperCase()) {
              this.select = 'Initial'
              this.initial = to.query.initial
            }
          } catch (err) {
            this.select = 'Initial'
            this.initial = to.query.initial
          }
        }
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
