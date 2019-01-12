import EventBus from '../EventBus';

export default {
  install(Vue, { router, store, gatewayRoutes }) {

    const $gatewayRoutes = {
      privateArea: '/',
      login: '/login',
      registration: '/registration',
      forgotPassword: '/forgot-password',
      resetPassword: '/reset-password',
      ...gatewayRoutes,
    };

    router.beforeEach((to, from, next) => {
      console.log(to);
      next();
    });

    Object.defineProperty(Vue.prototype, '$gatewayRoutes', {
      value: $gatewayRoutes,
      rewritable: true,
    });

    const events = {
      'account/setAccount': 'login',
      'account/unsetAccount': 'logout',
      ...authMutationNames, // Allow mutation names to be overridden from the outside
    };

    store.subscribe(({ type, payload }) => {
      const eventName = events[type];
      if(eventName) {

      }
    });

    EventBus.$on('login', () => {
      router.replace($gatewayRoutes.privateArea);
    });

    EventBus.$on('logout', () => {
      router.replace($gatewayRoutes.login);
    });
  },
};
