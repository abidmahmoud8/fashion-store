<template>
    <div id="ShowcaseImage">
        <div class="img-container">
            <v-img width="100%" src="https://www.stylior.com/stylior/site/images/home/slider_1.jpg" alt="">
                <div class="d-flex justify-center flex-column text-container white--text my-4 mx-4">
                    <h2>Les meilleurs produits du marché</h2>
                    <p>Découvrez nos selections signé par les meilleurs designers.</p>
                    <div>
                        <v-btn width="250px" class="my-2" outlined tile color="white d-block">Collection d'été</v-btn>
                    </div>
                    <div>
                        <v-btn width="250px" class="my-2" outlined tile color="white d-block">Voir nos offres</v-btn>
                    </div>

                </div>
            </v-img>
        </div>
        <div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "ShowcaseImage",
        data: () => ({
            menus: ['categories-1', 'categories-2', 'categories-3', 'categories-4', 'categories-5']
        }),

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
</style>