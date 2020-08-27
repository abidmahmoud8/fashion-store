<template>
    <v-container>
        <v-alert v-if="alert" :type="classAlert">
            {{ alert }}
            <v-btn text to="/admin/categories">retour</v-btn>
        </v-alert>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules" label="Nom" required></v-text-field>
            <br>
            <label for="">Parent : </label>
            <v-treeview :active.sync="selection" :items="categories" return-object activatable></v-treeview>
            <label for="">Genre : </label>

            <v-radio-group v-model="radios" @change="show" :mandatory="false">
                <v-radio label="femmes" value="femmes"></v-radio>
                <v-radio label="hommes" value="hommes"></v-radio>
                <v-radio label="enfants" value="enfants"></v-radio>
            </v-radio-group>

            <br>
            <label for="">Image : </label>
            <br><br>
            <input type="file" v-on:change="uploadFile" class="form-control" required>
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
                alert: '',
                classAlert: '',
                radios : 'femmes',
                nameRules: [
                    v => !!v || 'Il faut remplir le champ',
                ],
            }
        },
        methods: {
            show() {
                console.log(this.radios);
            },
            submit() {
                const formData = new FormData();
                if(this.files) {
                    for (const i of Object.keys(this.files)) {
                        formData.append('image', this.files[i])
                    }
                } else {
                    this.classAlert = "error"
                    this.alert = "Ajouter une photo";
                }
                formData.append('gendre', this.radios)
                if(this.name) {
                    formData.append('name', this.name)
                } else {
                    this.classAlert = "error"
                    this.alert = "Ajouter un nom";
                }
                if (this.selection[0]) {
                    formData.append('parent_id', this.selection[0].id)
                    formData.append('level', this.selection[0].level + 1)

                } else {
                    formData.append('level', 0)
                }
                console.log(formData);
                axios.post('http://localhost:4000/api/category/', formData)
                    .then((res) => {
                        this.alert = "la catégorie a été ajouter";
                        this.classAlert = "success"
                        console.log(res);

                    })
                    .catch((error) => {
                        console.log(error);
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