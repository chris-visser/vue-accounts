<template>
  <auth-form method="login">
    <template slot-scope="{status, error, submit}">

      <form @submit.prevent="submit({ email, password })">
        <p><strong>Status:</strong> {{status}}</p>

        <input type="text" name="email" v-model="email" placeholder="Email" />
        <input type="password" name="password" v-model="password" placeholder="Password" />

        <p v-if="error" class="error"><strong>Error:</strong> {{error}}</p>

        <input type="submit" value="Login" />
      </form>

    </template>
  </auth-form>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
  };
</script>
