<template>
    <v-app>
        <Navbar></Navbar>
        <br><br><br><br><br><br>
        <v-container>
            <v-alert v-if="alert" type="success">
                {{ alert }}
                <v-btn text to="/test">retour</v-btn>
            </v-alert>
            <div class="d-flex justify-space-between">
                <h2 class="ma-4">Ajouter un produit</h2>
                <v-btn id="retour" text to="/test">retour</v-btn>
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

                <v-radio-group v-model="gendre" :mandatory="false">
                    <v-radio label="femmes" value="femmes"></v-radio>
                    <v-radio label="hommes" value="hommes"></v-radio>
                    <v-radio label="enfants" value="enfants"></v-radio>
                </v-radio-group>

                <br>
                <v-select v-model="valueColors" :items="colors" attach chips label="Couleurs" multiple></v-select>
                <br>
                <v-select v-model="valueSizes" :items="sizes" attach chips label="Tailles" multiple></v-select>
                <br>
                <v-textarea rows="1" counter label="Description courte" :rules="rulesShort" v-model="short_description">
                </v-textarea>
                <v-textarea counter label="Description Détaillé" :rules="rulesLong" v-model="long_description">
                </v-textarea>
                <v-btn class="mr-4" :disabled="!valid" @click="submit">submit</v-btn>
                <v-btn to="/test">clear</v-btn>
            </v-form>
        </v-container>
        <br><br><br><br>
        <Footer></Footer>
    </v-app>
</template>
<script>
    import Navbar from "./../components/Showcase/Navbar";
    import Footer from "./../components/Showcase/Footer";
    import gql from 'graphql-tag';


    export default {
        name: "TestForm",

        components: {
            Navbar,
            Footer,
        },

        data() {
            return {
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
                gendre: 'femmes',
                quantities: 0,
                nameRules: [
                    v => !!v || 'Il faut remplir le champ',
                ],
                discount: 0,
                price: 0,
                short_description: '',
                rulesShort: [v => v.length <= 25 || 'Max 25 characters'],
                long_description: '',
                rulesLong: [v => v.length <= 1000 || 'Max 1000 characters'],
            }
        },
        methods: {
            submit() {
                const title = this.title
                const colors = this.valueColors.toString()
                const sizes = this.valueSizes.toString()
                const images = JSON.stringify([{"filename":"no.png"}])
                const short_description = this.short_description
                const long_description = this.long_description
                const gendre = this.gendre
                const price = parseFloat(this.price)
                const discount = parseFloat(this.discount)
                const quantities = parseInt(this.quantities)
                this.$apollo.mutate({
                    mutation: gql `mutation ($title: String!, $colors: String!, $sizes: String!, $images:String!, $short_description: String!, $long_description: String!, $gendre: String!, $price: Float!, $discount: Float!, $quantities: Int!) {
                        createItem(title: $title, colors: $colors, sizes: $sizes, images: $images, short_description: $short_description, long_description: $long_description, gendre: $gendre, price: $price, discount: $discount, quantities: $quantities ) {
                            id
                            title
                        }
                    }`,
                   variables: {
                        title: title,
                        colors: colors,
                        sizes: sizes,
                        images: images,
                        short_description: short_description,
                        long_description: long_description,
                        gendre: gendre,
                        price: price,
                        discount: discount,
                        quantities: quantities,
                    }
                })

                this.alert = "le produit a été ajoué avec succes"

            },
        },
    };
</script>