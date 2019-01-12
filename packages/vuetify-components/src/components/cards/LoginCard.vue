<template>
  <base-card action="login" :title="title" :description="description">

    <login-form />

    <p class="text-lg-right mt-4">
      <v-btn flat small :to="$gatewayRoutes.forgotPassword">
        {{forgotPasswordTitle}}
      </v-btn>
    </p>
    <p class="text-lg-right mt-4">
      <v-btn flat small :to="$gatewayRoutes.registration">
        {{registrationTitle}}
      </v-btn>
    </p>
  </base-card>
</template>

<script>
  import BaseCard from './BaseCard';
  import LoginForm from '../forms/LoginForm';

  export default {
    components: {
      BaseCard,
      LoginForm,
    },

    props: {
      title: { type: String, default: 'Login' },
      description: { type: String, default: 'Welcome! Please login first' },
      forgotPasswordTitle: { type: String, default: 'Lost your password? Reset it here!' },
      registrationTitle: { type: String, default: 'Register yourself now!' },
    },
  };
</script>
