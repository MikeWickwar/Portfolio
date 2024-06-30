// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Import Bootstrap-Vue components
import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false;

// Use Bootstrap-Vue
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
