<template>
<v-app>
    <Navbar></Navbar>
    <CartList></CartList>
    <br><br>
    <Footer></Footer>
</v-app>
</template>
<script>
import Navbar from "./../components/Showcase/Navbar";
import CartList from "./../components/Showcase/CartList";
import Footer from "./../components/Showcase/Footer";

export default {
  name: "Cart",

  components: {
    Navbar,
    CartList,
    Footer,
  },

  data: () => ({
  }),
 
};
</script>
<style>

</style>