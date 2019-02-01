import Vue from 'vue';
import Vuex from 'vuex';

import AccountsCore, { VuexConnector, PasswordStrategy } from '@vue-accounts/core';

import MeteorStore from './store/store';
import StorePlugin from './store/plugin';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [StorePlugin],
  modules: {
    account: MeteorStore,
  },
});

const StoreConnector = VuexConnector(store, { namespace: 'account' });

const Accounts = new AccountsCore(StoreConnector, [
  PasswordStrategy(),
]);

Vue.use(Accounts);

export default store;
