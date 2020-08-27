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
        <!-- <Footer></Footer> -->
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
  import Navbar from "./../components/DashboardAdmin/Navbar";
  import Sidebar from "./../components/DashboardAdmin/Sidebar";
  // import Footer from "./../components/Showcase/Footer";

  export default {
    name: "Auth",

    components: {
      Navbar,
      Sidebar,
      // Footer,
    },

    data: () => ({}),

  };
</script>
<style scoped>
  * {
    padding: 0 !important;
  }
</style>