<template>
    <v-container>
        <h2>Mes informations</h2>
        <hr><br><br>
        <v-form ref="form" lazy-validation id="signup">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="first_name" :rules="nameRules" label="Nom" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="last_name" :rules="nameRules" label="Prénom" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="adress" :rules="nameRules" label="Adresse" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="4">
                    <v-text-field v-model="city" :rules="nameRules" label="Ville" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-text-field v-model="country" :rules="nameRules" label="Pay" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-text-field v-model="zip" :rules="nameRules" label="Code postale" required></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </v-container>

</template>


<script>
    export default {
        name: "info",
        data() {
            return {
                valid: true,
                first_name: '',
                last_name: '',
                adress: '',
                city: '',
                country: '',
                zip: '',
                email: '',
                user : [],
            }
        },
        mounted () {
          var user = JSON.parse(JSON.stringify(localStorage.getItem('user')))
          this.user.push(JSON.parse(user))
          this.first_name = this.user[0].first_name
          this.last_name = this.user[0].last_name
          this.email = this.user[0].email
          this.adress = this.user[0].adress
          this.city = this.user[0].city
          this.country = this.user[0].country
          this.zip = this.user[0].zip
        }
    }
</script>