import Vue from 'vue';
import VueRouter from 'vue-router';
import Homomaid from 'component!components/homomaid';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: location.pathname,
    routes: [
        {
            path: '/',
            component: Homomaid,
        },
    ],
});
