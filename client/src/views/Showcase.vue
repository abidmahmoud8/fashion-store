<template>
<v-app>
    <Navbar></Navbar>
    <Slider></Slider>
    <Grid></Grid>
    <Footer></Footer>
</v-app>
</template>
<script>
  import Navbar from "./../components/Showcase/Navbar";
  import Slider from "./../components/Showcase/Slider";
  import Grid from "./../components/Showcase/Grid";
  import Footer from "./../components/Showcase/Footer";

  export default {
    name: "Showcase",

    components: {
      Navbar,
      Slider,
      Grid,
      Footer,
    },

    data: () => ({
    }),
  
  };
</script>
