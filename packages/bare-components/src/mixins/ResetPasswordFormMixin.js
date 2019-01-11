import BaseFormMixin from './BaseFormMixin';

export default {
  extends: BaseFormMixin,
  method: '$resetPassword',

  data() {
    return {
      password: '',
      repeatPassword: '',
    }
  },

  computed: {
    payload() {
      return {
        token: this.token,
        password: this.password,
        repeatPassword: this.repeatPassword,
      }
    }
  }
}
