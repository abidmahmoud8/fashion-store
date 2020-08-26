<template>
  <div id="NavbarCategory">
    <div class="text-center py-2">
      <v-menu offset-y v-for="(menu, index) in menus" :key="index">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            {{menu}}
          </v-btn>
        </template>
        <v-row no-gutters>
          <v-col cols="12" sm="3">
            <v-list>
              <v-list-item>
                <v-list-item-title light>ok</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list>
              <v-list-item>
                <v-list-item-title light>ok</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list>
              <v-list-item>
                <v-list-item-title light>ok</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list>
              <v-list-item>
                <v-list-item-title light>ok</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list>
              <v-list-item>
                <v-list-item-title light>ok</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list>
              <v-list-item>
                <v-list-item-title light>ok</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-menu>
    </div>

  </div>

</template>
<script>
  export default {
    name: "NavbarCategory",
    data: () => ({
      menus: ['categories-1', 'categories-2', 'categories-3', 'categories-4', 'categories-5']
    }),

  }
</script>
<style scoped>
  #NavbarCategory {
    text-align: center;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    position: fixed;
    margin-top: 64px;
  }

  #NavbarCategory>div {
    display: inline-block;
  }

  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #fff;
  }

  #app .v-menu__content {
    min-width: auto !important;
    min-width: 90% !important;
    text-align: center;
  }
</style>