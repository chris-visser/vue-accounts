<template>
  <div class="auth-form registration-form">
    <auth-form method="register">
      <form slot-scope="{status, error, submit}"
            @submit.prevent="submit({ email, password, repeatPassword, displayName })">
        <p><strong>Status:</strong> {{ status }}</p>

        <input type="text" name="email" v-model="email" placeholder="Email address" />
        <input type="text" name="displayName" v-model="displayName" placeholder="Display name" />
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <input type="password" name="repeatPassword" v-model="repeatPassword" placeholder="Repeat Password" />

        <p v-if="error" class="error"><strong>Error:</strong> {{ error }}</p>

        <input type="submit" value="Register" />
      </form>
    </auth-form>
  </div>
</template>

<script>
import { AuthForm } from '@vue-accounts/core';

export default {
  components: {
    AuthForm,
  },
  data() {
    return {
      displayName: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
  },
};
</script>
