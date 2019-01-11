/**
 * Makes global vue instance auth methods available and connects them
 * to a Vuex store
 */
export default {
  install(Vue, { store, namespace = 'account' }) {

    const modulePath = `${namespace ? `${namespace}/` : ''}`;

    const login = async (payload) => {
      await store.dispatch(`${modulePath}login`, payload);
    };

    const logout = async (payload) => {
      await store.dispatch(`${modulePath}logout`, payload);
    };

    const register = async (payload) => {
      await store.dispatch(`${modulePath}register`, payload);
    };

    const verifyEmail = async (payload) => {
      await store.dispatch(`${modulePath}verifyEmail`, payload);
    };

    const forgotPassword = async (payload) => {
      await store.dispatch(`${modulePath}forgotPassword`, payload);
    };

    const resetPassword = async (payload) => {
      await store.dispatch(`${modulePath}resetPassword`, payload);
    };

    Object.defineProperties(Vue.prototype, {
      $login: {
        value: login,
      },
      $logout: {
        value: logout,
      },
      $register: {
        value: register,
      },
      $verifyEmail: {
        value: verifyEmail,
      },
      $forgotPassword: {
        value: forgotPassword,
      },
      $resetPassword: {
        value: resetPassword,
      },
    });
  },

};
