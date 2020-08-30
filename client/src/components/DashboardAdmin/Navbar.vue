<template>
  <v-app-bar id="navbar-admin" class="d-flex justify-space-between mb-6" color="gray" light>
    <div class="d-flex align-center justify-space-between">
        <v-btn to="{name : 'Showcase'}" >Site web</v-btn>
    </div>
    <div>
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" href="/dashboard/compte">
            Mon compte
          </v-btn>
        </template>
        <v-list>
          <v-list-item href="/admin/dashboard">
            <v-list-item-title light>admin</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list>
          <v-list-item href="/dashboard/compte">
            <v-list-item-title light>Compte</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item href="/dashboard/commandes">
            <v-list-item-title light>Commandes</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item>
            <v-list-item-title light @click="logout">Deconnexion <v-icon class="mr-2">fas fa-sign-out-alt</v-icon>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </div>
  </v-app-bar>
</template>
<script>
export default {
  methods : {
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/'
    }
  }
}
</script>

<style>
    #app #navbar-admin>.v-toolbar__content {
        width: 100% !important;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }
    aside {
      position: fixed;
      width: 600px;
    }
</style>