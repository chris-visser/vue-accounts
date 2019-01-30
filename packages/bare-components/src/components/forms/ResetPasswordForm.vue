<template>
  <div class="auth-form reset-password-form">
    <auth-form method="resetPassword">
      <form slot-scope="{status, error, submit}" @submit.prevent="submit({token, password, repeatPassword})">
        <p><strong>Status:</strong> {{status}}</p>

        <p><strong>Token:</strong> {{token}}</p>

        <input type="password" name="password" v-model="password" placeholder="Password" />
        <input type="password" name="repeatPassword" v-model="repeatPassword" placeholder="Repeat Password" />

        <p v-if="error" class="error"><strong>Error:</strong> {{error}}</p>

        <input type="submit" value="Reset" />
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
      password: '',
      repeatPassword: '',
    };
  },

  computed: {
    token() {
      return this.$route.query['token'];
    },
  },
};
</script>
