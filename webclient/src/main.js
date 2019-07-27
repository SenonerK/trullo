import Vue from 'vue';
import Buefy from 'buefy';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'buefy/dist/buefy.css';
import './assets/style.scss';
import App from './components/App.vue';

Vue.use(Buefy);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
