<template>
  <main>
    <TheHeader />
    <button @click="onClick" v-if="isLoggedIn">Logout</button>

    <login-form v-if="!isLoggedIn" />

    <registration-form />
  </main>
</template>

<script>
  import TheHeader from './components/TheHeader';
  import { LoginForm, RegistrationForm } from '@vue-accounts/bare-components';

  export default {
    components: {
      RegistrationForm,
      LoginForm,
      TheHeader,
    },
    computed: {
      isLoggedIn() {
        return this.$store.state.account.userId;
      }
    },
    methods: {
      onClick() {
        console.log('??');
        this.$accounts.logout();
      }
    }
  };
</script>
