import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Journal',
      component: Home,
    },
    {
      path: '/assessment',
      name: 'Assessment',
      component: () =>
        import(/* webpackChunkName: "assessment" */ '@/views/Assessment.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
    },
  ],
});
