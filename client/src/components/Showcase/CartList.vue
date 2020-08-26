<template>
    <v-container fluid style="padding : 120px">
        <v-row>
            <v-col cols="8" sm="8">
                <v-row>
                    <v-col cols="4" sm="4">
                        <v-card class="mx-auto" height="300px">
                            <v-img src="https://i.pinimg.com/474x/bf/3f/92/bf3f9286d12627cfc09765b7d322a23c.jpg"
                                height="100%" class="white--text text-right pa-2">
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="8" sm="8">
                        <h2 class="mb-4">Title</h2>
                        <p>Price : 25$</p>
                        <p>Couleur : rouge</p>
                        <p>Taille : XL</p>
                        <p>Couleur : rouge</p>
                        <p>Quanité : 1</p>
                        <div>
                            <v-btn width="150px" class="mr-2" outlined tile color="black d-block">Modifier</v-btn>
                            <v-btn width="150px" class="my-2" outlined tile color="black d-block">Supprimer</v-btn>
                        </div>
                    </v-col>
                </v-row>
                <hr>
            </v-col>

            <v-col cols="4" sm="4">
                <h2 class="mb-4">Aperçu</h2>
                <p>Prix totale : 25$</p>
                <p>Quanité : 4</p>
                <v-btn width="250px" class="my-2" outlined tile color="black d-block">Valider la commande</v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "CartList",
        data() {
            return {
                colors: [
                    'green',
                    'secondary',
                    'yellow darken-4',
                    'red lighten-2',
                    'orange darken-1',
                ],
                cycle: false,
                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],
            }
        },
    }
</script>