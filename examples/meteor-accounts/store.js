import Vue from 'vue';
import Vuex from 'vuex';

import { AccountStorePlugin } from '@vue-accounts/core';
import MeteorStore, { StorePlugin } from '@vue-accounts/meteor-store';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [StorePlugin],
  modules: {
    account: MeteorStore,
  },
});

Vue.use(AccountStorePlugin, { store });

export default store;
