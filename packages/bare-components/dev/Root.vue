<template>
  <div class="wrapper">
    <header>
      <button @click="$logout" v-if="loggedIn">Logout</button>
    </header>

    <router-view />
  </div>
</template>

<script>
  export default {
    computed: {
      loggedIn() {
        return this.$store.state.account.userId;
      },
    },
  };
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-flow: column;
    min-height: 1vh;
  }

  header {
    position: relative;
    height: 60px;
    align-items: center;
  }

  button {
    float: right;
  }


</style>

