<template>
  <v-container style="margin-top:94px">
    <v-row>
      <v-col cols="3" sm="3">
        <v-navigation-drawer style="margin-top:100px">
          <v-list dense rounded>
            <v-list-item to="/dashboard/compte">
              <v-list-item-content>
                <v-list-item-title >Mon comptes</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/dashboard/commandes">
              <v-list-item-content>
                <v-list-item-title>Mes commandes</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/dashboard/adresses">
              <v-list-item-content>
                <v-list-item-title>Mes adresses</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/dashboard/donnes">
              <v-list-item-content>
                <v-list-item-title>Mes donnés</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

      </v-col>
      <v-col cols="9" sm="9">
        <router-view></router-view>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: "DashboardUser",
  }
</script>