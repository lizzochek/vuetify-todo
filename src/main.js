import Vue from 'vue';
import VueRouter from 'vue-router';

import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from './App.vue';
import router from './router/router';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
