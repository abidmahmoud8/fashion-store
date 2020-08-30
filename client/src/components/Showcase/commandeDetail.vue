<template>
    <v-container>
        <h2>Detail de la commande n° : {{  this.$route.params.id  }}</h2>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Commande</th>
                        <th class="text-left">Nom</th>
                        <th class="text-left">Prix unitaire</th>
                        <th class="text-left">Qte</th>
                        <th class="text-left">Prix totale</th>
                        <th class="text-left">Rmise</th>
                        <th class="text-left">Prix finale</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="line in commandLine" :key="line.id">
                        <td>{{ line.command_id }}
                        <td>{{ line.item_name }}
                        </td>
                        <td>{{ line.item_price.toFixed(2) }}</td>
                        <td>{{ line.item_qte }}</td>
                        <td>{{ (line.item_price * line.item_qte).toFixed(2)}} €</td>
                        <td>{{ line.item_discount }} %</td>
                        <td>{{ line.item_total_price.toFixed(2) }} €</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Prix totale</td>
                        <td>{{command.total_price.toFixed(2) }} €</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "commandDetail",

        data() {
            return {
                command: [],
                commandLine: []
            }
        },
        beforeMount() {
            axios.get(`http://localhost:4000/api/commandline/${this.$route.params.id}`)
                .then(response => {
                    this.commandLine = response.data
                    console.log(this.commandLine);
                });
            axios.get(`http://localhost:4000/api/command/${this.$route.params.id}`)
                .then(response => {
                    this.command = response.data[0]
                    console.log(this.command);
                });
        },

    }
</script>