<template>
    <v-container>
        <h2 class="my-8" @click="ok">LES NOUVEAUTÉS : </h2>
        <v-sheet class="mx-auto">
            <v-slide-group v-model="model" class="" show-arrows>
                <v-slide-item v-for="product in products" :key="product.id">
                    <v-card color="grey" class="ma-4" height="300" width="200"
                        :href="`http://localhost:8080/${product.gendre}/product/${product.item_id}`">
                        <v-img :src="`http://localhost:4000/images/${JSON.parse(product.images)[0].filename}`"
                            height="100%" class="white--text text-right pa-2">
                            <h5 class="Newest-title">Prix : {{product.price}}</h5>
                            <h5 v-if="product.discount>0" style="background-color:red;color:white;width:20%"> -
                                {{product.discount}} %</h5>
                        </v-img>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>

    </v-container>
</template>
<script>
    import axios from 'axios';
    import gql from 'graphql-tag';

    export default {
        name: "Newest",
        data: () => ({
            model: null,
            categories: [],
            categoriesfilter: [],
            categoriesfilterNew: [],
            products: [],
            gendres: ['hommes', 'femmes', 'enfants'],
            gendre: null
        }),
        mounted() {
            this.gendres.forEach(element => {
                if (this.$route.path.substring(1).charAt(0) == element.charAt(0)) {
                    this.gendre = element;
                }
            });
        },
        apollo: {
            categorybyGendreAndName: {
                query: gql `query categorybyGendreAndName($name: String!, $gendre: String!) {
                        categorybyGendreAndName(name: $name, gendre: $gendre) {
                            name
                            items {
                                id
                                item_id
                                title
                                gendre
                                images
                                price
                                discount
                            }
                        }
                    }`,
                variables() {
                    return {
                        name: "nouveautés",
                        gendre: this.gendre,
                    }
                },
            },

        },
        watch: {
            $route() {
                this.gendres.forEach(element => {
                    if (this.$route.path.substring(1).charAt(0) == element.charAt(0)) {
                        this.gendre = element;
                    }
                });
                this.products = JSON.parse(JSON.stringify(this.categorybyGendreAndName))[0].items;
            },
            categorybyGendreAndName() {
                this.products = JSON.parse(JSON.stringify(this.categorybyGendreAndName))[0].items
            },
        },
        methods: {
            ok() {
                console.log(this.$apollo.queries.categorybyGendreAndName);
            }
        }
    }
</script>
<style>
    .Newest-title {
        background-color: rgba(0, 0, 0, 0.4);
        text-align: left !important;
        position: relative;
        top: 80% !important;
    }
</style>