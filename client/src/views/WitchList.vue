<template>
<v-app>
    <Navbar></Navbar>
    <WitchListGrid></WitchListGrid>
    <Footer></Footer>
</v-app>
</template>
<script>
import Navbar from "./../components/Showcase/Navbar";
import WitchListGrid from "./../components/Showcase/WitchListGrid";
import Footer from "./../components/Showcase/Footer";

export default {
  name: "Witchlist",
  components: {
    Navbar,
    WitchListGrid,
    Footer,
  },

  data: () => ({
  }),
 
};
</script>
<style>

</style>