# Components

> TODO Add these components in a separate package called @vue-accounts/bare-components


## Creating your own Components
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


## Component Mixins
Component mixins simplify the creation of custom components by providing standard functionality to componens. 
An example of this functionality. Below is a list of available mixins


### BaseForm
Forms the base functionality for all the accounts forms. It calls the associated methods 
and tracks the status of this progress (idle, submitting, success, error). It gives the following states:

#### Usage
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

### LoginForm
Extends the BaseForm mixin by passing the `$login` method property.

### RegistrationForm
Extends the BaseForm mixin by passing the `$register` method property.

### ForgotPasswordForm
Extends the BaseForm mixin by passing the `$forgotPassword` method property.

### ResetPasswordForm
Extends the BaseForm mixin by passing the `$resetPassword` method property 
and by passing the token from the url's `token` query parameter into the payload of the form.






Auth component are in most cases accompanied by mixins that add the desired behavior. For 
example the reset-password form mixin goes with a ResetPasswordMixin which extracts the reset token 
from the url and adds it to the payload on submit.

## Forms

### Registration
Allows users to register themselves

### Forgot Password
Shows a form with at least an email input. This triggers a method that sends an e-mail with 
a reset link to the user. 

### Reset Password
Shows a form with 2 password fields that allows a user to reset its password. 
One for field is for the actual new password and the other to verify it. On submit 
a token from the url (added via the email) is added to the payload of the form

## Buttons
Some actions do not require a form and simply need to be clicked.

### Logout
Allows the user to log out

### Resend Verification E-mail
A button that when clicked, will trigger a store action which should resend a verification e-mail

## Alerts
Alerts give the user feedback about pending, successful or unsuccessful actions. 

### E-mail Not Yet Verified

Shown when the user is allowed to and log-in with an un-verified e-mail.

### E-mail Verification Feedback

Shown when the user returns on your app from a verification e-mail. It can have 4 states:

- verifying
- success
- error

After success the alert will be removed after 3 seconds.
