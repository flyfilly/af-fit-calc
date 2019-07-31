import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   if (!store.getters['profile/hasProfile'] && to.name !== 'profile')
//     return next('profile');
//   return next();
// });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
