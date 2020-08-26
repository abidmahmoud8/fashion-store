<template>
<v-app>
    <Navbar></Navbar>
    <DashboardUser></DashboardUser>
    <br><br>
    <Footer></Footer>
</v-app>
</template>
<script>
import Navbar from "./../components/Showcase/Navbar";
import DashboardUser from "./../components/Showcase/DashboardUser";
import Footer from "./../components/Showcase/Footer";

export default {
  name: "ProductOne",

  components: {
    Navbar,
    DashboardUser,
    Footer,
  },

  data: () => ({
  }),
 
};
</script>
<style>

</style>