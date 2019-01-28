<template>
  <div class="home">

    <div v-if="!isLoggedIn">
      <h1>Login</h1>
      <login-form />
    </div>

    <div v-if="isLoggedIn">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Welcome {{displayName}}</h1>
      <button @click="$accounts.logout()">Logout</button>
    </div>
  </div>
</template>

<script>
import { LoginForm } from '@vue-accounts/bare-components';

export default {
  name: 'home',
  components: {
    LoginForm,
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    displayName() {
      return this.$store.state.account.displayName;
    },
  },
};
</script>
