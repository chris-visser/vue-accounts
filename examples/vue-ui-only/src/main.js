import Vue from 'vue';
import AccountsCore, { PasswordStrategy, VuexConnector } from '@vue-accounts/core';

import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

const StoreConnector = VuexConnector(store);

const Accounts = new AccountsCore(StoreConnector, [
  PasswordStrategy(),
]);

Vue.use(Accounts);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
