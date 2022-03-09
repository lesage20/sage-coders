<template>
<v-btn rounded color="info lighten-1" href="https://api.whatsapp.com/send?phone=2250555884378" link class="my-3">
    {{ text}}
</v-btn>
</template>

<script>
export default {
    name: 'CallToAction',
    props: {
        text: {
            type: String,
            default: "Commander mon site"
        }

    }
}
</script>

<style>

</style>
