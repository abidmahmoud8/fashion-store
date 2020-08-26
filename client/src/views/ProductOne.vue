<template>
  <v-app>
    <Navbar></Navbar>
    <NavbarCategory></NavbarCategory>
    <ProductOnlyOne></ProductOnlyOne>
    <br><br>
    <Footer></Footer>
  </v-app>
</template>
<script>
  import Navbar from "./../components/Showcase/Navbar";
  import NavbarCategory from "./../components/Showcase/NavbarCategory";
  import ProductOnlyOne from "./../components/Showcase/ProductOnlyOne";
  import Footer from "./../components/Showcase/Footer";

  export default {
    name: "ProductOne",

    components: {
      Navbar,
      NavbarCategory,
      ProductOnlyOne,
      Footer,
    },

    data: () => ({}),

  };
</script>
<style>

</style>