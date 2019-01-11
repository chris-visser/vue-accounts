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
components or build your own!

```bash
npm install @vue-accounts/bare
```

The above example provides a couple of forms without any styling that 
fit gracefully on the global account methods. You can now add for example 
a fully functional login form:

```vue
<template>
  <login-form />
</template>

<script>
  import { LoginForm } from '@vue-accounts/bare';

  export default {
    components: {
      LoginForm,
    },
  };
</script>
```

### Component Libraries:
Below is a list of libraries that provide pre-made components that work gracefully with Vue Accounts:

- **@vue-accounts/bare**: (Coming soon) Pre-made account components without any styling applied
- **@vue-accounts/bootstrap**: (Coming soon) Pre-made Bootstrap account components
- [@vue-accounts/vuetify](https://github.com/chris-visser/vue-accounts-vuetify): Pre-made Vuetify account components

## Adding a store module
The though the store plugin provides the global methods, the methods don't do anything 'yet'. 
for this to work you either download an existing module or you create your own.

### Pre-made Store Modules

- [@vue-accounts/meteor](https://github.com/chris-visser/vue-accounts-vuetify)
Connects Meteor's account system to the Vue Accounts.





### Creating your own Components
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


### Component Mixins
Component mixins simplify the creation of custom components by providing standard functionality to componens. 
An example of this functionality. Below is a list of available mixins


#### BaseForm
Forms the base functionality for all the accounts forms. It calls the associated methods 
and tracks the status of this progress (idle, submitting, success, error). It gives the following states:

##### Usage
```vue
export default {
  mixins: [BaseFormMixin],
  method: '<method>',
}
```

| Prop | Type | Description | Possible values | Default value | 
|------|-------------|-----------------|---------------|------|
|status| String | A string representing the submit / loading status | 'idle', 'submitting', 'success', 'error' | 'idle' |
|error | String | A string containing any error given when the method call fails |  |  '' |
|payload| Object| An object containing the payload that is going to be send or was send by the form | | {} |

#### LoginForm
Extends the BaseForm mixin by passing the `$login` method property.

#### RegistrationForm
Extends the BaseForm mixin by passing the `$register` method property.

#### ForgotPasswordForm
Extends the BaseForm mixin by passing the `$forgotPassword` method property.

#### ResetPasswordForm
Extends the BaseForm mixin by passing the `$resetPassword` method property 
and by passing the token from the url's `token` query parameter into the payload of the form.


