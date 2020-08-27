<template>
  <v-container class="">
    <h2 class="my-8">ACHETEZ PAR CATÉGORIE : </h2>

    <v-row no-gutters>

      <v-col cols="12" sm="3">
        <v-card href="/hommes" height="400px" class="" outlined tile>
          <v-img :src="this.categoriesfilter[1].imageUrl" height="100%"
            class="white--text text-right pa-2">
            <h3>{{this.categoriesfilter[1].name}}</h3>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card href="/hommes" height="400px" class="" outlined tile>
          <v-img :src="this.categoriesfilter[2].imageUrl" height="100%"
            class="white--text text-right pa-2">
            <h3>{{this.categoriesfilter[2].name}}</h3>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card href="/hommes" height="400px" class="" outlined tile>
          <v-img :src="this.categoriesfilter[3].imageUrl" height="100%"
            class="white--text text-right pa-2">
            <h3>{{this.categoriesfilter[3].name}}</h3>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-card href="/hommes" height="400px" class="" outlined tile>
          <v-img :src="this.categoriesfilter[4].imageUrl" height="100%"
            class="white--text text-right pa-2">
            <h3>{{this.categoriesfilter[4].name}}</h3>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card dark height="400px" class="px-4 d-flex flex-column justify-center" outlined tile>
          <h3>Plus de catégories : </h3>
          <div class="my-4">
            <v-chip v-for="item in categoriesfilter" :key="item.id" :to="item.id" class="mr-2 my-2" filter outlined>{{item.name}}</v-chip>
          </div>

        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios';

  export default {
    name: "GridCategory",
    data: () => ({
      categories: null,
      categoriesfilter: null,
    }),

    beforeMount() {
      axios.get('http://localhost:4000/api/category/')
        .then(response => {
          this.categories = response.data
          this.categoriesfilter = this.categories.filter(category => category.gendre == this.$route.path.substring(1));
        })
    },
    mounted() {
      console.log(this.categories);
    },
    watch: {
      $route() {
        this.categoriesfilter = this.categories.filter(category => category.gendre == this.$route.path.substring(1));
      }
    },

    methods: {
      ok() {
        console.log(this.bg);
      }
    }


  }
</script>
<style scoped>
    h3 {
        text-shadow: 1px 1px 1px  #000000 !important;

    }

</style>