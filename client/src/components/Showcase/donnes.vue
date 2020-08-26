<template>
  <v-item-group>
    <h2>Mes données </h2>
    <hr>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="first_name" :rules="nameRules" label="Nom" required></v-text-field>
        <v-text-field v-model="last_name" :rules="nameRules" label="Prénom" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min]" :type="show1 ? 'text' : 'password'" name="password"
          label="Entrez votre passord" hint="Minumum 8 charatères" @click:append="show1 = !show1"></v-text-field>

        <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min]" :type="show1 ? 'text' : 'password'" name="password2"
          label="Confirmer votre passord" @click:append="show1 = !show1"></v-text-field>


        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'Vous devez accepter pour continuer!']"
          label="Acceptez-vous ?" required></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
          Enrigistrer
        </v-btn>

      </v-form>

    </v-container>
  </v-item-group>
</template>

<script>
  export default {
    data() {
      return {
        tab: null,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Il faut remplir le champ',
        ],
        email: '',
        emailRules: [
          v => !!v || 'Entrez votre mail',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
        checkbox: false,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        passwordRules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },


      }
    },
  }
</script>