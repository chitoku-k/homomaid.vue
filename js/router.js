httpVueLoader.langProcessor.babel = script => Babel.transform(script, { presets: ['es2017', 'stage-3'] }).code;

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: httpVueLoader('./js/components/homomaid.vue'),
        },
    ],
});
