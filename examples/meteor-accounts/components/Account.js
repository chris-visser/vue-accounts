export default {
  props: {
    namespace: { type: String, default: 'account' },
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
  },

  render() {
    return this.$scopedSlots.default(this.account);
  },
};
