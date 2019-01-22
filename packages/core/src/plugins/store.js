/**
 * Makes global vue instance auth methods available and connects them
 * to a Vuex store
 */
if (typeof window !== 'undefined' && window.document) {
  window.$error = function (ex) {
    throw ex;
  };
}


export default {
  install(Vue, { store, namespace = '' }) {

    const modulePath = `${namespace ? `${namespace}/` : ''}`;

    const login = async (payload) => {
      return await store.dispatch(`${modulePath}login`, payload);
    };

    const logout = async (payload) => {
      return await store.dispatch(`${modulePath}logout`, payload);
    };

    const register = async (payload) => {
      return await store.dispatch(`${modulePath}register`, payload);
    };

    const verifyEmail = async (payload) => {
      return await store.dispatch(`${modulePath}verifyEmail`, payload);
    };

    const forgotPassword = async (payload) => {
      return await store.dispatch(`${modulePath}forgotPassword`, payload);
    };

    const resetPassword = async (payload) => {
      return await store.dispatch(`${modulePath}resetPassword`, payload);
    };

    Object.defineProperties(Vue.prototype, {
      $accounts: {
        value: {
          login,
          logout,
          register,
          verifyEmail,
          forgotPassword,
          resetPassword,
        },
      },
    });
  },

};
