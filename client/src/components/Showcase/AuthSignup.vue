<template>
    <v-container>
        <v-alert v-if="alert" :type="classAlert">
            {{ alert }}
        </v-alert>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="first_name" :rules="nameRules" label="Nom" required></v-text-field>
            <v-text-field v-model="last_name" :rules="nameRules" label="Prénom" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
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
    import axios from "axios"

    export default {
        name: "AuthSignup",
        data() {
            return {
                valid: true,
                first_name: '',
                last_name: '',
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
                this.$refs.form.validate()
                axios.post('http://localhost:4000/api/auth/signup', {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        email: this.email,
                        password: this.password
                    })
                    .then((res) => {
                        console.log(res);
                        window.location.href = `/auth`
                    })
                    .catch((error) => {
                        this.classAlert = "error"
                        this.alert = error.response.data.error.sqlMessage;
                    })

            }
        }
    }
</script>