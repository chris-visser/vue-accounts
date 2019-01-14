# Overview

A default setup consists of 1 core plugin, some kind of storage to hold the account 
info of the logged in user and components that allow normal users to interact via 
the core with the store.

## The Core Plugin
The core plugin exposes global methods and forms the abstraction between the storage 
and components. This is done, because you might not want to use the Vuex store and use something like 
Redux or Apollo Client State instead. 

## The Store Module
Depending on your core, your store needs to expose certain actions. These actions 
communicate with the backend and control the state internally.


## Exposing a custom core plugin

If you do decide to use a different store, simply replace the AuthStore plugin from the core 
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
