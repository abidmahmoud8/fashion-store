<template>
    <v-container class="">
        <h2 class="my-8">LES NOUVEAUTÉS : </h2>
        <v-sheet class="mx-auto">
            <v-slide-group v-model="model" class="" show-arrows>
                <v-slide-item v-for="product in products" :key="product.id">
                    <v-card color="grey" class="ma-4" height="300" width="200" :href="`http://localhost:8080/${product.gendre}/product/${product.item_id}`">
                        <v-img :src="`http://localhost:4000/images/${JSON.parse(product.images)[0].filename}`"
                            height="100%" class="white--text text-right pa-2">
                            <h5 class="Newest-title">Prix : {{product.price}}</h5>
                            <h5 v-if="product.discount>0" style="background-color:red;color:white;width:20%"> - {{product.discount}} %</h5>
                        </v-img>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>

    </v-container>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "Newest",
        data: () => ({
            model: null,
            categories:[],
            categoriesfilter:[],
            categoriesfilterNew:[],
            products : []
        }),
        beforeMount() {
            axios.get('http://localhost:4000/api/category/')
                .then(response => {
                    this.categories = response.data
                    this.categoriesfilterNew = this.categories.filter(category => (category.name == "nouveautés" && category.gendre == this.$route.path.substring(1)));
                    axios.get(`http://localhost:4000/api/item/cat/${this.categoriesfilterNew[0].id}`)
                    .then(response => {
                        this.products = response.data.reverse()
                    });
                })
        },
        watch: {
            $route() {
                this.categoriesfilterNew = this.categories.filter(category => (category.name == "nouveautés" && category.gendre == this.$route.path.substring(1)));
                axios.get(`http://localhost:4000/api/item/cat/${this.categoriesfilterNew[0].id}`)
                    .then(response => {
                        this.products = response.data
                    });
           }
        },
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