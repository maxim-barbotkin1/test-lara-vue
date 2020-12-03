import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import VueGoodTable from 'vue-good-table';
import { BootstrapVue, IconsPlugin, AlertPlugin } from 'bootstrap-vue';
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

import './plugins/vee-validate';


Vue.prototype.$http = Axios;

Vue.prototype.$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.prototype.$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.prototype.$http.defaults.withCredentials = true;
Vue.prototype.$http.defaults.baseURL = "https://social.growthside.app";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(AlertPlugin);
Vue.use(VueGoodTable);
Vue.use(require('vue-moment'));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
