import Vue from 'vue';
import VueRouter from 'vue-router';
import Homomaid from 'component!components/homomaid';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Homomaid,
        },
    ],
});
