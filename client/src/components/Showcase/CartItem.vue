<template>
    <v-row>
        <v-col cols="4" sm="4">
            <v-card class="mx-auto" height="300px">
                <v-img :src="`http://localhost:4000/images/${JSON.parse(this.products[0].images)[0].filename}`"
                    height="100%" class="white--text text-right pa-2">
                </v-img>
            </v-card>
        </v-col>
        <v-col cols="8" sm="8">
            <h2 class="mb-4">{{this.products[0].title}}</h2>
            <p>Prix : {{this.products[0].price}} €</p>
            <p>Couleur : {{color}}</p>
            <p>Taille : {{size}}</p>
            <p>Quanité : {{qte}}</p>
            <p v-if="this.products[0].discount>0">remise : {{this.products[0].discount}} %</p>
            <p>Prix totale : {{((this.products[0].price * qte / 100) * (100 - this.products[0].discount)).toFixed(2) }}
                €</p>
            <!-- <div>
                    <v-btn width="150px" class="my-2" outlined tile color="black d-block">Supprimer</v-btn>
                </div> -->
        </v-col>
        <hr>

    </v-row>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "CartItem",
        props: ['product'],

        data() {
            return {
                id: this.product.id,
                color: this.product.color,
                size: this.product.size,
                qte: this.product.qte,
                products: null
            }
        },
        beforeMount() {
            axios.get(`http://localhost:4000/api/item/${this.product.id}`)
                .then(response => {
                    this.products = response.data
                    this.images = JSON.parse(this.products[0].images)
                    this.images.forEach(image => {
                        this.slider.push(`http://localhost:4000/images/${image.filename}`)
                    });
                });
        },

    }
</script>