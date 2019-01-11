import Vue from 'vue';
import Router from 'vue-router';

import Page from './Page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Page,
  }, {
    path: '/login',
    component: Page,
  }, {
    path: '/registration',
    component: Page,
  }, {
    path: '/forgot-password',
    component: Page,
  }, {
    path: '/reset-password',
    component: Page,
  }],
});
