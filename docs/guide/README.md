# Getting started

## Installation 

```bash
npm install @vue-accounts/core
```

Choose a store connector and a strategy. The below example uses Vuex with the password strategy:

```javascript
import Vuex from 'vuex';
import AccountsCore, { PasswordStrategy, VuexConnector } from '@vue-accounts/core';

Vue.use(Vuex);

const store = new Vue.Store({}); // Init a regular VueX Store

const StoreConnector = VuexConnector(store); // Init the connector with the store

// Init the AccountsCore plugin with the connector and one or more strategies
const Accounts = new AccountsCore(StoreConnector, [
  PasswordStrategy(),
]);

Vue.use(Accounts); // Add it to Vue and you're set!
```

Now the only thing for you left todo is to either add or build your own components.

## Adding Components
Ofcourse we need components like forms for login, register, etc and buttons to logout.


Vue Accounts comes with pre-made component libraries for many of the common libraries like 
Vuetify, Buefy, Bootstrap Vue and Element, but its also pretty simple to build your own. 
In our case we are going to use bare-components since that one has no dependencies:

```bash
npm install @vue-accounts/bare-components
```

You only need to add one of the components into your page to make it work:

```vue
<template>
  <login-form />
</template>

<script>
  import { LoginForm } from '@vue-accounts/bare-components';

  export default {
    components: {
      LoginForm,
    },
  };
</script>
```

### Component Libraries:
Below is a list of libraries that provide pre-made component libraries that work gracefully with Vue Accounts:

- **@vue-accounts/bare-components**: (Coming soon) Pre-made account components without any styling applied
- **@vue-accounts/bootstrap-components**: (Coming soon) Pre-made Bootstrap account components
- [@vue-accounts/vuetify-components](https://github.com/chris-visser/vue-accounts-vuetify): Pre-made Vuetify account components
- **@vue-accounts/element-components** (Coming Soon)
- **@vue-accounts/buefy-components** (Coming Soon)

## Adding a store
The VueX store connector dispatches actions on your store, but there is no store module listening to them.
We either need to create our own or we use a pre-made store module. Lets use the Meteor store:

```bash
npm install @vue-accounts/meteor-store
```

Meteor's store uses a store in combination with a plugin so you need to add them both:

```javascript
import AccountStore, { AccountStorePlugin } from '@vue-accounts/meteor-store';

export default new Vuex.Store({
  plugins: [AccountStorePlugin],
  modules: {
    account: AccountStore,
  },
});
```

### Pre-made Store Modules

- [@vue-accounts/meteor-store](https://github.com/chris-visser/vue-accounts-vuetify)
Connects Meteor's account system to the Vue Accounts.



