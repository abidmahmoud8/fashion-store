<template>
  <v-container class="">
    <h2 class="my-8">ACHETEZ PAR CATÉGORIE : </h2>

    <v-row no-gutters>

      <v-col cols="12" sm="3">
        <v-card href="/hommes" height="400px" class="" outlined tile>
          <v-img src="https://i.pinimg.com/474x/bf/3f/92/bf3f9286d12627cfc09765b7d322a23c.jpg" height="100%"
            class="white--text text-right pa-2">
            <h3>Sac a dos</h3>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card href="/hommes" height="400px" class="" outlined tile>
          <v-img src="https://i.pinimg.com/474x/bf/3f/92/bf3f9286d12627cfc09765b7d322a23c.jpg" height="100%"
            class="white--text text-right pa-2">
            <h3>Sac a dos</h3>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card href="/hommes" height="400px" class="" outlined tile>
          <v-img src="https://i.pinimg.com/474x/bf/3f/92/bf3f9286d12627cfc09765b7d322a23c.jpg" height="100%"
            class="white--text text-right pa-2">
            <h3>Sac a dos</h3>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-card href="/hommes" height="400px" class="" outlined tile>
          <v-img src="https://i.pinimg.com/474x/bf/3f/92/bf3f9286d12627cfc09765b7d322a23c.jpg" height="100%"
            class="white--text text-right pa-2">
            <h3>Sac a dos</h3>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card dark height="400px" class="px-4 d-flex flex-column justify-center" outlined tile>
          <h3>Plus de catégories : </h3>
          <div class="my-4">
            <v-chip class="mr-2 my-2" filter outlined>Elevator</v-chip>
            <v-chip class="mr-2 my-2" filter outlined>Elevator</v-chip>
            <v-chip class="mr-2 my-2" filter outlined>Elevator</v-chip>
            <v-chip class="mr-2 my-2" filter outlined>Elevator</v-chip>
            <v-chip class="mr-2 my-2" filter outlined>Elevator</v-chip>
            <v-chip class="mr-2 my-2" filter outlined>Elevator</v-chip>
            <v-chip class="mr-2 my-2" filter outlined>Elevator</v-chip>
            <v-chip class="mr-2 my-2" filter outlined>Elevator</v-chip>
          </div>

        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: "GridCategory"
  }
</script>