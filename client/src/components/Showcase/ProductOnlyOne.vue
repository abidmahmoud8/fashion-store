<template>
  <v-container fluid style="padding : 120px">
    <v-row>
      <v-col cols="6" sm="6">
        <v-card class="mx-auto">
          <v-carousel :continuous="false" :cycle="cycle" :show-arrows="false" hide-delimiter-background
            delimiter-icon="mdi-minus" height="600">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6">
        <h2>Title</h2>
        <h3>Price : 25$</h3>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia suscipit cupiditate est illum doloribus vel
          officiis voluptatem dolorem assumenda, voluptate nesciunt iste obcaecati fugiat rem? Temporibus suscipit ut
          porro error cupiditate veniam explicabo repellat odit ipsam necessitatibus tenetur aliquid recusandae dolorem
          ipsum, vero natus eaque possimus sequi excepturi magnam reprehenderit.</p>
        <v-select :colors="colors" label="Coleur" solo></v-select>
        <v-select :colors="colors" label="Taille" solo></v-select>

        <div>
          <v-btn width="250px" class="my-2" outlined tile color="black d-block">Ajouter au panier</v-btn>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "ProductOnlyOne",
    data() {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: false,
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>