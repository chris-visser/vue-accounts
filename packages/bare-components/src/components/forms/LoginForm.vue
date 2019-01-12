<template>
  <form @submit.prevent="submit">
    <p><strong>Status:</strong> {{status}}</p>

    <input type="text" name="email" v-model="email" placeholder="Email" />
    <input type="password" name="password" v-model="password" placeholder="Password" />

    <p v-if="error" class="error"><strong>Error:</strong> {{error}}</p>

    <input type="submit" value="Login" />
  </form>
</template>

<script>
  import { LoginFormMixin } from '@vue-accounts/core';

  export default {
    mixins: [LoginFormMixin],
  };
</script>
