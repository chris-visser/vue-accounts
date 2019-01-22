import BaseFormMixin from './BaseFormMixin';

export default {
  extends: BaseFormMixin,
  method: 'forgotPassword',

  data() {
    return {
      email: '',
    }
  },

  computed: {
    payload() {
      return {
        email: this.email,
      }
    }
  }
}
