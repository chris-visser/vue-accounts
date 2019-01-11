<template>
  <main>
    <login-form />

    <registration-form />

    <forgot-password-form />

    <reset-password-form />
  </main>
</template>

<script>
  import * as components from '../src/entry';

  export default {
    components: {
      ...components
    },
  };
</script>
