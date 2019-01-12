<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Demo](#demo)
- [Getting started](#getting-started)
- [Account Stores](#account-stores)
  - [Dop-in Account Stores:](#dop-in-account-stores)
  - [Creating a custom Account Store](#creating-a-custom-account-store)
    - [Namespacing the Account Store module](#namespacing-the-account-store-module)
- [Components](#components)
  - [Drop-in component packages:](#drop-in-component-packages)
  - [Creating custom components](#creating-custom-components)
- [Mixins](#mixins)
  - [BaseFormMixin](#baseformmixin)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

**Very early WIP. Use at own risk!**

A collection of prefabricated Vue plugins and mixins that simplify 
setting up things related to user accounts and authentication. 

## Demo
Coming soon..

## Getting started

Install the dependencies:

```sh
npm install @vue-accounts/core
```

Add the store plugin to use the components with your Vuex account store
```javascript
import Vuex from 'vuex';
import { AccountStorePlugin } from '@vue-accounts/core';

Vue.use(Vuex);

const store = new Vue.Store({});

Vue.use(AccountStorePlugin, { store }); // Init the plugin with the Vuex store
```

Add one of the example forms to your app like below

```vue
<template>
  <login-form />
</template>

<script>
  import { LoginForm } from '@vue-accounts/core';

  export default {
    components: {
      LoginForm,
    },
  };
</script>
```

You now have a working login form, but... It does not actually log someone in. Pressing 
submit will end up in an error stating that there was no store action named `login`. 
This is the nice part. You either use one of the existing plugins, or you build your own!

## Account Stores
Account stores connect the AccountStorePlugin to an actual store that is tailored for a specific auth backend.


### Dop-in Account Stores:

 - [Vue Accounts Meteor]() - (Coming soon) Drop in integration with Meteor's account system. Install and enjoy!
 - [Vue Accounts Password]() - (Coming soon)
 
### Creating a custom Account Store 
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

### Namespacing the Account Store module

You can have a namespaced store module. In that case set the 
`namespace` option on the AuthStorePlugin to make it aware:

```javascript
Vue.use(AccountStorePlugin, { namespace: 'account' });
```

## Components
This package comes with example components to get you set-up quickly. 
These components are just meant for prototyping. Its recommended to either build 
your own or to use a `vue-accounts` component package. 

### Drop-in component packages:

- [@vue-accounts/bootstrap](): Drop-in Bootstrap account components
- [@vue-accounts/vuetify](): Drop-in Vuetify account components

 
### Creating custom components
Creating your own form is very easy. Simply add the right mixin and build the template like the below example:

```vue
<template>
  <form @submit.prevent="submit">
    <p><strong>Status:</strong> {{status}}</p>

    <input type="text" name="email" v-model="email" placeholder="Email" />
    <input type="password" name="password" v-model="password" placeholder="Password" />

    <p v-if="error"><strong>Error:</strong> {{error}}</p>

    <input type="submit" value="Login" />
  </form>
</template>

<script>
  import { LoginFormMixin } from '@vue-accounts/core';

  export default {
    mixins: [LoginFormMixin],
  };
</script>
```

The `@submit` event will trigger the mixin to call the right method. 


## Mixins

### BaseFormMixin
Forms the base functionality for all the accounts forms. It calls the associated methods 
and tracks the status of this progress (idle, submitting, success, error). It gives the following states:

| Prop | Type | Description | Possible values | Default value | 
|------|-------------|-----------------|---------------|------|
|status| String | A string representing the submit / loading status | 'idle', 'submitting', 'success', 'error' | 'idle' |
|error | String | A string containing any error given when the method call fails |  |  '' |
|payload| Object| An object containing the payload that is going to be send or was send by the form | | {} |

TODO Finish Documentation for the FormMixins

