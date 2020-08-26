<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules" label="Nom" required></v-text-field>
            <br>
            <label for="">Parent : </label>
            <v-treeview :active.sync="selection" :items="categories" return-object activatable></v-treeview>
            <br>
            <label for="">Image : </label>
            <br><br>
            <input type="file" v-on:change="uploadFile" class="form-control">
            <br><br>
            <v-btn class="mr-4" @click="submit">submit</v-btn>
            <v-btn to="/admin/categories">clear</v-btn>
        </v-form>
    </v-container>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'CategoriesForm',
        data() {
            return {
                selection: [],
                files: null,
                items: [],
                categories: null,
                valid: true,
                file: '',
                name: '',
                image: '',
                nameRules: [
                    v => !!v || 'Il faut remplir le champ',
                ],
            }
        },
        methods: {
            submit() {
                const formData = new FormData();
                for (const i of Object.keys(this.files)) {
                    formData.append('image', this.files[i])
                    formData.append('name', this.name)
                    formData.append('parent_id', this.selection[0].id)
                    formData.append('level', this.selection[0].level + 1)
                }
                axios.post('http://localhost:4000/api/category/', formData)
                    .then((res) => {
                        console.log(res)
                        console.log(formData)
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                        console.log(formData)
                    })
            },
            uploadFile(event) {
                this.files = event.target.files
            },
        },
        beforeMount() {
            axios.get('http://localhost:4000/api/category/recursive')
                .then(response => {
                    this.categories = response.data
                })
        },
    }
</script>