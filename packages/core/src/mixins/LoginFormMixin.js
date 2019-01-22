import BaseFormMixin from './BaseFormMixin';

export default {
  extends: BaseFormMixin,
  method: 'login',

  data() {
    return {
      email: '',
      password: '',
    }
  },

  computed: {
    payload() {
      return {
        email: this.email,
        password: this.password,
      }
    }
  }
}
