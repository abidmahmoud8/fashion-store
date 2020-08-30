<template>
  <v-card style="margin-top:64px; padding-top:64px">
    <v-tabs v-model="tab" background-color="" centered>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">SE CONNECTER</v-tab>
      <v-tab href="#tab-2">S'INSCRIRE</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :value="'tab-' + 1">
                    <AuthSignin></AuthSignin>

      </v-tab-item>
      <v-tab-item :value="'tab-' + 2">
            <AuthSignup></AuthSignup>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  import axios from "axios"
  import AuthSignup from "./AuthSignup";
  import AuthSignin from "./AuthSignin";
  export default {
    data() {
      return {
        tab: null,
        valid: true,
        first_name: '',
        last_name: '',
        nameRules: [
          v => !!v || 'Il faut remplir le champ',
        ],
        email: '',
        emailRules: [
          v => !!v || 'Entrez votre mail',
          v => /.+@.+\..+/.test(v) || 'E-mail doi etre validée',
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
        password: '',
        passwordRules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },


      }
    },
    components : {
      AuthSignup,
      AuthSignin,
    },
    methods: {
      signup() {
        this.$refs.form.validate()

        axios.post('http://localhost:4000/api/auth/signup', {
          first_name : this.first_name,
          last_name : this.last_name,
          email : this.email,
          password : this.password
        })
        .then((res) => {
          console.log(res);
            window.location.href = `/`
        })
        .catch((error) => {
            console.log(error.response.data.error.sqlMessage);
        })

      }
    }
  }
</script>
<style scoped>
#app .v-card.v-sheet{
    box-shadow: none !important;
}
</style>