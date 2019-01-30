<template>
  <auth-form method="forgotPassword" @success="$emit('success')">
    <form slot-scope="{status, error, submit}" @submit.prevent="submit({email})">
      <p><strong>Status:</strong> {{status}}</p>

      <input type="text" name="email" v-model="email" placeholder="Email address" />

      <p v-if="error" class="error"><strong>Error:</strong> {{error}}</p>

      <input type="submit" value="Send!" />
    </form>
  </auth-form>
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
    };
  },
};
</script>
