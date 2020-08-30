<template>
    <v-container>
        <h2 class="ma-4">Les commandes</h2>
        <hr>
        <CommandModal :dialogs ="dialogs"></CommandModal>

        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Réference</th>
                        <th class="text-left">Prix totale</th>
                        <th class="text-left">Etat</th>
                        <th class="text-left">Status</th>
                        <th class="text-left">action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="command in commands" :key="command.id">
                        <td>{{ command.id }}</td>
                        <td>{{ command.total_price }}</td>
                        <td>{{ command.payement }} </td>
                        <td>{{ command.status }}</td>
                        <td><a :href="`http://localhost:8080/admin/commandes/${command.id}`">
                                <v-icon small class="mr-2">mdi-eye</v-icon>
                            </a>
                            <v-icon small class="mr-2" @click="editItem(command)">
                                mdi-pencil
                            </v-icon>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
    import axios from "axios";
    import CommandModal from './CommandModal'
    export default {
        data() {
            return {
                commands: null,
                alert: null,
                dialogs : false,
                editedItem : 'ok',
                commandSend: []
            }
        },
        components : {CommandModal},
        watch : {
            dialogs() {
                this.commands
            }
        },
        beforeMount() {
            axios.get('http://localhost:4000/api/command/')
                .then(response => {
                    this.commands = response.data
                })
        },
        methods: {
            editItem(command) {
                this.commandSend = command
                this.dialogs = true;
            }
        }
    }
</script>

<style>
    .btn-add {
        float: right;
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
    }
</style>