<template>
    <v-container>
        <v-alert v-if="alert" type="error">
            {{ alert }} a été supprimer
        </v-alert>
        <v-btn class="primary btn-add" to="/admin/products/add">ajouter</v-btn>
        <h2 class="ma-4">Les Produits</h2>
        <hr>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Titre</th>
                        <th class="text-left">Quantité</th>
                        <th class="text-left">Prix</th>
                        <th class="text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.id">
                        <td>{{ item.title }}</td>
                        <td>{{ item.quantities }}</td>
                        <td>{{ item.price }}</td>
                        <td>
                            <v-icon class="mr-2" @click="editProduct(item.id)">far fa-edit</v-icon>
                            <v-icon @click="deleteProduct(item)">far fa-trash-alt</v-icon>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                products: null,
                alert:null
            }
        },
        beforeMount() {
            axios.get('http://localhost:4000/api/item/')
                .then(response => {
                    this.products = response.data
                })
        },
        
        methods: {
            deleteProduct(item) {
                axios.delete(`http://localhost:4000/api/item/${item.id}`)
                .then(response => {
                    console.log(response);
                    this.alert = item.title;
                   const index = this.products.findIndex(product => product.id === item.id)  
                   if (~index)  
                     this.products.splice(index, 1)
                });

            },
            editProduct(id) {
                window.location.href = `/admin/products/edit/${id}`
            }
        }
    }
</script>

<style>
    .btn-add {
        float: right;
        margin-bottom: 1rem;
    }
</style>