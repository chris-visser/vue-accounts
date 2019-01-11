<template>
  <base-card action="login" :title="title" :description="description">
    <reset-password-form />

    <p class="text-lg-right mt-4">
      <v-btn flat small :to="$gatewayRoutes.login">
        {{loginTitle}}
      </v-btn>
    </p>
  </base-card>
</template>

<script>
  import BaseCard from './BaseCard';
  import ResetPasswordForm from '../forms/ResetPasswordForm';

  export default {
    components: {
      BaseCard,
      ResetPasswordForm,
    },

    props: {
      title: { type: String, default: 'Reset your password here' },
      description: { type: String, default: 'Please enter your new password below and you will be good to go! If this was a mistake, simply close this page or return to the login by clicking the link below the form.' },
      loginTitle: { type: String, default: 'To the login.' },
    },

    data() {
      return {
        isValid: false,
        error: '',
        status: 'idle',
      };
    },

    methods: {
      async resetPassword({ password }) {

        const { token } = this.$route.query;

        this.status = 'submitting';

        await this.$store.dispatch('resetPassword', { token, password })
          .then(() => {
            // this.$router.replace('/');
            this.status = 'success';
          })
          .catch((error) => {
            this.status = 'error';
            this.error = error;
          });
      },
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
