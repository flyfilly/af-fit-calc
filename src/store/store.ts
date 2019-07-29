import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { profile } from '@/store/modules/profile.module.ts';
import { assessments } from '@/store/modules/assessment.module.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['profile', 'assessments'],
    }),
  ],

  modules: {
    profile,
    assessments,
  },
});
