import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('./views/ForgotPassword.vue'),
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('./views/ResetPassword.vue'),
    },
  ],
});
