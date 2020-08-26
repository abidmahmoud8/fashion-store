<template>
<v-app>
    <Navbar></Navbar>
    <NavbarCategory></NavbarCategory>
    <ShowcaseImage></ShowcaseImage>
    <GridCategory></GridCategory>
    <Newest></Newest>
    <br><br>
    <Footer></Footer>
</v-app>
</template>
<script>
  import Navbar from "./../components/Showcase/Navbar";
  import NavbarCategory from "./../components/Showcase/NavbarCategory";
  import ShowcaseImage from "./../components/Showcase/ShowcaseImage";
  import GridCategory from "./../components/Showcase/GridCategory";
  import Newest from "./../components/Showcase/Newest";
  import Footer from "./../components/Showcase/Footer";

  export default {
    name: "Showcase",

    components: {
      Navbar,
      NavbarCategory,
      ShowcaseImage,
      GridCategory,
      Newest,
      Footer,
    },

    data: () => ({
    }),
  
  };
</script>
<style>
.v-list-item.theme--light:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

</style>