import Vue from 'vue';
import Vuex from 'vuex';
import { AccountStorePlugin } from '@vue-accounts/core';

Vue.use(Vuex);

/**
 * This is an in memory client side in memory store made just for prototyping
 * This is by far usable in a real application since the registered user will
 * be removed again on refresh.
 * @type {Store}
 */
const store = new Vuex.Store({
  state: {
    _accounts: [], // Mimics an account storage
    account: null, // Holds the logged in account
    isLoggedIn: false, // Tells if the user is logged in or not
  },

  mutations: {
    login(state, account) {
      state.account = account;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.account = null;
      state.isLoggedIn = false;
    },
    registration(state, account) {
      state._accounts.push(account);
    },
    setToken(state, { email }) {
      const account = state._accounts.find((user) => user.email === email);
      account.token = 'dummy'; // Normally comes from email
    },
    setPassword(state, { token, password }) {
      const account = state._accounts.find((user) => user.token === token);
      account.password = password;
    },
  },

  actions: {
    login({ commit }, { email, password }) {
      if (!password) {
        throw 'Password is required';
      }

      const account = this.state._accounts.find((user) => user.email === email && user.password === password);

      if (!account) {
        return Promise.reject('Invalid Credentials'); // Reject user caused error
      }

      commit('login', account);

      return Promise.resolve();
    },
    async logout({ commit }) {
      commit('logout');
      return Promise.resolve();
    },
    async register({ commit }, { displayName, email, password, repeatPassword }) {

      if (password !== repeatPassword) {
        throw 'Password and Repeat password need to be the same';
      }

      if (!email || !password || !repeatPassword || !displayName) {
        throw 'Not all required fields are filled in';
      }

      commit('registration', { displayName, email, password });

      return Promise.resolve();
    },
    async forgotPassword({ commit }, { email }) {
      if (!email) {
        Promise.reject('Email is required');
      }

      const account = this.state._accounts.find((user) => user.email === email);

      if (!account) {
        return Promise.resolve();
      }

      commit('setToken', { email });

      return Promise.resolve();
    },
    async resetPassword({ commit }, { token, password, repeatPassword }) {

      if (!token) {
        return Promise.reject('A token is required');
      }

      if (!password || !repeatPassword) {
        return Promise.reject('Password and Repeat Password are both required');
      }

      if (password !== repeatPassword) {
        return Promise.reject('Password and Repeat Password need to be the same');
      }

      commit('setPassword', { token, password });

      return Promise.resolve();
    },
    async verifyEmail(context, { token }) {
      return Promise.resolve();
    },
  },
});

Vue.use(AccountStorePlugin, { store });

export default store;
