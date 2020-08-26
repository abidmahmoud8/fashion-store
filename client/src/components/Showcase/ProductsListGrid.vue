<template>
  <v-container fluid style="margin-top: 100px;padding : 20px">
    <v-breadcrumbs black :items="items" large></v-breadcrumbs>
    <v-row>
      <v-col cols="3" sm="3">
        <h2 class="filter">FILTER</h2>
        <div class="filter-group">
          <h3 class="">TRIER PAR</h3>
          <v-radio-group v-model="radioGroup">
            <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></v-radio>
          </v-radio-group>
        </div>

        <div class="filter-group">
          <h3 class="mb-4">CATEGORIE</h3>
          <v-checkbox class="ma-0" v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
        </div>
        <div class="filter-group">
          <h3 class="mb-4">COULEURS</h3>
          <v-checkbox class="ma-0" v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
        </div>
        <div class="filter-group">
          <h3 class="mb-4">TAILLES</h3>
          <v-checkbox class="ma-0" v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox1" :label="`Checkbox 1: ${checkbox1.toString()}`"></v-checkbox>
          <v-checkbox class="ma-0" v-model="checkbox2" :label="`Checkbox 2: ${checkbox2.toString()}`"></v-checkbox>
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
        <h2>CHEMISES</h2>
        <v-row>
          <v-col cols="6" sm="4">
            <v-card class="mx-auto" max-width="600">
              <v-img class="white--text align-end" height="400px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>

                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
          <v-col cols="6" sm="4">
            <v-card class="mx-auto" max-width="600">
              <v-img class="white--text align-end" height="400px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>

                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>

          </v-col>

          <v-col cols="6" sm="4">
            <v-card class="mx-auto" max-width="600">
              <v-img class="white--text align-end" height="400px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>

                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
  export default {
    name: "ProductsListGrid",
    data: () => ({
      items: [{
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
      ],
      checkbox1: true,
      checkbox2: false,
      min: -50,
      max: 90,
      slider: 40,
      range: [-20, 70],


    }),
    mounted: () => {
      document.querySelector('.v-messages.theme--light').style.display = "none"
    }

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