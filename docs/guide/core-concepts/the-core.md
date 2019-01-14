# The Core
The core plugin exposes global methods and forms the abstraction between the storage 
and components. This is done to make it possible to use any component with any of the 
stores. It doesn't matter if you want to use the Vuex store or use something like 
Redux or Apollo Client State instead. 

Depending on your core, your store needs to expose certain actions. These actions 
communicate with the backend and control the state internally. If you use for example 
the Apollo Core Plugin, you would need to add mutations and queries responsible for managing 
the user's logged in state. For Vuex it would mean adding a store module 
to hold the account info.


## Custom cores 

If you do decide to use a different type of store, simply replace the VuexStorePlugin from the core 
with your own plugin. The below example exposes actions from a non-existing Redux store:

```javascript
export default {
  install(Vue, { login, logout,  register,  verifyEmail,  forgotPassword, resetPassword }) {
    
    // Expose methods on Vue
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
```

Here's a simplified version of a Vuex Store Plugin:

```javascript
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
