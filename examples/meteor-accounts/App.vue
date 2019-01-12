<template>
  <main>
    <TheHeader />
    <login-form />
  </main>
</template>

<script>
  import TheHeader from './components/TheHeader';
  import { LoginForm } from '@vue-accounts/bare-components';

  export default {
    components: {
      LoginForm,
      TheHeader,
    },
  };
</script>
