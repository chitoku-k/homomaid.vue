require.config({
    paths: {
        // Transformers
        'babel': 'transform/babel',
        'component': 'transform/component',

        // Packages
        'babel-standalone': 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min',
        'babel-polyfill': 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min',
        'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.6/vue',
        'vuex': 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min',
        'vue-router': 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.min',
        // 'http-vue-loader': 'https://unpkg.com/http-vue-loader@1.3.4/src/httpVueLoader',
        'http-vue-loader': 'https://cdn.rawgit.com/chitoku-k/http-vue-loader/1b2237e3b137dcb9f7a3c1a87d6be6d073fb427d/src/httpVueLoader',
    },
});
require(['babel!app']);
