<template>
  <v-container fluid style="padding : 120px; margin-top:20px">
    <v-row>
      <v-col cols="6" sm="6">
        <v-card class="mx-auto">
          <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(photo,i) in slider" :key="i" :src="photo"></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6">
        <h2>Titre : {{this.item.title}}</h2><br>
        <h3>Price :{{this.item.price}} €</h3><br>
        <h3>Description : </h3>
        <p>{{this.item.long_description}} </p>
        <v-select v-model="color" :items="colors" label="Coleur" solo></v-select>
        <v-select v-model="size" :items="sizes" label="Taille" solo></v-select>
        <label>Quantité : </label> <input type="number" min=1 @change="qteControl" :max="this.item.quantities"
          v-model="qte" style="border: 1px solid #ccc;text-align:right;width:60px" />
        <br><br><br>
        <div>
          <v-btn v-if="this.item.quantities>0" width="250px" class="my-2" outlined tile color="black d-block"
            @click="addtoCart">Ajouter au
            panier</v-btn>
          <h3 style="color:red" v-else>Produit Epuisé</h3>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import gql from 'graphql-tag';

  export default {
    name: "ProductOnlyOne",
    data() {
      return {
        colors: [],
        sizes: [],
        products: [],
        slider: [],
        images: [],
        qte: 1,
        color: null,
        size: null,
        ids:''

      }
    },
    beforeMount() {
      this.ids = this.$route.params.id;

    },
    // beforeMount() {
    //   axios.get(`http://localhost:4000/api/item/${this.$route.params.id}`)
    //     .then(response => {
    //       this.products = response.data
    //       this.colors = this.products[0].colors.split(',')
    //       this.sizes = this.products[0].sizes.split(',')
    //       this.images = JSON.parse(this.products[0].images)
    //       this.images.forEach(image => {
    //         console.log(image);
    //         this.slider.push(`http://localhost:4000/images/${image.filename}`)
    //       });
    //       this.size = this.sizes[0]
    //       this.color = this.colors[0]

    //     });
    // },
    apollo: {
      item: {
        query: gql `query item($id: ID) {
                        item(id: $id) {
                              id
                              title
                              long_description
                              short_description
                              images
                              price
                              discount
                              quantities
                              sizes
                              colors
                              gendre
                            
                        }
                    }`,
        variables() {
          return {
            id: this.ids
          }
        },
      },

    },
    watch: {
      qte: function () {
        console.log(this.item);
      },
      item() {
          this.ids = this.$route.params.id;
          this.colors = this.item.colors.split(',')
          this.sizes = this.item.sizes.split(',')
          this.images = JSON.parse(this.item.images)
          this.images.forEach(image => {
            console.log(image);
            this.slider.push(`http://localhost:4000/images/${image.filename}`)
          });
          this.size = this.sizes;
          this.color = this.colors;
      }
    },
    methods: {
      addtoCart() {
        // this.product = {
        //   id: this.products[0].id,
        //   title: this.products[0].title,
        //   gendre: this.products[0].gendre,
        //   price: this.products[0].price,
        //   quantities: this.products[0].quantities,
        //   discount: this.products[0].discount,
        //   size: this.size,
        //   color: this.color,
        //   qte: this.qte,
        // }
        // var existing = localStorage.getItem('products');
        // existing = existing ? existing.split(',') : [];
        // existing.push(JSON.stringify((this.product)));
        // localStorage.setItem('products', existing);
        // location.reload();
      },
      qteControl() {
        // if (this.qte > this.products[0].quantities) {
        //   this.qte = 10;
        // }
        // if (this.qte < 1) {
        //   this.qte = 1;
        // }
      }
    }
  }
</script>