<template>
  <v-app>
    <Navbar></Navbar>
    <NavbarCategory></NavbarCategory>
    <ProductsListGrid></ProductsListGrid>
    <br><br>
    <Footer></Footer>
  </v-app>
</template>
<script>
  import Navbar from "./../components/Showcase/Navbar";
  import NavbarCategory from "./../components/Showcase/NavbarCategory";
  import ProductsListGrid from "./../components/Showcase/ProductsListGrid";
  import Footer from "./../components/Showcase/Footer";

  export default {
    name: "ProductsList",

    components: {
      Navbar,
      NavbarCategory,
      ProductsListGrid,
      Footer,
    },

    data: () => ({}),

  };
</script>
<style>

</style>