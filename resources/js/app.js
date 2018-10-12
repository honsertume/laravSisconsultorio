import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './router/index';

require('./bootstrap');
// window.Vue = require('vue');

Vue.component('app-component', require('./components/App.vue'));


const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router: router
});
