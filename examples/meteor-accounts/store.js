import Vue from 'vue';
import Vuex from 'vuex';

import AccountsCore, { VuexConnector, PasswordStrategy } from '@vue-accounts/core';
import MeteorStore, { StorePlugin } from '@vue-accounts/meteor';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [StorePlugin],
  modules: {
    account: MeteorStore,
  },
});

const Accounts = new AccountsCore(VuexConnector(store), [
  PasswordStrategy()
]);

Vue.use(Accounts);

export default store;
