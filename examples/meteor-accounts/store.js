import Vue from 'vue';
import Vuex from 'vuex';

import AccountsCore, { VuexConnector, PasswordStrategy } from '@vue-accounts/core';

import userStore, { StorePlugin } from '@vue-accounts/meteor';

Vue.use(Vuex);

const STORE_NAME = 'user'; // Centralize the store name

// Connects Meteor's Reactive user to a specified Vuex Store
const MeteorPlugin = StorePlugin({ storeName: STORE_NAME });

// Initialize the store as normal
const store = new Vuex.Store({
  plugins: [MeteorPlugin],
  modules: {
    [STORE_NAME]: userStore,
  }
});

// Ensures that any method calls are linked to the VueX store
const StoreConnector = VuexConnector(store, { namespace: STORE_NAME });

// Generate an accounts instance with the strategies and connectors of choice
const Accounts = new AccountsCore(StoreConnector, [
  PasswordStrategy(),
]);

Vue.use(Accounts);

export default store;
