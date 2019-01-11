<template>
  <form @submit.prevent="submit">
    <p><strong>Status:</strong> {{status}}</p>

    <p><strong>Token:</strong> {{token}}</p>

    <input type="password" name="password" v-model="password" placeholder="Password" />
    <input type="password" name="repeatPassword" v-model="repeatPassword" placeholder="Repeat Password" />

    <p v-if="error"><strong>Error:</strong> {{error}}</p>

    <input type="submit" value="Reset" />
  </form>
</template>

<script>
  import ResetPasswordFormMixin from '../../mixins/ResetPasswordFormMixin';

  export default {
    mixins: [ResetPasswordFormMixin],

    computed: {
      token() {
        return this.$route.query['token'];
      },
    },
  };
</script>
