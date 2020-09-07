<template>
  <v-container class="">
    <h2 class="my-8">ACHETEZ PAR CATÉGORIE : </h2>

    <v-row no-gutters>

      <v-col cols="12" sm="3">
        <v-card :href="`${this.$route.path}/products/${this.categoriesfilter[1].id}`" height="400px" class="" outlined
          tile>
          <v-img :src="this.categoriesfilter[1].imageUrl" height="100%" class="white--text text-right pa-2">
            <h3>{{this.categoriesfilter[1].name}}</h3>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card :href="`${this.$route.path}/products/${this.categoriesfilter[2].id}`" height="400px" class="" outlined
          tile>
          <v-img :src="this.categoriesfilter[2].imageUrl" height="100%" class="white--text text-right pa-2">
            <h3>{{this.categoriesfilter[2].name}}</h3>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card :href="`${this.$route.path}/products/${this.categoriesfilter[3].id}`" height="400px" class="" outlined
          tile>
          <v-img :src="this.categoriesfilter[3].imageUrl" height="100%" class="white--text text-right pa-2">
            <h3>{{this.categoriesfilter[3].name}}</h3>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-card :href="`${this.$route.path}/products/${this.categoriesfilter[4].id}`" height="400px" class="" outlined
          tile>
          <v-img :src="this.categoriesfilter[4].imageUrl" height="100%" class="white--text text-right pa-2">
            <h3>{{this.categoriesfilter[4].name}}</h3>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card dark height="400px" class="px-4 d-flex flex-column justify-center" outlined tile>
          <h3>Plus de catégories : </h3>
          <div class="my-4">
            <v-chip v-for="item in categoriesfilter" :key="item.id" @click="goto(item.id)" class="mr-2 my-2" filter
              outlined>{{item.name}}</v-chip>
          </div>

        </v-card>
      </v-col>

    </v-row>
    
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';

  export default {
    name: "GridCategory",
    data: () => ({
      categoriesfilter: null,
    }),
    apollo: {
      categories: gql `
                query {
                    categories {
                    name
                    id
                    gendre
                    level
                    imageUrl
                    }
                }
                `,
    },
    watch: {
      $route() {
        this.categoriesfilter = JSON.parse(JSON.stringify(this.categories)).filter(category => category.gendre == this.$route.path.substring(1));
      },
      categories() {
        this.categoriesfilter = JSON.parse(JSON.stringify(this.categories)).filter(category => category.gendre == this.$route.path.substring(1));
      }
    },
    methods: {
      goto(id) {
        window.location.href = `${this.$route.path}/products/${id}`
      },
    }

  }
</script>
<style scoped>
  h3 {
    text-shadow: 1px 1px 1px #000000 !important;

  }
</style>