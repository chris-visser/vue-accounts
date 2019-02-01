<template>
  <account>
    <main slot-scope="{detailsLoaded, profile}">
      <TheHeader />

      <div v-if="detailsLoaded">
        <h1>Welcome {{profile.displayName}}</h1>
        <button @click="onClick" v-if="detailsLoaded">Logout</button>
      </div>

      <div v-else>
        <login-form />

        <registration-form />
      </div>
    </main>
  </account>
</template>

<script>
import Account from './components/Account';
import TheHeader from './components/TheHeader';
import { LoginForm, RegistrationForm } from '@vue-accounts/bare-components';

export default {
  components: {
    Account,
    RegistrationForm,
    LoginForm,
    TheHeader,
  },
  methods: {
    onClick() {
      this.$accounts.logout();
    },
  },
};
</script>
