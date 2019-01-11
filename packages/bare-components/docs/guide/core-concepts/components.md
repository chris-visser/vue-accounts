# Auth Components

> TODO Add these components in a separate package called @vue-accounts/bare-components


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
