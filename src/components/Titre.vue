<template>
<h2 class="text-uppercase text-center">
    {{titre}}
</h2>
</template>

<script>
export default {
name: 'Titre',
props: {
    titre: {
        type: String,
        required: true
    }
}
}
</script>

<style>

</style>
