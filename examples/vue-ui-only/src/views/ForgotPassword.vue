<template>
  <div class="home">
    <h1>Forgot Password</h1>
    <forgot-password-form @success="handleSuccess" />
  </div>
</template>

<script>
  import { ForgotPasswordForm } from '@vue-accounts/bare-components';

  export default {
    name: 'forgot-password',
    components: {
      ForgotPasswordForm,
    },
    data() {
      return {
        emailIsSent: false,
      };
    },
    methods: {
      handleSuccess() {
        this.emailIsSent = true;
        setTimeout(() => {
          this.$router.replace('/reset-password?token=dummy'); // Got token 'magically' from email
        }, 2500);
      }
    }
  };
</script>
