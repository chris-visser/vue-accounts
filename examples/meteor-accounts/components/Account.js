export default {
  props: {
    namespace: { type: String, default: 'account' },
  },
  computed: {
    account() {
      console.log(this.$accounts.$connector);
      return this.$store.state[this.namespace];
    },
  },

  render() {
    return this.$scopedSlots.default(this.account);
  },
};
