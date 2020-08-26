<template>
<v-app>
    <Navbar></Navbar>
    <AuthTabs></AuthTabs>
    <br><br>
    <Footer></Footer>
</v-app>
</template>
<script>
import Navbar from "./../components/Showcase/Navbar";
import AuthTabs from "./../components/Showcase/AuthTabs";
import Footer from "./../components/Showcase/Footer";

export default {
  name: "Auth",

  components: {
    Navbar,
    AuthTabs,
    Footer,
  },

  data: () => ({
  }),
 
};
</script>
<style>

</style>