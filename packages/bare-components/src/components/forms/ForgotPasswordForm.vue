<template>
  <form @submit.prevent="submit">
    <p><strong>Status:</strong> {{status}}</p>

    <input type="text" name="email" v-model="email" placeholder="Email address" />

    <p v-if="error"><strong>Error:</strong> {{error}}</p>

    <input type="submit" value="Send Reset Email" />
  </form>
</template>

<script>
  import ForgotPasswordFormMixin from '../../mixins/ForgotPasswordFormMixin';

  export default {
    mixins: [ForgotPasswordFormMixin],
  };
</script>
