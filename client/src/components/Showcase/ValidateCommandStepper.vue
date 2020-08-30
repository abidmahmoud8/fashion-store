<template>
    <v-container>
        <v-stepper v-model="e1" style="margin-top:84px">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">Recapitulatif</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="e1 > 2" step="2">Informations</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">Payements</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-12" color="lighten-1" height="200px">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Nom</th>
                                        <th class="text-left">Prix unitaire</th>
                                        <th class="text-left">Qte</th>
                                        <th class="text-left">Prix totale</th>
                                        <th class="text-left">Rmise</th>
                                        <th class="text-left">Prix finale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in products" :key="item.id">
                                        <td><a
                                                :href="`http://localhost:8080/${item.gendre}/product/${item.id}`">{{ item.title }}</a>
                                        </td>
                                        <td>{{ item.price.toFixed(2) }}</td>
                                        <td>{{ item.qte }}</td>
                                        <td>{{ (item.qte * item.price).toFixed(2) }}</td>
                                        <td>{{ item.discount }} %</td>
                                        <td>{{ ((item.qte * item.price / 100) * (100 - item.discount)).toFixed(2) }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Prix totale</td>
                                        <td>{{price}}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                    <v-btn color="primary" @click="e1 = 2">Continuer</v-btn>
                    <v-btn @click="cancel" text>Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <v-card class="mb-12" color="lighten-1" height="200px">
                        <br>
                        <p>Nom : {{user.last_name}}</p>
                        <p>Prénom : {{user.first_name}}</p>
                        <p>Email : {{user.email}}</p>
                        <p>Adress : {{user.adress}} {{user.zip}} {{user.city}} {{user.country}}</p>
                    </v-card>
                    <v-btn color="primary" @click="e1 = 3">Continuer</v-btn>
                    <v-btn @click="cancel" text>Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                    <v-card class="mb-12" color="lighten-1" height="200px">
                        <br>
                        <h3>Méthode de paiement : </h3>
                        <v-radio-group v-model="radioGroup">
                            <v-radio label="Paiement a la livraison" value="non payé"></v-radio>
                            <v-radio label="Paiement on ligne" value="payé"></v-radio>
                        </v-radio-group>
                    </v-card>
                    <v-btn color="primary" @click="validateCommand">Continuer</v-btn>
                    <v-btn @click="cancel" text>Cancel</v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                e1: 1,
                command: [],
                products: [],
                user: [],
                price: [],
                method: [],
                productList: [],
                radioGroup: 'non payé'
            }
        },
        beforeMount() {
            var command = JSON.parse(JSON.stringify(localStorage.getItem('command')))
            this.command.push(JSON.parse(command));
            this.user = this.command[0].user[0];
            this.price = this.command[0].price;

            var localsStorageValue = JSON.parse(JSON.stringify(localStorage.getItem('products')))
            var count = localsStorageValue.match((/id/g) || []).length;
            if (count > 1) {
                var products = JSON.parse(JSON.stringify(localStorage.getItem('products'))).split('},{')
                for (let i = 0; i < products.length; i++) {
                    if (i === 0) {
                        this.productList.push(products[i] + '}')
                    } else if (i === products.length - 1) {
                        this.productList.push('{' + products[i])

                    } else if (i > 0 && i < products.length) {
                        this.productList.push('{' + products[i] + '}')
                    }
                }
                for (let i = 0; i <= this.productList.length; i++) {
                    this.products.push(JSON.parse(this.productList[i]));
                }
            } else if (count == 1) {
                var produc = JSON.parse(JSON.stringify(localStorage.getItem('products')));
                this.products.push(JSON.parse(produc))
            }
        },
        methods: {
            cancel() {
                window.location.href = '/cart'
            },
            validateCommand() {
                axios.post('http://localhost:4000/api/command/', {
                        status: 'En cours',
                        payement: this.radioGroup,
                        user_id: this.user.id,
                        total_price: this.price,
                    })
                    .then((res) => {
                        this.products.forEach(product => {
                            axios.post('http://localhost:4000/api/commandline/', {
                                command_id: res.data[0],
                                item_id: product.id,
                                item_name: product.title,
                                item_price: product.price,
                                item_qte: product.qte,
                                item_discount: product.discount,
                                item_total_price: ((product.price * product.qte / 100) * (100 - product.discount)).toFixed(2),
                            }).then((res) => {
                                console.log(res);
                            }).catch((error) => {
                                console.log(error.response);
                            }),

                            axios.put(`http://localhost:4000/api/item/qte/${product.id}`, {
                                quantities: product.quantities - product.qte,
                            }).then((res) => {
                                localStorage.removeItem('products');
                                localStorage.removeItem('command');
                                window.location.href = '/dashboard/commandes'
                                console.log(res);
                            }).catch((error) => {
                                console.log(error.response);
                            })
                        });
                        console.log(res.data);
                    })
                    .catch((error) => {
                        console.log(error.response);
                        console.log(error.message);
                        console.log(error.response);
                    })

                    

            }
        }

    }

</script>
<style>
    .v-sheet.v-card {
        box-shadow: none !important;
    }
</style>