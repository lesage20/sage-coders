<template>
<v-row>
    <v-col lg="4" md="4" cols="12" v-for="contact in contacts" :key="contact.type">
        <v-card flat class="text-center">
            <v-avatar>
                <v-icon>
                    {{contact.icon}}
                </v-icon>

            </v-avatar>
            <v-card-subtitle>
                {{contact.type}}
            </v-card-subtitle>
            <v-card-text>
                <a :href="'mailto:' + contact.valeur" v-if="contact.type == 'Email'">
                    {{contact.valeur}}
                </a>
                <a :href="'https://api.whatsapp.com/send?phone=' + contact.valeur" v-else-if="contact.type == 'Whatsapp'">
                    {{contact.valeur}}
                </a>
                <span v-else>
                    {{contact.valeur}}

                </span>
            </v-card-text>
        </v-card>
    </v-col>

</v-row>
</template>

<script>
export default {
    name: "Contacts",
    data: () => ({
        contacts: [{
                type: 'Téléphone',
                valeur: '+225 07 87 57 20 30',
                icon: "mdi-phone"
            }, {
                type: 'Email',
                valeur: 'angezanou00@gmail.com',
                icon: "mdi-email"
            },
            {
                type: 'Whatsapp',
                valeur: '225 05 55 88 43 78',
                icon: "mdi-whatsapp"
            }
        ]
    })
}
</script>

<style>

</style>
