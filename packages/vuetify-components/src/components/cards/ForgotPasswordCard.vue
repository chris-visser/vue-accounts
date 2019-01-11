<template>
  <base-card action="login" :title="title" :description="description">
    <forgot-password-form />

    <p class="text-lg-right mt-4">
      <v-btn flat small :to="$gatewayRoutes.login">
        {{loginTitle}}
      </v-btn>
    </p>
  </base-card>
</template>

<script>
  import BaseCard from './BaseCard';
  import ForgotPasswordForm from '../forms/ForgotPasswordForm';

  export default {
    components: {
      BaseCard,
      ForgotPasswordForm,
    },
    props: {
      title: { type: String, default: 'Recover Password' },
      description: {
        type: String,
        default: 'No worries. We got you covered. Just enter your e-mail address and we\'ll send you an e-mail with a link to reset your password.',
      },
      loginTitle: { type: String, default: 'Back to the login!' },
    },
  };
</script>


<style>
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>
