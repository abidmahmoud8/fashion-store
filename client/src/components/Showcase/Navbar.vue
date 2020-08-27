<template>
  <v-app-bar id="navbar-showcase" class="d-flex justify-space-between mb-6" app color="white" light>
    <div class="d-flex align-center justify-space-between">
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../../assets/logo.png" />
    </div>

    <div class="d-flex justify-center align-center">
      <div>
        <v-btn to="/femmes" text>
          <span  class="mr-2">Femmes</span>
        </v-btn>
        <v-btn to="/hommes" text>
          <span  class="mr-2">Hommes</span>
        </v-btn>
        <v-btn to="/enfants" text>
          <span class="mr-2">Enfants</span>
        </v-btn>
      </div>
      <v-autocomplete v-model="select" :loading="loading" :items="items" :search-input.sync="search" cache-items
        class="mx-4 w-4" flat hide-no-data hide-details label="Chercher par catégorie" solo-inverted></v-autocomplete>
    </div>
    <div>
      <v-btn href="/auth" target="_blank" text>
        <span class="mr-2">Se connecter/S'inscrire</span>

      </v-btn>
      <v-icon class="mr-2">fas fa-shopping-cart</v-icon>
      <v-icon>far fa-heart</v-icon>
    </div>
  </v-app-bar>
</template>



<script>
  export default {
    data() {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        categories: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated categories of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
      }
    },
    watch: {
      search(val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections(v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.categories.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
  }
</script>

<style>
  #app>div>header#navbar-showcase>div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  #app .v-btn--contained {
    box-shadow: none;
  }

  .w-40 {
    width: 40%;
  }

  #app>div>div>div.v-window__container>div>button>span>i {
    font-size: 24px !important;
  }
</style>