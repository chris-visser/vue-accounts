<template>
  <div class="home">
    <h1>Registration</h1>
    <registration-form @success="redirectToLogin" />
  </div>
</template>

<script>
  import { RegistrationForm } from '@vue-accounts/bare-components';

  export default {
    name: 'register',
    components: {
      RegistrationForm,
    },
    computed: {
      isLoggedIn() {
        return this.$store.state.isLoggedIn;
      },
      email() {
        return this.$store.state.email;
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
