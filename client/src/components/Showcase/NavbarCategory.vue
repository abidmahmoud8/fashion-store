<template>
  <div id="NavbarCategory">
    <div class="text-center py-2">
      <v-menu open-on-hover offset-y v-for="menu in this.menus" :key="menu.id" >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" @click="goto(menu.id)">
            {{menu.name}}
          </v-btn>
        </template>
        <v-row no-gutters>
          <v-col cols="12" sm="4" v-for="submenu in menu.children" :key="submenu.id" @click="goto(submenu.id)">
            <v-list>
              <v-list-item>
                <v-list-item-title light>{{submenu.name}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>

        </v-row>
      </v-menu>
    </div>

  </div>

</template>
<script>
import axios from 'axios';
  export default {
    name: "NavbarCategory",
    
    data: () => ({
      menus: ['categories-1', 'categories-2', 'categories-3', 'categories-4', 'categories-5']
    }),
     beforeMount() {
      axios.get('http://localhost:4000/api/category/recursive')
        .then(response => {
          this.categories = response.data
          this.categoriesfilter = this.categories.filter(category => category.gendre.charAt(0) == this.$route.path.substring(1).charAt(0));
          this.menus = this.categoriesfilter[0].children;
       })
    },
    watch: {
      $route() {
        this.categoriesfilter = this.categories.filter(category => category.gendre.charAt(0) == this.$route.path.substring(1).charAt(0))
        this.menus = this.categoriesfilter[0].children;
      }
    },
    methods : {
      goto(id) {
        window.location.href = `http://localhost:8080/${this.categoriesfilter[0].gendre}/products/${id}`
      }
    }
  }
</script>
<style scoped>
  #NavbarCategory {
    text-align: center;
    width: 100%;
    background-color: #fff;
    z-index: 5;
    position: fixed;
    margin-top: 64px;
    box-shadow: 0px 5px 5px 0px rgba(173,173,173,1);
  }
  #NavbarCategory>div {
    display: inline-block;
  }
  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #fff;
  }
  #app .v-menu__content {
    min-width: auto !important;
    min-width: 66% !important;
    text-align: center;
  }
</style>
