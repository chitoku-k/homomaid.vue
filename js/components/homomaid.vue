<template>
    <article>{{ message }}</article>
</template>

<script lang="babel">
    import Vuex from 'vuex';

    export default {
        name: 'Homomaid',
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
