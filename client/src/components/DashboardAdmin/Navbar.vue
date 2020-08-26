<template>
  <v-app-bar id="navbar-admin" class="d-flex justify-space-between mb-6" color="gray" light>
    <div class="d-flex align-center justify-space-between">
        <v-btn to="{name : 'Showcase'}" >Site web</v-btn>
    </div>
    <div>
      <v-icon>far fa-user</v-icon>
    </div>
  </v-app-bar>
</template>


<style>
    #app #navbar-admin>.v-toolbar__content {
        width: 100% !important;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }
</style>