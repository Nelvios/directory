<template>
  <div class="home">
      <app-button></app-button>
      <app-map></app-map>
  </div>
</template>

<script>
import button from '@/components/button.vue'
import map from '@/components/map.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    'app-button': button,
    'app-map': map
  },
  created () {
    axios.get('/employee.json')
      .then(response => {
        const resultArray = []
        for (const employee in response.data) {
          console.log('this is employee data: ' + employee)
          const employeeDat = response.data[employee]
          for (const value in employeeDat) {
            console.log('this is value data: ' + value)
          }
        }
        console.log(resultArray)
      })
      .catch(err => console.log(err))
  }
}
</script>

<style lang="scss">
  .home {
    margin-left: 160px; /* Same as the width of the sidebar */
    padding: 0px 10px;
    }
</style>
