<template>
  <v-container fluid style="margin-top: 100px;padding : 20px">
    <v-breadcrumbs black :items="items" large></v-breadcrumbs>
    <v-row>
      <v-col cols="3" sm="3">
        <h2 class="filter">FILTER</h2>
        <div class="filter-group">
          <h3 class="">TRIER PAR</h3>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Le plus nouveaux" value="newest"></v-radio>
            <v-radio label="Le plus anciens" value="oldest"></v-radio>
            <v-radio label="Prix croissant" value="priceasc"></v-radio>
            <v-radio label="Prix Decroissant" value="pricedesc"></v-radio>
          </v-radio-group>
        </div>

        <div class="filter-group">
          <h3 class="mb-4">COULEURS</h3>
          <v-checkbox class="ma-0" v-model="selectedColor" value="rouge" label="rouge"></v-checkbox>
          <v-checkbox class="ma-0" v-model="selectedColor" value="vert" label="vert"></v-checkbox>
          <v-checkbox class="ma-0" v-model="selectedColor" value="noire" label="noire"></v-checkbox>
          <v-checkbox class="ma-0" v-model="selectedColor" value="blanc" label="blanc"></v-checkbox>
        </div>
        <div class="filter-group">
          <h3 class="mb-4">TAILLES</h3>
          <v-checkbox class="ma-0" v-model="selectedSize" value="s" label="s"></v-checkbox>
          <v-checkbox class="ma-0" v-model="selectedSize" value="m" label="m"></v-checkbox>
          <v-checkbox class="ma-0" v-model="selectedSize" value="l" label="l"></v-checkbox>
          <v-checkbox class="ma-0" v-model="selectedSize" value="xl" label="xl"></v-checkbox>
        </div>


        <div class="filter-group">
          <v-card flat color="transparent">
            <h3 class="mb-4">PRIX</h3>
            <v-card-text>
              <v-row>
                <v-col class="px-4">
                  <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center">
                    <template v-slot:prepend>
                      <v-text-field :value="range[0]" class="mt-0 pt-0" hide-details single-line type="number"
                        style="width: 60px" @change="$set(range, 0, $event)"></v-text-field>
                    </template>
                    <template v-slot:append>
                      <v-text-field :value="range[1]" class="mt-0 pt-0" hide-details single-line type="number"
                        style="width: 60px" @change="$set(range, 1, $event)"></v-text-field>
                    </template>
                  </v-range-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
      <v-col cols="9" sm="9">
        <h2>{{categoriName[0].name.toUpperCase()}}</h2>
        <v-row>
          <v-col cols="6" sm="4" v-for="product in products" :key="product.id">
            <v-card class="mx-auto" max-width="600"
              :href="`http://localhost:8080/${product.gendre}/product/${product.item_id}`">
              <v-img class="white--text align-end" height="400px"
                :src="`http://localhost:4000/images/${JSON.parse(product.images)[0].filename}`">
              </v-img>
              <v-card-subtitle class="pb-0">{{product.title}}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Titre : {{product.title}}</div>
                <div>Prix : {{product.price.toFixed(2)}} €</div>
                <div>couleurs : {{product.colors.replace(",", " ")}}</div>
                <div>Etat : <span style="color:green" v-if="product.quantities>0">En stock</span><span style="color:red"
                    v-else>Epuisé</span></div>
              </v-card-text>
              <v-card-actions>
              </v-card-actions>
            </v-card>
            <v-btn width="100%" class="my-2" outlined tile color="black d-block">Ajouter au panier</v-btn>

          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
  import axios from 'axios';
  export default {
    name: "ProductsListGrid",
    data: () => ({
      items: [],
      radioGroup: null,
      selectedColor: [],
      selectedSize: [],
      min: 0,
      max: 0,
      slider: 40,
      range: [0, 90],
      products: [],
      categoriName: [{
        name: 'ok'
      }],
      vilteredproducts : [],

    }),

    beforeMount() {
      console.log(this.$route);
      axios.get(`http://localhost:4000/api/item/cat/${this.$route.params.id}`)
        .then(response => {
          this.products = response.data
          this.products.forEach(product => {
            if (product.price > this.max) {
              this.max = product.price
              this.range = [0, this.max]
            }
          });
        });
      axios.get(`http://localhost:4000/api/category/${this.$route.params.id}`)
        .then(response => {
          this.categoriName = response.data;
        })
    },
    watch: {
      products: function () {
        this.products.forEach(product => {
          if (product.price > this.max) {
            this.max = product.price
          }
        });

      },
      categoriName: function () {
        this.items = [{
            text: 'Produits',
            disabled: false,
            href: '/',
          },
          {
            text: this.categoriName[0].gendre,
            disabled: false,
            href: `/${this.categoriName[0].gendre}`,
          },
          {
            text: this.categoriName[0].name,
            disabled: false,
            href: `/${this.categoriName[0].gendre}/products/${this.categoriName[0].id}`,
          },
        ];
      },
      radioGroup: function () {
        if (this.radioGroup == "priceasc") {
          this.products.sort(function (a, b) {
            return a.price - b.price;
          });
        };
        if (this.radioGroup == "pricedesc") {
          this.products.sort(function (a, b) {
            return b.price - a.price;
          });

        };
        if (this.radioGroup == "newest") {
          this.products.sort(function (a, b) {
            return b.id - a.id;
          });

        };
        if (this.radioGroup == "oldest") {
          this.products.sort(function (a, b) {
            return a.id - b.id;
          });

        };
      },

    },
  }
</script>
<style>
  #app>div>div.container.container--fluid>ul>li>a {
    color: #000 !important;
  }

  .filter {
    color: grey;
  }

  .filter-group {
    border: 1px solid #f5f5f5;
    padding: 10px;
  }

  #app div.v-input__slot {
    margin-bottom: 0;
  }
</style>