<template>
  <v-card
    height="100vh"
    width="100%"
    dark
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Fashion Store
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Tableau de bord', icon: 'mdi-view-dashboard', link:"/admin/dashboard" },
          { title: 'Produits', icon: 'mdi-view-list', link:"/admin/products"},
          { title: 'Commandes', icon: ' mdi-clipboard-check', link:"/admin/commandes"},
          { title: 'Categories', icon: ' mdi-clipboard-check', link:"/admin/categories"},
        ],
        right: null,
      }
    },
  }
</script>