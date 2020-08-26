<template>
  <v-container>

    <v-item-group>
      <h2>Tableau de bord</h2>
      <hr>
      <v-row>
        <v-col cols="12" md="6">
          <v-item>
            <v-card class="d-flex align-center" dark height="200" to="/admin/settings">
              <div class="card-text flex-grow-1 text-center">
                Paramètres
              </div>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="6">
          <v-item>
            <v-card class="d-flex align-center" dark height="200" to="/admin/products">
              <div class="card-text flex-grow-1 text-center">
                Produits
              </div>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="6">
          <v-item>
            <v-card class="d-flex align-center" dark height="200" to="/admin/commandes">
              <div class="card-text flex-grow-1 text-center">
                Commandes
              </div>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="6">
          <v-item>
            <v-card class="d-flex align-center" dark height="200" to="/admin/categories">
              <div class="card-text flex-grow-1 text-center">
                Categories
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>

</template>

<style>
  .card-text {
    font-size: 2rem;
  }
</style>