<template>
<v-app>
    <v-card>
        <v-app-bar elevation="0" app flat dense color="white">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase">
                SageCoders
            </v-app-bar-title>

            <v-spacer></v-spacer>
            <template v-if="!isMobile">
                <template v-for="link in links">
                    <v-btn v-if="!link.divider" color="info darken-2" :key="link.name" link :href="link.route" text>
                        <span class="mr-2 ">{{link.name}}</span>
                    </v-btn>
                </template>

            </template>

            <v-btn rounded small elevation="0" color="info lighten-1" class="my-3">
                Commander
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        SageCoders
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Menu
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <template v-for="(link, i) in links">
                    <v-divider v-if="link.divider" class="pb-1" :key="'divider' + i"></v-divider>

                    <v-list-item color="info darken-2" v-else :key="link.name" :href="link.route" link>
                        <v-list-item-content>
                            <v-list-item-title>{{ link.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </template>

                <v-btn rounded elevation="0" color="info lighten-1" class="my-3">
                    Commander mon site
                </v-btn>
            </v-list>

        </v-navigation-drawer>
    </v-card>

    <v-main class="greys lighten-3">
        <v-container fluid>
            <v-row id="home">
                <v-col class="">
                    <hero />
                </v-col>

            </v-row>
            <v-row id="services">
                <v-col cols="12">
                    <titre titre=" Nos Services" />
                </v-col>
                <v-col class="">
                    <services />
                </v-col>
            </v-row>
            <v-row id="about">
                <v-col cols="12">
                    <titre titre="A Propos De Nous" />
                </v-col>
                <v-col class="">
                    <about />
                </v-col>
            </v-row>
            <v-row id="team">
                <v-col cols="12">
                    <titre titre="Notre Dynamique Equipe" />
                </v-col>
                <v-col class="">
                    <team />
                </v-col>
            </v-row>
            <v-row id="contact">
                <v-col cols="12">
                    <titre titre="Nous Contacter" />
                </v-col>
                <v-col class="py-16">
                    <contact />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    <template>
        <v-footer dark padless>
            <v-card class="flex" flat tile>
                <v-card-text color="primary" class="py-2 white--text text-center">
                    {{ new Date().getFullYear() }} — <strong>&copy; SageCoders</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </template>
</v-app>
</template>

<script>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Hero from './components/Hero';
import Services from './components/Services.vue';
import Team from './components/Team.vue';
import Titre from './components/Titre.vue';
import Vue from 'vue'
Vue.mixin({
    computed: {
        isMobile() {
            if (window.screen.width < 960) return true
            return false
        }
    }
})
export default {
    name: 'App',

    components: {
        Hero,
        Services,
        About,
        Team,
        Contact,
        Titre,

    },
    data: () => ({
        drawer: false,
        socials: [{
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ange-aymar-zanou-0b6165183",
                icon: "mdi-linkedin"
            },
            {
                name: "Twitter",
                url: "https://www.twitter.com/bypassingit",
                icon: "mdi-twitter"
            }
        ],

        links: [{
                name: "Accueil",
                route: "#home"
            },
            {
                divider: true
            },
            {
                name: "Services",
                route: "#services"
            },
            {
                divider: true
            },
            {
                name: "A Propos",
                route: "#about"
            },
            {
                divider: true
            },
            {
                name: "Equipe",
                route: "#team"
            },
            {
                divider: true
            },
            {
                name: "Contact",
                route: "#contact"
            },
            {
                divider: true
            },

        ]
    }),
};
</script>
