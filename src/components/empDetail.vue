<template>
  <div>
    <v-navigation-drawer
        :value="drawer"
        absolute
        temporary
        right
        hide-overlay
      >
      <v-row justify="space-around" class="my-3">
        <v-avatar size="80">
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-avatar>
      </v-row>

      <v-divider></v-divider>

      <div class="container-detail">
        <div class="container-title">Full Name </div>
        <div class="detail">{{ employeeDetail.sambutan + '. ' + employeeDetail.fullName }}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Group </div>
        <div class="detail">{{employeeDetail.group}}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Initial </div>
        <div class="detail">{{employeeDetail.initial}}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Office Location </div>
        <div class="detail">{{employeeDetail.officeLocation}}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Seat Number </div>
        <div class="detail">{{employeeDetail.seatNumber}}</div>
      </div>
      <div class="container-detail">
        <div class="container-title">Sync Manager </div>
        <div class="detail">{{employeeDetail.syncManager}}</div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      employeeDetail: 'getEmployeeDetail',
      drawer: 'getEmpDrawerState'
    })
  }
}
</script>

<style scoped>
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
