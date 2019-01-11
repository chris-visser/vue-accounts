# Getting started

Install the dependencies:

```bash
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

The above store plugin will expose global account methods that you can call from anywhere in your app. 

## Adding Components
You can use component libraries to provide the forms and other account 
components or [build your own components](/guide/core-concepts/components.html#creating-your-own-components)!

```bash
npm install @vue-accounts/bare-components
```

The above example provides a couple of forms without any styling that 
fit gracefully on the global account methods. You can now add for example 
a fully functional login form:

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

## Adding a store module
Though the store plugin provides the global methods, the methods don't do anything 'yet'. 
for this to work you either download an existing module or you create your own.

Here's an example using the Meteor accounts system:

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



