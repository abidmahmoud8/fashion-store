<template>
  <v-carousel style="height: 500px;top: 64px;">
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
      transition="fade-transition" position="top" top="100px"></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            src: 'https://www.businessoffashion.com/articles/news-analysis/site/uploads/2019/09/LS-target-collabs.jpg',
          },
          {
            src: 'https://s3.envato.com/files/260793076/04.png',
          },
          {
            src: 'https://fr.mycarsit.com/wp-content/uploads/sites/2/2019/01/slider-solde-20-1-1024x446.jpg',
          },
        ],
      }
    },
  }
</script>