# Auth Store Plugins

Account stores are plugins that expose global methods that link back to a Vuex store of your choice. 
This allows swapping to another identity provider without having to modifying any components or mixins.

## Pre-made
Vue Accounts comes with a number of pre-made store plugins. You can select one, or decide to [make your own store](#building-your-own-store).

 - [Vue Accounts Meteor]() - (Coming soon) Integration with Meteor's account system.
 
## Building your own store
You can add your own account store just like any other store:

*./store.js*

```javascript
import account from './stores/account';

export default new Vuex.Store({
  modules: {
    account,
  }
});
```

*./stores/account.js*
```javascript
export default {
  actions: {
    async login(context, { email, password }) {},
    async logout(context) {},
    async register(context, { displayName, email, password, repeatPassword }) {},
    async forgotPassword(context, { email }) {},
    async resetPassword(context, { token, password, repeatPassword }) {},
    async verifyEmail(context, { token }) {},
  },
},
```

Simply implement the backend methods in your store, but be sure to return a promise. 
This makes the component mixins able to provide a loading state to each auth component when needed.

## Namespacing

You can have a namespaced store module. In that case set the 
`namespace` option on your store plugin to make it aware of where to find it:

```javascript
Vue.use(AccountStorePlugin, { namespace: 'account' });
```
