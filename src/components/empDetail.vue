<template>
  <div>
    <template >
      <div class="empPhoto"></div>
      <div class="container-detail">
        <div class="container-title">Full Name: </div>
        <div class="detail">{{ employeeDetail.sambutan + '. ' + employeeDetail.fullName }}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Group: </div>
        <div class="detail">{{employeeDetail.group}}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Initial: </div>
        <div class="detail">{{employeeDetail.initial}}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Office Location: </div>
        <div class="detail">{{employeeDetail.officeLocation}}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Seat Number: </div>
        <div class="detail">{{employeeDetail.seatNumber}}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Sync Manager: </div>
        <div class="detail">{{employeeDetail.syncManager}}</div>
      </div>
    </template>
  </div>
    <!-- <div class="sideTable">
      <div class="empPhoto"></div>
      <ul class="remPad">
        <li>Full Name: {{ employeeDetail.sambutan + '. ' + employeeDetail.fullName }}</li>
        <li>Group: {{employeeDetail.group}}</li>
        <li>Initial: {{employeeDetail.initial}}</li>
        <li>Office Location: {{employeeDetail.officeLocation}}</li>
        <li>Seat Number: {{employeeDetail.seatNumber}}</li>
        <li>Sync Manager: {{employeeDetail.syncManager}}</li>
      </ul>
    </div> -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      employeeDetail: 'getEmployeeDetail'
    })
  }
}
</script>

<style scoped>
.sideTable {
  height: 100%; /* 100% Full-height */
  width: 270px;
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  /* transition: width 2s; 0.5 second transition effect to slide in the sidenav */
}
.remPad{
  padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
.container-detail{
  margin: 1rem 0;
}
.container-title{
  padding: .4rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0,0,0,.03);
  border-bottom: 1px solid rgba(0,0,0,.125);
}
.detail{
  padding: .75rem 1.25rem;
}
</style>
