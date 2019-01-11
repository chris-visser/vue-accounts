<template>
  <base-card action="login" :title="title" :description="description">
    <registration-form />

    <p class="text-lg-right mt-4">
      <v-btn flat small :to="$gatewayRoutes.login">
        {{loginLinkTitle}}
      </v-btn>
    </p>
  </base-card>
</template>

<script>
  import BaseCard from './BaseCard';
  import RegistrationForm from '../forms/RegistrationForm';

  export default {
    components: {
      BaseCard,
      RegistrationForm,
    },

    props: {
      title: { type: String, default: 'Registration' },
      description: { type: String, default: 'You can create your new account here.' },
      loginLink: { type: String, default: '/' },
      loginLinkTitle: { type: String, default: 'Back to the login!' },
    },
    data() {
      return {
        isValid: false,
        email: '',
        password: '',
        repeatPassword: '',
        displayName: '',
        error: '',
        status: 'idle',
      };
    },

    methods: {
      async register({ email, password, displayName }) {
        this.status = 'submitting';

        await this.$store.dispatch('register', { email, password, profile: { displayName } })
          .then(() => {
            this.status = 'success';

            setTimeout(() => {
              this.$router.replace('/');
            }, 1500);
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
