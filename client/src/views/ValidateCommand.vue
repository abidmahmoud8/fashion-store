<template>
<v-app>
    <Navbar></Navbar>
    <ValidateCommandStepper></ValidateCommandStepper>
    <Grid></Grid>
    <Footer></Footer>
</v-app>
</template>
<script>
import Navbar from "./../components/Showcase/Navbar";
import ValidateCommandStepper from "./../components/Showcase/ValidateCommandStepper";
import Footer from "./../components/Showcase/Footer";

export default {
  name: "ValidateCommand",

  components: {
    Navbar,
    ValidateCommandStepper,
    Footer,
  },

  data: () => ({
  }),
 
};
</script>
