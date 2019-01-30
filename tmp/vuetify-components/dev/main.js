import Vue from 'vue';

import './plugins';
import { AuthStorePlugin } from '../src/entry.js';

import Root from './Root';
import store from './store';
import router from './router';

Vue.use(AuthStorePlugin, { store });

new Vue({
  el: '#app',
  router,
  store,
  ...Root,
});
