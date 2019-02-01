
export default {
  props: {
    namespace: { type: String, default: 'account' },
  },
  computed: {
    isLoggingIn() {
      // return this.$store.account.
    },
    isLoggedIn() {

    },
    profile() {

    },
    userId() {

    }
  },

  render() {
    return this.$scopedSlots.default({
      isLoggingIn: this.isLoggingIn,
      isLoggedIn: this.isLoggedIn,
      profile: this.profile,
      userId: this.userId,
    });
  },
};
