import BaseFormMixin from './BaseFormMixin';

export default {
  extends: BaseFormMixin,
  method: '$register',

  data() {
    return {
      email: '',
      displayName: '',
      password: '',
      repeatPassword: '',
    }
  },

  computed: {
    payload() {
      return {
        email: this.email,
        displayName: this.displayName,
        password: this.password,
        repeatPassword: this.repeatPassword,
      }
    }
  }
}
