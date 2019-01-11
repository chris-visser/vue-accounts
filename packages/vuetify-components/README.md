# (WIP) Vuetify Components

A collection of pre-made vue account components

## Getting Started

> Be sure to install Vuetify first via the [Official Vuetify documentation](https://vuetifyjs.com/).

Install the package:

```bash
npm install @vue-accounts/vuetify
```

Load one of the components in your app:

```vue
<template>
  <login-form />
</template>

<script>
import { LoginForm } from 'login-form';

export default {
  components: {
    LoginForm,
  },
};
</script>
```


## Components
A set of opinionated auth components. Under the hood they use mixins that provide state and call 
the proper methods. For example the LoginForm will use the LoginFormMixin that calls the global login method.

### Forms
This package provides a couple drop-in Vuetify auth forms. They will work without any configuration. 

 - **BaseForm**: Abstracts common functionality used by the other account forms
 - **LoginForm**
 - **RegistrationForm**
 - **ForgotPasswordForm**
 - **ResetPasswordForm**
 
### Cards
Most auth related forms come with some context. Linking for example from an to the login form 
from other forms. The below cards will provide that functionality.

 - **BaseCard**: Abstracts common functionality used by all other auth cards
 - **LoginCard**
 - **RegistrationCard**
 - **ForgotPasswordCard**
 - **ResetPasswordCard**




