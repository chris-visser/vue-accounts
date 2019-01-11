<template>
  <v-layout align-center justify-center row wrap>
    <v-flex xs12>
      <v-alert type="info" :value="!!output">
        {{output}}
      </v-alert>
    </v-flex>

    <v-flex sm4 lg3>
      <v-btn block dark @click="$logout" v-if="loggedIn">Logout</v-btn>
      <login-form v-if="!loggedIn" />
    </v-flex>
    <v-flex sm4 lg3>
      <registration-form />
    </v-flex>
    <v-flex sm4 lg3>
      <forgot-password-form />
    </v-flex>
    <v-flex sm4 lg3>
      <router-link
          v-if="!$route.query['reset-password-token']"
          :to="{query: { 'reset-password-token': 'dummy-token-value' }}"
          class="d-block text-xs-right mb-5"
      >
        Set fake token in URL
      </router-link>
      <reset-password-form />
    </v-flex>

    <v-flex sm4 lg3>
      <login-card />
    </v-flex>
    <v-flex sm4 lg3>
      <registration-card />
    </v-flex>
    <v-flex sm4 lg3>
      <forgot-password-card />
    </v-flex>
    <v-flex sm4 lg3>
      <reset-password-card />
    </v-flex>
  </v-layout>
</template>

<script>
  import * as components from '../src/entry';

  export default {
    components: { ...components },

    data() {
      return {
        output: '',
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.account.userId;
      }
    }
  };
</script>
