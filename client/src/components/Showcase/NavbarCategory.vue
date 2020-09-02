<template>
  <div id="NavbarCategory" @click="ok">
    <div class="text-center py-2">
      <!-- <v-menu open-on-hover offset-y v-for="menu in this.menus" :key="menu.id" >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" @click="goto(menu.id)" v-if="menu.level == 1">
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
      </v-menu> -->
    </div>

  </div>

</template>
<script>

  import gql from 'graphql-tag';
const myQuery = gql`
  query categories {
    categories{
      id
   }
}`

  export default {
    // apollo: {
    //   category: {
    //     query: gql`categories{id}`,
        // Static parameters
        // variables () {
        //   // Use vue reactive properties here
        //   return {
        //       id: 1,
        //   }
        // },
    //   }
    // },
    data() {
      return {
        categoriesfilter : [],
        menus : [],
      }
    },  
  apollo: {
    categories: gql`
      query {
        categories {
          name
          id
        }
      }
    `,
  },


    mounted() {
      this.$apollo.queries.books.refetch();
        this.categoriesfilter = this.categories.filter(category => category.gendre.charAt(0) == this.$route.path.substring(1).charAt(0))
        this.menus = []
        this.menus = this.categoriesfilter[0].children
        this.categoriesfilter.forEach(element => {
            this.menus.push(element)
        });


    },
    watch: {
      $route() {
          this.categoriesfilter = this.categories.filter(category => category.gendre.charAt(0) == this.$route.path.substring(1).charAt(0))
          this.menus = []
          this.menus = this.categoriesbyGendre[0].children
          this.categoriesfilter.forEach(element => {
              this.menus.push(element)
          });
          
      },
      categories() {
        this.categoriesfilter = this.categories.filter(category => category.gendre.charAt(0) == this.$route.path.substring(1).charAt(0))
        this.menus = []
        this.menus = this.categoriesfilter[0].children
        this.categoriesfilter.forEach(element => {
            this.menus.push(element)
        });
      }
    },
    methods : {
      goto(id) {
        window.location.href = `http://localhost:8080/${this.categoriesfilter[0].gendre}/products/${id}`
      },
      ok() {
        console.log(this.categories);
      }
    },

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