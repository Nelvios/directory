<template>
  <div class="wrapper">
    <div class="sidenav">
      <router-link to="/">Home</router-link>
      <router-link to="/location">Location</router-link>
      <router-link to="/assets">Assets</router-link>
    </div>
    <div class="admin">
        <app-button></app-button>
        <app-map></app-map>
        <app-emp-detail></app-emp-detail>
    </div>
  </div>
</template>

<script>
import button from '@/components/button.vue'
import map from '@/components/map.vue'
import employeeDetail from '@/components/empDetail.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Admin',
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
  .wrapper{
    display: grid;
    grid-template-columns: 160px auto;
    grid-column-gap: .5em;
    grid-template-areas: "sidenav main";
  }

  /* The sidebar menu */
  .sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  grid-area: sidenav;
  }

  /* The navigation menu links */
  .sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
  color: #f1f1f1;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }
    .sidenav a {
        font-size: 18px;
    }
  }
  .admin {
    padding: 0px 10px;
    grid-area: main;
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
