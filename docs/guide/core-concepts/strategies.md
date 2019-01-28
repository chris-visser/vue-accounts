# Strategies

Strategies define how people authenticate themselves. For example the `PasswordStrategy` 
exposes methods for registering with a password and ofcourse to login using that password. 
Another example is the `FacebookStrategy` which exposes a `loginWithFacebook` method. 
Calling that method will show a pop-up allowing the user to log into Facebook. 

## Exposing Methods
Strategies can expose methods via the `Vue.prototype.$accounts` object. 
This means that they will become available in all Vue components. For example 
when a strategy adds a `logout` method, you could call it like this in your template:

```vue
<template>
  <button @click="$accounts.logout()"></button>
</template>
```

Or in your component code:

```vue
<script>
  export default {
    methods: {
      handleClick() {
        this.$accounts.logout();
      }
    }
  }
</script>
```

All methods on their turn call a `dispatch` method from the core which in turn dispatches the action 
to the connector. This allows us to use any client side storage mechanism and backend.

## Example of a strategy
A simple strategy could in face look like below. Take note that you could add some checks 
on parameters in here. 

```javascript
export default () => ({
  async login(payload) {
    return await this.dispatch('login', payload);
  },
  async logout(payload) {
    return await this.dispatch('logout', payload);
  },
  async register(payload) {
    return await this.dispatch('register', payload);
  },
  async verifyEmail(payload) {
    return await this.dispatch('verifyEmail', payload);
  },
  async forgotPassword(payload) {
    return await this.dispatch('forgotPassword', payload);
  },
  async resetPassword(payload) {
    return await this.dispatch('resetPassword', payload);
  },
});
```
