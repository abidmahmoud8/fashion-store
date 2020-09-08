<template>
    <v-container>
        <v-alert v-if="alert" :type="classAlert">
            {{ alert }}
        </v-alert>
        <v-form ref="forms" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required, passwordRules.min]" :type="show1 ? 'text' : 'password'" name="password"
                v-model="password" label="Entrez votre passord" hint="Minumum 8 charatères"
                @click:append="show1 = !show1"></v-text-field>
            <v-btn :disabled="!valid" color="success" class="mt-4" @click="signin">
                Se connecter
            </v-btn>
        </v-form>
    </v-container>
</template>


<script>
    import axios from "axios";
    import gql from 'graphql-tag';

    const addUserMutation = gql `
        mutation($id: ID!, $token:String!) {
            addUser(id: $id, token: $token) @client
        }
    `;


    export default {
        name: "AuthSignin",
        data() {
            return {
                alert: '',
                valid: true,
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
            addUser(id, token) {
                return this.$apollo.mutate({
                        mutation: addUserMutation,
                        variables: {
                            id,
                            token,
                        }
                    })
            },

            signin() {
                this.$apollo.mutate({
                    mutation: gql `mutation ($email: String!, $password: String!) {
                        signin(email: $email, password: $password) {
                            id
                            token
                        }
                    }`,
                    variables: {
                        email: this.email,
                        password: this.password,
                    }
                }).then(async (data) => {
                    localStorage.setItem("token", data.data.signin.token);
                    localStorage.setItem("user", data.data.signin.id);
                    await this.addUser(data.data.signin.id, data.data.signin.token)
                    window.location.href = '/dashboard/compte'
                }).catch((error) => {
                    this.classAlert = "error";
                    let err = error.message.replace("GraphQL error: ", "");
                    this.alert = err;
                    console.error(error.message)
                })
            }
        }
    }
</script>