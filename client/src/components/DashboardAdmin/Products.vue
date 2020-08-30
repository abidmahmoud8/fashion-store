<template>
    <v-container>
        <v-data-table :headers="headers" :items="products" :search="search" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-alert v-if="alert" type="error">
                    {{ alert }} a été supprimer
                </v-alert>
                <v-btn class="primary btn-add" to="/admin/products/add">ajouter</v-btn>
                <h2 class="ma-4">Les Produits</h2>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details class="mb-4" style="width:25%">
                </v-text-field>
                <hr>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data: () => ({
            dialog: false,
            headers: [{
                    text: 'Titre',
                    align: 'start',
                    sortable: false,
                    value: 'title',
                },
                {
                    text: 'Quantité',
                    value: 'quantities'
                },
                {
                    text: 'Prix',
                    value: 'price'
                },
                {
                    text: 'Gendre',
                    value: 'gendre'
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false
                },
            ],
            products: [],
            alert: '',
            search: '',

        }),

        created() {
            this.initialize()
        },

        methods: {
            initialize() {
                axios.get('http://localhost:4000/api/item/')
                    .then(response => {
                        this.products = response.data
                    })
            },

            editItem(item) {
                window.location.href = `/admin/products/edit/${item.id}`

            },

            deleteItem(item) {
                axios.delete(`http://localhost:4000/api/item/${item.id}`)
                    .then(response => {
                        console.log(response);
                        this.alert = item.title;
                        const index = this.products.findIndex(product => product.id === item.id)
                        if (~index)
                            this.products.splice(index, 1)
                    });
            },

        },
    }
</script>
<style>
    #app .v-data-table {
        box-shadow: none !important;
        border: none !important
    }
</style>
