<template>
  <base-form
      :submitBtnProps="submitBtnProps"
      :formFields="formFields"
      :autofocus="autofocus"
      @submit="submit"
  />
</template>

<script>
  import BaseForm from './BaseForm';
  import RegistrationFormMixin from '../../mixins/RegistrationFormMixin';

  export default {
    mixins: [RegistrationFormMixin],

    components: {
      BaseForm,
    },

    data() {
      return {
        formFields: [{
          type: 'text',
          name: 'displayName',
          label: 'Display Name',
          validations: 'required',
        }, {
          type: 'email',
          name: 'email',
          label: 'E-mail address',
          validations: 'required|email',
        }, {
          type: 'password',
          name: 'password',
          label: 'Password',
          validations: 'required',
        }, {
          type: 'password',
          name: 'repeatPassword',
          label: 'Repeat Password',
          validations: 'required',
        }],
      };
    },
  };
</script>
