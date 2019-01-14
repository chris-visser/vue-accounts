# Vue Accounts Meteor

Connects Vue Accounts to your Meteor application.

## Getting Started

In your Meteor + Vue application, install the following dependencies

```bash
meteor npm install @vue-accounts/core @vue-accounts/meteor
```

Initialize the Vuex Store, add the core plugin to Vue and the Meteor module + 
plugin like below:

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

import { AccountStorePlugin } from '@vue-accounts/core';
import MeteorStore, { StorePlugin } from '@vue-accounts/meteor';

Vue.use(Vuex);

// Just the normal Vuex store module setup
const store = new Vuex.Store({ 
  plugins: [StorePlugin], 
  modules: {
    account: MeteorStore, 
  },
});

Vue.use(AccountStorePlugin, { store }); // Make sure that you pass the store here

export default store;
```
The store is now connected and ready to use from anywhere in your app.

### Adding components
You can either build your own forms or use existing component extensions. Right now there is one available:

```bash
meteor npm install @vue-accounts/bare-components
```

This will make standard forms available for login, registration, forgot-password and reset password. 
Below is an example:

```vue
<template>
  <main>
    <TheHeader />
    <button @click="$logout" v-if="isLoggedIn">Logout</button>

    <login-form v-if="!isLoggedIn" />

    <registration-form />
  </main>
</template>

<script>
  import TheHeader from './components/TheHeader';
  import { LoginForm, RegistrationForm } from '@vue-accounts/bare-components';

  export default {
    components: {
      RegistrationForm,
      LoginForm,
      TheHeader,
    },
    computed: {
      isLoggedIn() {
        return this.$store.state.account.userId;
      }
    }
  };
</script>
```

A complete example can be found in the 
[vue-accounts repo's examples directory](https://github.com/chris-visser/vue-accounts/tree/master/examples/meteor-accounts).

