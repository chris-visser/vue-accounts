<template>
  <div class="home">

    <!--<scoped-example>-->
    <!--<p slot-scope="{status}">TEST {{status}}</p>-->
    <!--</scoped-example>-->


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
// import ScopedExample from '../components/ScopedExample';

export default {
  name: 'home',
  components: {
    // ScopedExample,
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
