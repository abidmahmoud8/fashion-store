<template>
    <v-container>
        <v-alert v-if="alert" type="error">
            {{ alert }} a été supprimer
        </v-alert>
        <v-btn class="primary btn-add" to="/admin/categories/add">ajouter</v-btn>
        <h2 class="ma-4">Les categories</h2>
        <hr>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Nom</th>
                        <th class="text-left">Parent</th>
                        <th class="text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in categories" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.parent }}</td>
                        <td>
                            <v-icon @click="deleteCategory(item)">far fa-trash-alt</v-icon>
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
                categories: null,
                parent: null,
                alert:null
            }
        },
        beforeMount() {
            axios.get('http://localhost:4000/api/category/')
                .then(response => {
                    this.categories = response.data
                    this.categories.forEach(element => {
                        for (let i = 0; i < this.categories.length; i++) {
                            if (element.parent_id == this.categories[i].id)
                                element.parent = this.categories[i].name
                        }
                    });
                })
        },
        
        methods: {
            deleteCategory(item) {
                axios.delete(`http://localhost:4000/api/category/${item.id}`)
                .then(response => {
                    console.log(response);
                    this.alert = item.name;
                   const index = this.categories.findIndex(category => category.id === item.id)  
                   if (~index)  
                     this.categories.splice(index, 1)
                });

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