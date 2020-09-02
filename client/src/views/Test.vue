<template>
    <v-app>
        <Navbar></Navbar>
        <br><br><br><br><br><br>
        <v-container>
            <v-row>
                <v-col cols="6" sm="6">
                    <h2>List des produits</h2>

                    <v-row>
                        <v-col cols="6" sm="4" v-for="product in products" :key="product.id">
                            <!-- <p> {{ JSON.parse(it[index].images)[0].filename }}</p> -->
                            <v-card class="mx-auto" max-width="300">
                                <!-- :href="`http://localhost:8080/${product.gendre}/product/${product.id}`"> -->
                                <v-img v-if="product.images" class="white--text align-end" height="200px"
                                    :src="`http://localhost:4000/images/${JSON.parse(product.images)[0].filename}`">
                                    <h4 v-if="product.discount>0" class="error"><span class="ml-4">remise de
                                            {{product.discount}} %</span></h4>
                                </v-img>
                                <v-card-subtitle class="pb-0">{{product.title}}</v-card-subtitle>
                                <v-card-text class="text--primary">
                                    <div>Titre : {{product.title}}</div>
                                    <div>Prix : {{product.price.toFixed(2)}} €</div>
                                    <div>couleurs : {{product.colors.replace(",", " ")}}</div>
                                    <div v-if="product.sizes">sizes : {{product.sizes.replace(",", " ")}}</div>
                                    <div>Etat : <span style="color:green" v-if="product.quantities>0">En stock</span><span style="color:red" v-else>Epuisé</span></div>
                                </v-card-text>
                                <v-card-actions>
                                </v-card-actions>
                            </v-card>
                            <v-btn @click="seeDetails(product.id)">Voir les details
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="6" sm="6" style="position:relative">
                    <v-btn href='/testform' style="position:absolute; right:0">Ajouter</v-btn>
                    <br><br><br><br>
                    <v-card class="mx-auto">
                        <v-carousel :show-arrows="false">
                            <v-carousel-item v-for="(item,i) in slider" :key="i" :src="item"></v-carousel-item>
                        </v-carousel>
                    </v-card>
                    <h2>Titre : {{singleProduct.title}}</h2><br>
                    <h3>Price :{{singleProduct.price}} €</h3><br>
                    <h3>Description : </h3>
                    <p>{{singleProduct.long_description}} </p>
                    <h3>Coleurs :{{singleProduct.colors}}</h3><br>
                    <h3>Tailles :{{singleProduct.sizes}}</h3><br>
                    <div>
                        <v-btn width="250px" class="my-2" outlined tile
                            color="black d-block" @click="deleteProduct()">Supprimer le produit</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <br><br><br><br>
        <Footer></Footer>
    </v-app>
</template>
<script>
    import Navbar from "./../components/Showcase/Navbar";
    import Footer from "./../components/Showcase/Footer";
    import gql from 'graphql-tag';

    export default {
        name: "Test",

        components: {
            Navbar,
            Footer,
        },

        data: () => ({
            categoriesList: [],
            products: [],
            singleProduct: [],
            ids: 20,
            images: [],
            slider: [],
        }),
        apollo: {
            categories: gql `
                query {
                    categories {
                    name
                    id
                    }
                }
                `,
            items: gql `
                query {
                    items {
                    id
                    title
                    discount
                    price
                    images
                    colors
                    sizes
                    quantities
                    gendre
                    }
                }
                `,
            item: {
                query: gql `query item($id: ID) {
                        item(id: $id) {
                            id
                            title
                            price
                            long_description
                            images
                            colors
                            sizes
                            quantities
                        }
                    }`,
                variables() {
                    return {
                        id: this.ids,
                    }
                },
            },

        },
        methods: {
            seeDetails(id) {
                this.ids = id;
                this.slider = [];
                this.$apollo.queries.item.refetch();
                this.singleProduct = JSON.parse(JSON.stringify(this.item));
                // this.images = JSON.parse(this.singleProduct.images)
                // this.images.forEach(image => {
                //     console.log(image);
                //     this.slider.push(`http://localhost:4000/images/${image.filename}`)
                // });

                console.log(this.slider);
                console.log(this.images);
            },
            deleteProduct() {
                const id = this.singleProduct.id

                this.$apollo.mutate({
                    mutation: gql `mutation ($id: ID) {
                        deleteItem(id: $id) {
                            id
                        }
                    }`,
                   variables: {
                        id: id,
                    }
                })
                this.$apollo.queries.item.refetch();
                this.$apollo.queries.items.refetch();
                location.reload();



            }
        },
        watch: {
            categories() {
                this.categoriesList = JSON.parse(JSON.stringify(this.categories));
            },
            items() {
                this.products = JSON.parse(JSON.stringify(this.items))
            },
            item() {
                this.singleProduct = JSON.parse(JSON.stringify(this.item));
                this.images = JSON.parse(this.singleProduct.images)
                this.images.forEach(image => {
                    console.log(image);
                    this.slider.push(`http://localhost:4000/images/${image.filename}`)
                });

            }
        },




    };
</script>