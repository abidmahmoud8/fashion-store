<template>
    <v-container class="">
        <h2 class="my-8">LES NOUVEAUTÉS : </h2>
        <v-sheet class="mx-auto">
            <v-slide-group v-model="model" class="" show-arrows>
                <v-slide-item v-for="n in 15" :key="n">
                    <v-card color="grey" class="ma-4" height="300" width="200">
                        <v-img src="https://i.pinimg.com/474x/bf/3f/92/bf3f9286d12627cfc09765b7d322a23c.jpg"
                            height="100%" class="white--text text-right pa-2">
                            <h3 class="Newest-title">Sac a dos</h3>
                            <h5 class="Newest-title">Prix : 25$</h5>
                        </v-img>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>

    </v-container>
</template>
<script>
    export default {
        name: "Newest",
        data: () => ({
            model: null,
        }),

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