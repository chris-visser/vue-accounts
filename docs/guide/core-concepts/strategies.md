# Strategies

Strategies are mixins that control the behavior of the Gateway. 
The gateway is what we refer to when we describe the combination of all forms and components when 
they work together to create a user flow. One example of such flow is the authentication flow:

1. Un-authenticated user lands on our app
2. A login form shows up
3. User navigates to the registration form
4. User fills in the form and submits the form
5. An email is sent to the user's email address
5. User is shown a message to verify his/her email address
6. User clicks link in mail and is directed to the app with a verification token
7. User is logged in immediately because of the token
.

Right now Vue Accounts supports 2 strategies:

- **Modal**: Shows the gateway in the form of a modal.
- **Redirect**: Directs the users from and an to gateway pages.


## Modal
The Modal Strategy is the simplest strategy. It will load a modal with the required form. 
Main advantage of this strategy is that users will not be taken away from whatever they were doing 
and it makes the authentication flow really part of your app.

### Using the Modal Strategy

Add the mixin to your root component like below:

```vue
<template>
  <gateway-modal />
</template>

<script>
  import { ModalStrategy } from '@vue-accounts/core';
  
  export default {
    mixins: [ModalStrategy],
  }
</script>
```

## Redirect
In some cases the Redirect strategy might be a better choice. Main advantage 
of this strategy is that it will give users a more 'secure' feeling since the app 
is not visible before the user is authenticated.

The Redirect Strategy will use the vue-router to direct the user from and 
to the gateway. When users log in, it will redirect the authenticated user 
to the index of the private area. In contrast, when the user logs out, 
it will direct the user back to the login page. 

Like the login form, the registration, forgot-password and reset-password forms 
will all require a separate page. By default the redirect strategy directs users 
to routes that correspond to the name of each form: 

- `/`: The main private page
- `/login`: The login page
- `/registration`: The registration page
- `/reset-password`: The reset password page
- `/forgot-password`: The forgot password page

### Using the Redirect Strategy

Add the mixin to your root component like below:

```vue
<script>
  import { RedirectStrategy } from '@vue-accounts/core';
  
  export default {
    mixins: [RedirectStrategy],
  }
</script>
```

Now you just need to add the route configuration like below. This will work as default.

```javascript
export default [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./pages/Dashboard.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./pages/Login.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('./pages/Registration.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('./pages/ForgotPassword.vue'),
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('./pages/ResetPassword.vue'),
  },
  {
    path: '/verify-email',
    name: 'verify-email',
    component: () => import('./pages/VerifyEmail.vue'),
  },
];
```

Each page would have its corresponding form. For example the login page 
should have something like this:

```vue
<template>
  <login-form />
</template>

<script>
  import { LoginForm } from '@vue-accounts/core';

  export default {
    components: {
      LoginForm,
    }
  }
</script>
```

You can change the routes by adding the `accountRoutes` object to your root component:

```vue
export default {
  mixins: [RedirectMixin],
  
  accountRoutes: {
    private: '/admin', // Redirect authenticated users to this page
    login: '/', // Redirect un-authenticated users to this page
    registration: '/register',
    forgotPassword: '/forgot',
    resetPassword: '/reset-password',
  }
}
```

Any missing route configurations will automatically be merged with the default values.
