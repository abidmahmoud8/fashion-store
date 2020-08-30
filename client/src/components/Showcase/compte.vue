<template>
  <v-item-group>
    <h2>Mon compte</h2>
    <hr>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-item>
            <v-card class="d-flex align-center" dark height="200"  to="/dashboard/commandes">
                <div class="card-text flex-grow-1 text-center">
                  Commandes
                </div>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="4">
          <v-item>
            <v-card class="d-flex align-center" dark height="200"  to="/dashboard/info">
                <div class="card-text flex-grow-1 text-center">
                  Informations
                </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<style>
.card-text {
  font-size: 2rem;
}
</style>