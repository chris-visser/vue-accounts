<template>
  <account>
    <main slot-scope="{detailsLoaded, profile}">
      <TheHeader />

      <div v-if="detailsLoaded">
        <h1>Welcome {{profile.displayName}}</h1>
        <button @click="$accounts.logout">Logout</button>
        <button @click="$accounts.removeAccount">Remove Account</button>
      </div>

      <div v-else>
        <h2>Login</h2>
        <login-form />

        <h2>Registration</h2>
        <registration-form />
      </div>
    </main>
  </account>
</template>

<script>
import { Account } from '@vue-accounts/meteor';
import { LoginForm } from '@vue-accounts/bare-components';

import RegistrationForm from './components/RegistrationForm';
import TheHeader from './components/TheHeader';

export default {
  components: {
    Account,
    RegistrationForm,
    LoginForm,
    TheHeader,
  },
};
</script>
