<template>
  <div class="sideTable">
    <div class="empPhoto"></div>
    <ul class="remPad">
      <li>Full Name: {{ getEmployeeFullName }}</li>
      <li>Group: {{getEmployeeGroup}}</li>
      <li>Initial: {{getEmployeeInitial}}</li>
      <li>Office Location: {{getEmployeeOfficeLocation}}</li>
      <li>Seat Number: {{getEmployeeSeatNumber}}</li>
      <li>Sync Manager: {{getEmployeeSyncManager}}</li>
    </ul>

    <!-- <h4>Full Name: {{ getEmployeeFullName }}</h4>
    <h4>Group: {{getEmployeeGroup}}</h4>
    <h4>Initial: {{getEmployeeInitial}}</h4>
    <h4>Office Location: {{getEmployeeOfficeLocation}}</h4>
    <h4>Seat Number: {{getEmployeeSeatNumber}}</h4>
    <h4>Sync Manager: {{getEmployeeSyncManager}}</h4> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getEmployeeFullName',
      'getEmployeeGroup',
      'getEmployeeInitial',
      'getEmployeeOfficeLocation',
      'getEmployeeSeatNumber',
      'getEmployeeSyncManager'
    ])
    // fullName () {
    //   const temp = this.$store.getters.getDataEmployee
    //   return temp.fullName
    // }
  }
}
</script>

<style>
.sideTable {
  height: 100%; /* 100% Full-height */
  width: 270px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
.remPad{
  padding: 0;
}
.sideTable li{
  padding: 8px 20px 8px 8px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
  margin: 10px 0;
}
</style>
