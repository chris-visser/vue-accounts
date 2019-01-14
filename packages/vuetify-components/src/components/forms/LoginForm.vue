<template>
  <base-form
      :submitBtnProps="submitBtnProps"
      :formFields="formFields"
      :error="error"
      @submit="submit"
  >
  </base-form>
</template>

<script>
  import BaseForm from './BaseForm';
  import LoginFormMixin from '../../mixins/LoginFormMixin';

  export default {
    mixins: [LoginFormMixin],

    components: {
      BaseForm,
    },

    data() {
      return {
        formFields: [{
          type: 'email',
          name: 'email',
          label: 'E-mail address',
          autofocus: true,
          validations: 'required|email',
          value: 'redroest@gmail.com'
        }, {
          type: 'password',
          name: 'password',
          label: 'Password',
          validations: 'required',
          value: 'gompie',
        }],
      };
    },
  };
</script>



