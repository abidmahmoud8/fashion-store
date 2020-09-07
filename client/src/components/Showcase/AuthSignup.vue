<template>
    <v-container>
        <v-alert v-if="alert" :type="classAlert">
            {{ alert }}
        </v-alert>
        <v-form ref="form" v-model="valid" lazy-validation id="signup">
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
            <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required, passwordRules.min]" :type="show1 ? 'text' : 'password'"
                v-model="password" name="password" label="Entrez votre mot de passe" hint="Minumum 8 charatères"
                @click:append="show1 = !show1">
            </v-text-field>
            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'Vous devez accepter pour continuer!']"
                label="Acceptez-vous ?" required></v-checkbox>
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="signup">
                Enrigistrer
            </v-btn>
        </v-form>
    </v-container>
</template>


<script>
    import gql from 'graphql-tag';
    export default {
        name: "AuthSignup",
        data() {
            return {
                valid: true,
                first_name: '',
                last_name: '',
                adress: '',
                city: '',
                country: '',
                zip: '',
                alert: '',
                classAlert: '',
                nameRules: [
                    v => !!v || 'Il faut remplir le champ',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'Entrez votre mail',
                    v => /.+@.+\..+/.test(v) || 'E-mail doit être validée',
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
                    required: value => !!value || 'Il faut remplir le champ.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                },
            }
        },
        methods: {
            signup() {
                this.$refs.form.validate();
                if(this.$refs.form.validate()) {
                    console.log('okokokok');
                    this.$apollo.mutate({
                        mutation: gql `mutation ($first_name : String!,$last_name : String!,$email : String!, $adress: String!,$city: String!, $country: String!,$zip : String!,$password : String!) {
                            signup(first_name: $first_name, last_name: $last_name, email: $email, adress: $adress, city: $city, country: $country, zip: $zip, password :$password) {
                                id
                            }
                        }`,
                        variables: {
                            first_name: this.first_name,
                            last_name: this.last_name,
                            email: this.email,
                            adress: this.adress,
                            city: this.city,
                            country: this.country,
                            zip: this.zip,
                            password: this.password,
                        }
                    }).then((data) => {
                        console.log(data);
                    }).catch((error) => console.log(error))

                }
            }
        }
    }
</script>