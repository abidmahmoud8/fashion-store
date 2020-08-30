<template>
<div>
        <v-alert v-if="alert" type="success">
            {{ alert }}
        </v-alert>

    <v-dialog v-model="dialogs" max-width="500px">

        <v-card>
            <v-card-title>
                <span class="headline" @click="ok">Editer la status de la commande n° : {{commands.id}}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="commands.total_price" label="Prix totale" disabled></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                              <v-select :items="payements" v-model ="paye" label="Payement"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-select :items="status" v-model ="etat" label="Etat"></v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog></div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['dialogs'],
        data() {
            return {
                commands: [],
                alert: null,
                dialog: false,
                editedItem: 'ok',
                payements : ['payé', 'non payé'],
                status : ['En cours', 'Livré'],
                etat : '',
                paye : '',
            }
        },
        watch: {
            dialogs() {
                this.dialog = this.dialogs
                this.commands = this.$parent.$data.commandSend
                this.etat = this.$parent.$data.commandSend.status
                this.paye = this.$parent.$data.commandSend.payement
            },
            dialog() {
                this.$parent.$data.dialogs = this.dialog
                this.commands = this.$parent.$data.commandSend

            },
        },
        methods: {
            close() {
                this.dialog = false
                this.$parent.$data.dialogs = this.dialog
                console.log('close');
            },
            ok() {
                console.log(this.dialogs);
                console.log(this.dialogs);
                console.log(this.etat);
                console.log(this.commands.id);
            },

            save() {
                axios.put(`http://localhost:4000/api/command/${this.commands.id}`, {
                        status: this.etat,
                        payement: this.paye,
                    })
                    .then((res) => {
                        this.alert = "l'etat de la commande a été modifer";
                        this.classAlert = "success"
                        console.log(res);
                    })
                    .catch((error) => {
                        console.log(error.response);
                    })
                this.close()
            },
        },

    }
</script>