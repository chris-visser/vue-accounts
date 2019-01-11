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
        async login({ commit }, { email, password }) {
          console.log('LOGIN', { email, password });
          commit('setAccount', { userId: 'dummy' });
        },
        async logout({ commit }) {
          console.log('LOGOUT');
          commit('unsetAccount');
        },
        async register(context, { displayName, email, password, repeatPassword }) {
          console.log('REGISTRATION', { displayName, email, password, repeatPassword });
        },
        async forgotPassword(context, { email }) {
          console.log('FORGOT PASSWORD', { email });
        },
        async resetPassword(context, { token, password, repeatPassword }) {
          console.log('RESET PASSWORD', { token, password, repeatPassword });
        },
        async verifyEmail(context, { token }) {
          console.log('VERIFY EMAIL', { token });
        },
      },
    },
  },
});
