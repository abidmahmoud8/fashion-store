<template>
    <v-container>
        <h2>Mes informations</h2>
        <hr><br><br>
        <v-form ref="form" lazy-validation id="signup">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="this.user.first_name" label="Nom" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="this.user.last_name" label="Prénom" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="this.user.email" label="E-mail" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="this.user.adress" label="Adresse" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="4">
                    <v-text-field v-model="this.user.city" label="Ville" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-text-field v-model="this.user.country" label="Pay" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-text-field v-model="this.user.zip" label="Code postale" required></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </v-container>

</template>


<script>
    import gql from 'graphql-tag';
    const userQuery = gql `
    {
        User @client {
            id
            token
        }
    }
    `;

    export default {

        name: "info",
        data() {
            return {
                ids: null,
            }
        },
        apollo: {
            user: {
                query: gql `query user($id: ID) {
                        user(id: $id) {
                            last_name
                            first_name
                            email
                            adress
                            zip
                            city
                            country                            
                        }
                    }`,
                variables() {
                    return {
                        id: this.ids
                    }
                },
            },
        },

        watch: {
            user() {
                this.ids = JSON.parse(JSON.stringify(localStorage.getItem('user')))
            }
        },
        beforeCreated() {
            this.ids = JSON.parse(JSON.stringify(localStorage.getItem('user')))
        },
        mounted() {
            this.first_name = this.user.first_name
            this.last_name = this.user.last_name
            this.email = this.user.email
            this.adress = this.user.adress
            this.city = this.user.city
            this.country = this.user.country
            this.zip = this.user.zip
        },
    }
</script>