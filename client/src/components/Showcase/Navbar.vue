<template>
  <v-app-bar id="navbar-showcase" class="d-flex justify-space-between mb-6" app color="white" light>
    <div class="d-flex align-center justify-space-between">
      <a href="/"><img alt="Vuetify Logo" class="shrink mr-2" contain src="../../assets/logo.png" /></a>
    </div>
    <div class="d-flex justify-center align-center">
      <div>
        <v-btn to="/femmes" text>
          <span class="mr-2">Femmes</span>
        </v-btn>
        <v-btn to="/hommes" text>
          <span class="mr-2">Hommes</span>
        </v-btn>
        <v-btn to="/enfants" text>
          <span class="mr-2">Enfants</span>
        </v-btn>
      </div>
    </div>
    <div>
      <v-btn v-if="!auth" href="/auth" text>
        <span class="mr-2">Se connecter/S'inscrire</span>
      </v-btn>
      <v-menu open-on-hover offset-y v-if="auth">
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
      <v-btn class="ml-4" href="/cart" style="position:relative;display:inline-block;padding-top:7.5px">
        <v-icon>fas fa-shopping-cart</v-icon>
        <span class="e">{{ panier }}</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
  import gql from 'graphql-tag'
  export default {
    data() {
      return {
      }
    },
    apollo: {
      categories: gql `
      query {
        categories {
          id
          name
        }
      }
    `
    },

    computed: {
      auth: function () {
        if (localStorage.getItem("token")) {
          return true
        } else {
          return false
        }
      },
      panier: function () {
        if (localStorage.getItem("products")) {
          let products = localStorage.getItem("products").split('{"id":');
          let c = 0;
          for (let i = 1; i < products.length; i++) {
            c++
          }
          return c
        } else return 0
      }
    },
    watch: {},
    methods: {
      logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = '/auth'
      },
      goHome() {
        window.location.href = '/'
      },
    },

  }
</script>

<style>
  #app .v-list {
    padding: 0 !important;
  }

  #app .v-list-item {
    padding: 10px !important;
    min-height: auto !important;
  }

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

  .e {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    border: 0;
    font: inherit;
    display: block;
    padding: 0 5px;
    position: absolute;
    top: 10px;
    background: #FF0002;
    color: #FFFFFF;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    text-align: center;
    font-weight: bold;
    line-height: 22px;
    left: 35px;
    font-size: 14px;
  }
</style>