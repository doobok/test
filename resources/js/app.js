require('./bootstrap');

// Vue
window.Vue = require('vue').default;
// store
// import store from './store/index';
// валидатор форм
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
// мультиязычность
import './ml';
// input mask
import VueMask from 'v-mask'
Vue.use(VueMask);
// scroll
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

// Vue.component('smpl-component', require('./components/SimpleComponent.vue').default);


const app = new Vue({
    el: '#app',
    // store
});
