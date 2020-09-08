<template>
  <v-item-group>
    <h2>Mes commandes</h2>
    <hr>
    <v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Réference</th>
              <th class="text-left">Prix totale</th>
              <th class="text-left">Etat</th>
              <th class="text-left">Status</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="command in commands" :key="command.id">
              <td>{{ command.id }}</td>
              <td>{{ command.total_price }}</td>
              <td>{{ command.payement }}</td>
              <td>{{ command.status }}</td>
              <td><a :href="`http://localhost:8080/dashboard/commandes/${command.id}`">Details</a></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-item-group>
</template>


<script>
import axios from 'axios'; 
  export default {
    data() {
      return {
        id : null,
        commands : [],
        user : []
      } 
    },
    beforeMount() {
      var user = JSON.parse(JSON.stringify(localStorage.getItem('user')))
      this.user.push(JSON.parse(user))
      this.id = JSON.parse(JSON.stringify(localStorage.getItem('user')));
    },

    mounted() {
      axios.get(`http://localhost:4000/api/command/us/${this.id}`)
        .then(response => {
          this.commands = response.data;
          console.log(response.data);
        });
    },


  }
</script>