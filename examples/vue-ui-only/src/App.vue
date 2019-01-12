<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/register">Register</router-link>
      |
      <router-link to="/forgot-password">Forgot Password</router-link>
      |
      <router-link to="/reset-password">Reset Password</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {

};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .error {
    color: red;
  }
</style>
