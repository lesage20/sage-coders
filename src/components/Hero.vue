<template>
<v-row justify="space-around" height="100">
    <v-col lg="6" md="6" cols="12" class="py-lg-16 text-center">
        <v-sheet class="greys lighten-3" flat>
            <h1 class="display-2 grey--text text-darken-2">
                Ayez votre site en une semaine max
            </h1>
            <v-card-text>
               Pour tous vos besoin d'application web, mobile et desktop et aussi de site web nous sommes disponible 24h/24 pour vous offrir un service de qualité qui respecte les normes de google material design
                <br>
                <call-to-action />
            </v-card-text>

        </v-sheet>
    </v-col>
    <v-col lg="6" md="6" cols="12">
        <v-img :src="require('../assets/hero.svg')" alt="illustration de la section hero " />
    </v-col>

</v-row>
</template>

<script>
import CallToAction from './CallToAction.vue'
export default {
  components: { CallToAction },
    name: 'Hero',

    data: () => ({

    }),
}
</script>
