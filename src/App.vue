<template>
  <div class="wrapper">
    <div class="sidenav">
      <router-link to="/"><a>Home</a></router-link>
      <router-link to="/location"><a>Location</a></router-link>
      <router-link to="/a"><a>Assets</a></router-link>
    </div>
    <router-view/>
  </div>
</template>

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
</style>
