<template>
  <v-footer id="footer" padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <a href="http://mahmoudabid.ml/?i=1">Mahmoud ABID</a>
    </v-col>
  </v-footer>
</template>

<style scoped>
#footer {
  position:absolute;
  bottom:0;
  width:100%;
  height:50px;
}
</style>