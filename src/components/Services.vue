<template>
<v-row>
    <v-col lg="3" md="6" cols="12" v-for="service in services" :key="service.name">
        <v-card outlined flat>
            <v-img contain height="300" :src="service.image" :alt="service.alt" />
            
            <v-card-title>
                <v-divider></v-divider>

                {{service.name}}
                <v-divider></v-divider>
            </v-card-title>
            <v-card-text>
                {{service.description}}
            </v-card-text>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    name: "Services",
    data: () => ({
        services: [{
            name: "Application Desktop",
            description: "Création d'application installable sur pc/bureau  (Linux, MacOs, Windows) utilisable dépuis votre bureau",
            image: require('../assets/desktop.svg'),
            alt:"illustration d'application bureautique"
        }, {
            name: "Application Mobile",
            description: "Création d'application  installable sur votre smartphone ( android, iOS ) utilisable dépuis votre ecran d'acceuil",
            image: require('../assets/mobileUx.svg'),
            alt:"illustration d'application mobile"
        }, {
            name: "Application Web",
            description: "Création d'application web accessible depuis toute sorte de navigateur pour faciliter et améliorer la gestion de votre entreprise",
            image: require('../assets/website.svg'),
            alt:"illustration d'application web"
        },
        {
            name: "Site Web",
            description: "Création de site web accessible depuis toute sorte de navigateur pour montrer au monde entier les différents services que vous offrez",
            image: require('../assets/webapplication.svg'),
            alt:"illustration de site web"
        }]
    })
}
</script>

<style>

</style>
