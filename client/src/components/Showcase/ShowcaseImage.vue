<template>
    <div id="ShowcaseImage">
        <div class="img-container">
            <v-img width="100%" :src="this.bg[0].imageUrl" alt="">
                <div class="d-flex justify-center flex-column text-container white--text my-4 mx-4">
                    <h2 class="shad">Les meilleurs produits du marché</h2>
                    <p class="shad">Découvrez nos selections signé par les meilleurs designers.</p>
                    <div>
                        <v-btn width="250px" color="gray" class="my-2 bx" outlined tile>Collection d'été</v-btn>
                    </div>
                    <div>
                        <v-btn width="250px" color="gray" class="my-2 bx" outlined tile>Voir nos offres</v-btn>
                    </div>
                </div>
            </v-img>
        </div>
        <div>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
    export default {
        name: "ShowcaseImage",
        data: () => ({
            categories : null, 
            bg : '',
        }),     

        beforeMount() {
            axios.get('http://localhost:4000/api/category/')
                .then(response => {
                    this.categories = response.data
                    this.bg = this.categories.filter(category => category.name == this.$route.path.substring(1));
                    this.categoriesfilter = this.categories.filter(category => category.gendre == this.$route.path.substring(1));
                    
                })
        },
        mounted() {
            console.log(this.categories);
        },
        watch:{
            $route (){
                this.bg = this.categories.filter(category => category.name == this.$route.path.substring(1));
            }
        },

        
    }
</script>
<style>
    #ShowcaseImage {
        margin-top: 100px;
    }

    .img-container {
        height: 500px;
        overflow: hidden;
    }

    .d-block {
        display: block !important;
    }

    .text-container {
        height: 100%;
    }
    .shad {
        text-shadow: 1px 1px 1px  #000000 !important;

    }
    .bx {
        box-shadow: 1px 1px 1px  #000000 !important;

    }
</style>