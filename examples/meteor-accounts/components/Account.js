export default {
  computed: {
    account() {
      return this.$store.state[this.$accounts.$connector.namespace];
    },
  },

  render() {
    return this.$scopedSlots.default(this.account);
  },
};
