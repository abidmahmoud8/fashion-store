<template>
    <v-container>
        <v-alert v-if="alert" :type="classAlert">
            {{ alert }}
            <v-btn text to="/admin/">retour</v-btn>
        </v-alert>
        <div class="d-flex justify-space-between">
            <h2 class="ma-4">Editer un produit</h2>
            <v-btn id="retour" text to="/admin/">retour</v-btn>
        </div>
        <hr>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="title" :rules="nameRules" label="Title" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
                    <v-text-field v-model="price" :rules="nameRules" label="Prix" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
                    <v-text-field v-model="quantities" :rules="nameRules" label="Quantité" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
                    <v-text-field v-model="discount" :rules="nameRules" label="Remise" required></v-text-field>
                </v-col>
            </v-row>
            <br>
            <label for="">Genre : </label>
            <v-radio-group v-model="gendre" @change="show" :mandatory="false">
                <v-radio label="femmes" value="femmes"></v-radio>
                <v-radio label="hommes" value="hommes"></v-radio>
                <v-radio label="enfants" value="enfants"></v-radio>
            </v-radio-group>

            <br>
            <v-select v-model="valueColors" :items="colors" attach chips label="Couleurs" multiple></v-select>
            <br>
            <v-select v-model="valueSizes" :items="sizes" attach chips label="Tailles" multiple></v-select>
            <br><br>
            <v-textarea rows="1" counter label="Description courte" :rules="rulesShort" v-model="short_description">
            </v-textarea>
            <v-textarea counter label="Description Détaillé" :rules="rulesLong" v-model="long_description"></v-textarea>
            <v-btn class="mr-4" @click="submit">submit</v-btn>
            <v-btn to="/admin/">clear</v-btn>
        </v-form>
    </v-container>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'FormEdit',
        data() {
            return {
                product: [],
                selection: [],
                files: null,
                colors: ['rouge', 'vert', 'noire', 'blanc'],
                valueColors: [],
                sizes: ['s', 'm', 'l', 'xl'],
                valueSizes: [],
                categories: null,
                valid: true,
                file: '',
                filesTab: [],
                title: '',
                image: '',
                alert: '',
                classAlert: '',
                gendre : 'femmes',
                quantities: 0,
                nameRules: [
                    v => !!v || 'Il faut remplir le champ',
                ],
                discount: 0,
                price: 0,
                short_description: '',
                rulesShort: [v => v.length <= 25 || 'Max 25 characters'],

                long_description: '',
                rulesLong: [v => v.length <= 250 || 'Max 250 characters'],

            }
        },
        methods: {
            submit() {
                axios.put(`http://localhost:4000/api/item/${this.$route.params.id}`, {
                        title: this.title,
                        gendre: this.gendre,
                        colors: this.valueColors.toString(),
                        sizes: this.valueSizes.toString(),
                        quantities: this.quantities,
                        discount: this.discount,
                        price: this.price,
                        long_description: this.long_description,
                        id: this.$route.params.id

                    })
                    .then((res) => {
                        this.alert = "la catégorie a été editer";
                        this.classAlert = "success"
                        console.log(res.data[0]);
                        window.location.href = `/admin/products/`
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            uploadFile(event) {
                this.files = event.target.files
                console.log(this.files);
                for (const i of Object.keys(this.files)) {
                    this.filesTab.push(this.files[i]);
                }

            },

        },
        beforeMount() {
            axios.get(`http://localhost:4000/api/item/${this.$route.params.id}`)
                .then(response => {
                    this.product = response.data
                    this.title = this.product[0].title;
                    this.gendre = this.product[0].gendre;
                    this.price = this.product[0].price;
                    this.short_description = this.product[0].short_description;
                    this.long_description = this.product[0].long_description;
                    this.discount = this.product[0].discount;
                    this.quantities = this.product[0].quantities;
                    this.valueSizes = this.product[0].sizes.split(",");;
                    this.valueColors = this.product[0].colors.split(",");;
                })
        },

    }
</script>