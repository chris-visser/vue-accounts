import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

/* eslint no-console: off */
/* eslint no-unused-vars: off */
export default new Store({
  modules: {
    account: {
      namespaced: true,

      state: {
        userId: null,
      },

      mutations: {
        setAccount(state, { userId }) {
          state.userId = userId;
        },
        unsetAccount(state) {
          state.userId = null;
        },
      },

      actions: {
        login({ commit }, { email, password }) {
          return new Promise((resolve) => {
            commit('setAccount', { userId: 'dummy' });
            resolve();
          });
        },
        logout({ commit }) {
          return new Promise((resolve) => {
            commit('unsetAccount');
            resolve();
          });
        },
        async register(context, { displayName, email, password }) {

        },
        async forgotPassword(context, { email }) {

        },
        async resetPassword(context, { token, password }) {

        },
        async verifyEmail(context, { token }) {

        },
      },
    },
  },
});
