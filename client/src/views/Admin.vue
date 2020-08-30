<template>
  <v-app>
    <v-row>
      <v-col sm="2">
        <Sidebar></Sidebar>
      </v-col>
      <v-col sm="10">
          <Navbar></Navbar>
          <router-view></router-view>
          <br><br>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
  import Navbar from "./../components/DashboardAdmin/Navbar";
  import Sidebar from "./../components/DashboardAdmin/Sidebar";

  export default {
    name: "Auth",

    components: {
      Navbar,
      Sidebar,
    },

    beforeCreate() {
      if (localStorage.getItem("user") == null) {
        window.location.href = `/auth`
        console.log('ezz');
      }
    }
  }
</script>
<style scoped>
  * {
    padding: 0 !important;
  }
</style>