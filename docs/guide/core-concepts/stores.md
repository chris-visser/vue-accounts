# Vuex Store Modules
If you use the VuexStorePlugin you will need a store module to hold the account information 
and to expose actions. You can choose to either build your own account store module or to use 
a pre-made one. 


## Pre-made

 - [Vue Accounts Meteor](/meteor-store) - Integration with Meteor's account system.
 
## Building your own store

You can add your own account store just like any other Vuex store, but it depends ofcourse 
on your preferred API client! 

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

Simply implement the api methods in your store, but be sure to return a promise. 
This makes the component mixins able to provide a loading state to each auth component when needed.

#### Namespacing

You can have a namespaced store module. In that case set the 
`namespace` option on your store plugin to make it aware of where to find it:

```javascript
Vue.use(AccountStorePlugin, { namespace: 'account' });
```

#### Error Handling


```
