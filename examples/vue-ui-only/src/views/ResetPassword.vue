<template>
  <div class="home">
    <h1>Reset Password</h1>
    <reset-password-form @success="redirectToLogin" />
  </div>
</template>

<script>
  import { ResetPasswordForm } from '@vue-accounts/bare-components';

  export default {
    name: 'reset-password',
    components: {
      ResetPasswordForm,
    },
    computed: {
      token() {
        return this.$route.query.token;
      },
    },
    methods: {
      redirectToLogin() {
        setTimeout(() => {
          this.$router.replace('/');
        }, 2500);
      },
    },
  };
</script>
