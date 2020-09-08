<template>
    <v-container fluid style="padding : 120px">
        <v-alert type="error" v-if="alert">
            Le panier est vide.
        </v-alert>
        <v-row v-else>
            <v-col cols="8" sm="8">
                <v-alert type="error" v-if="alertAuth">
                    {{alertAuth}} <a v-if="logs" href="/auth">cliquer ici</a>
                </v-alert>
                <CartItem v-for="product in products" :key="product" CartItem :product="product"></CartItem>
                <hr>
            </v-col>
            <v-col cols="4" sm="4">
                <h2 class="mb-4">Aperçu</h2>
                <p>Prix totale : {{totalPrices}} €</p>
                <p>Quanité : {{totalQte}}</p>
                <v-btn width="250px" class="my-2" outlined tile color="black d-block" @click="ValidateCommand">Valider la commande</v-btn>
                <v-btn width="250px" class="my-2" outlined tile color="black d-block" @click="emptyCart">Vider le panier </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import CartItem from './CartItem'
    export default {
        name: "CartList",
        components: {
            CartItem
        },
        data() {
            return {
                productList: [],
                products: [],
                alert: false,
                alertAuth: '',
                user: [],
                logs : false
            }
        },
        mounted() {
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
            } else {
                this.alert = true
            }
        },
        created() {
            var user = JSON.parse(JSON.stringify(localStorage.getItem('user')))
            this.user.push(JSON.parse(user))
        },
        computed: {
            totalPrices: function () {
                var price = 0;
                for (let i = 0; i < this.products.length; i++) {
                    price += (((this.products[i].price * this.products[i].qte) * (100 - this.products[i]
                        .discount)) / 100);
                }
                return price.toFixed(2)
            },
            totalQte: function () {
                var qte = 0;
                for (let i = 0; i < this.products.length; i++) {
                    qte += parseFloat(this.products[i].qte);
                }
                return qte
            },
        },
        methods: {
            emptyCart: function () {
                this.alert = true;
                localStorage.removeItem('products');
            },
            ValidateCommand() {
                var command = {
                    price: this.totalPrices,
                    products: this.productList,
                    user: this.user
                }
                if (localStorage.getItem("user") == null) {
                    this.alertAuth = "il faut que doit etre connecter"
                    this.logs = true
                } else {
                    if(command.price == 0) {
                        this.alertAuth = "le panier est vide",
                        this.logs = false
                    } else {
                        localStorage.setItem("command", JSON.stringify(command));
                        var user = JSON.parse(JSON.stringify(localStorage.getItem('user')))
                        if (user) {
                            window.location.href = `/validatecommand`
                        }
                    }
                }
            }
        }
    }
</script>