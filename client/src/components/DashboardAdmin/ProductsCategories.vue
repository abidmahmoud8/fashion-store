<template>
    <v-container>
        <v-alert v-if="alert" :type="classAlert">
            {{ alert }}
            <v-btn text to="/admin/products">retour</v-btn>
        </v-alert>
        <h2 class="ma-4">Selecter des catégories pour ce produis</h2>
        <hr> <br>
        <v-form ref="form">
            <label for="">Select tout les categories : </label>
            <v-treeview v-model="selection" selection-type="independent" :items="categories" selectable></v-treeview>
            <v-btn class="mr-4" @click="submit">submit</v-btn>
        </v-form>
    </v-container>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'ProductsCategories',
        data() {
            return {
                categories: null,
                selection: [],
                alert: "",
                classAlert: ""
            }
        },
        methods: {
            submit() {
                for (const i of Object.keys(this.selection)) {
                    axios.post('http://localhost:4000/api/item_category/', {
                        item_id: this.$route.params.id,
                        category_id: this.selection[i]

                    }).then((res) => {
                        this.alert = "le produit a été ajouter";
                        this.classAlert = "success"
                        console.log(res.data[0]);
                        window.location.href = `/admin/products/`
                    }).catch((error) => {
                        this.alert = "Erreur";
                        this.classAlert = "error"
                        console.log(error);

                    })
                }
            }

        },
        beforeMount() {
            axios.get('http://localhost:4000/api/category/recursive')
                .then(response => {
                    this.categories = response.data
                })
        },


    }
</script>