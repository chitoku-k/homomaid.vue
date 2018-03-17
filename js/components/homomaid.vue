<template>
    <article>{{ message }}</article>
</template>

<script lang="babel">
    module.exports = {
        computed: {
            ...Vuex.mapState([
                'message',
            ]),
        },
    };
</script>

<style scoped>
    article {
        color: #4904b3;
    }
</style>
