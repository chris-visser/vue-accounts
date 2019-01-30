<template>
  <div>
    <auth-form method="login">
      <form slot-scope="{status, error, submit}" @submit.prevent="submit({ email, password })">
        <p><strong>Status:</strong> {{status}}</p>

        <input type="text" name="email" v-model="email" placeholder="Email" />
        <input type="password" name="password" v-model="password" placeholder="Password" />

        <p v-if="error" class="error"><strong>Error:</strong> {{error}}</p>

        <input type="submit" value="Login" />
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
      email: '',
      password: '',
    };
  },
};
</script>
