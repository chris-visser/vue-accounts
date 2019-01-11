<template>
  <form @submit.prevent="submit">
    <p><strong>Status:</strong> {{status}}</p>

    <input type="text" name="email" v-model="email" placeholder="Email address" />
    <input type="text" name="displayName" v-model="displayName" placeholder="Display name" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <input type="password" name="repeatPassword" v-model="repeatPassword" placeholder="Repeat Password" />

    <p v-if="error"><strong>Error:</strong> {{error}}</p>

    <input type="submit" value="Register" />
  </form>
</template>

<script>
  import RegistrationFormMixin from '../../mixins/RegistrationFormMixin';

  export default {
    mixins: [RegistrationFormMixin],
  };
</script>
