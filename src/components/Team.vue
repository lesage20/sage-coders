<template>
<v-row justify="start">
    <v-col lg="4" md="4" cols="12" v-for="member in members" :key="member.nickName">

        <v-card flat class="text-center">
            <v-img max-height="150" contain :src="require('../assets/profile.svg')" />

            <h3 class="text-center grey--text">
                {{member.firstName }} {{member.lastName}}
            </h3>
            <v-card-subtitle>
                {{member.nickName}}
                <v-btn x-small text link :href="social.url" v-for="social in member.socials " :key="social.name">
                    <v-icon small> {{social.icon}} </v-icon>
                </v-btn>
            </v-card-subtitle>
            <v-card-text>
                {{member.bio}}
            </v-card-text>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    name: 'Team',
    data: () => ({
        members: [{
                firstName: "Ange Aymar",
                lastName: "Zanou",
                nickName: "Le Sage",
                bio: "Le Sage est un développeur certifié par NaN digital academy et codinGame, ancien developpeur chez ivoire-datanet et sogemex industry",
                socials: [{
                        name: "twitter",
                        content: "Ange Aymar Zanou",
                        url: 'https://twitter.com/bypassingit',
                        icon: "mdi-twitter"
                    },
                    {
                        name: "linkedin",
                        content: "bypassingit",
                        icon: "mdi-linkedin",
                        url: 'https://www.linkedin.com/in/ange-aymar-zanou-0b6165183',

                    }
                ]
            },
            {
                firstName: "Franck",
                lastName: "Shalom",
                nickName: "Geek's Corner",
                bio: "Geek's Corner est un etudiant en developpement d'application et developpeur freelance, concepteur de ivoire-imprimerie ",
                socials: [{
                    name: "twitter",
                    content: "bypassingit",
                    icon: "mdi-twitter"
                }]
            },
            {
                firstName: "Cedrick",
                lastName: "Zouzoua",
                nickName: "Bill",
                bio: "Bill est etudiant en genie logiciel et développeur web et mobile chez AXIOS-GROUP. Ancien developpeur chez Interactive",
                socials: [{
                        name: "twitter",
                        content: "bypassingit",
                        url: 'https://twitter.com/bypassingit',
                        icon: "mdi-twitter"
                    },
                    {
                        name: "twitter",
                        content: "bypassingit",
                        icon: "mdi-twitter"
                    }
                ]
            }
        ]
    })
}
</script>

<style>

</style>
