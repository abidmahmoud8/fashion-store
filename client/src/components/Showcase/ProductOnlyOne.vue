<template>
  <v-container fluid style="padding : 120px">
    <v-row>
      <v-col cols="6" sm="6">
        <v-card class="mx-auto">
          <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(item,i) in slider" :key="i" :src="item"></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6">
        <h2>Titre : {{this.products[0].title}}</h2><br>
        <h3>Price :{{this.products[0].price}} €</h3><br>
        <h3>Description : </h3>
        <p>{{this.products[0].long_description}} </p>
        <v-select :items="colors" label="Coleur" solo></v-select>
        <v-select :items="sizes" label="Taille" solo></v-select>

        <div>
          <v-btn width="250px" class="my-2" outlined tile color="black d-block" @click="addtoCart(products)">Ajouter au
            panier</v-btn>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "ProductOnlyOne",
    data() {
      return {
        colors: [],
        sizes: [],
        products: [],
        slider: [],
        images: []
      }
    },
    beforeMount() {
      axios.get(`http://localhost:4000/api/item/${this.$route.params.id}`)
        .then(response => {
          this.products = response.data
          this.colors = this.products[0].colors.split(',')
          this.sizes = this.products[0].sizes.split(',')
          this.images = JSON.parse(this.products[0].images)
          this.images.forEach(image => {
            console.log(image);
            this.slider.push(`http://localhost:4000/images/${image.filename}`)
          });
        });
    },
    methods: {
      addtoCart(item) {
        var existing = localStorage.getItem('products');
        existing = existing ? existing.split(',') : [];
        existing.push(JSON.stringify(item));
        localStorage.setItem('products', existing.toString());
      }
    }
  }
</script>
