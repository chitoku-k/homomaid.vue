import Vue from 'vue';
import router from 'babel!./router';
import store from 'babel!./store';

new Vue({
    el: '#app',
    template: `<router-view></router-view>`,
    router,
    store,
});
