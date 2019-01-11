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
  import ResetPasswordFormMixin from '../../mixins/ResetPasswordFormMixin';

  export default {
    mixins: [ResetPasswordFormMixin],

    components: {
      BaseForm,
    },

    computed: {
      formFields() {
        return [{
          type: 'password',
          name: 'password',
          label: 'Password',
          validations: 'required',
        }, {
          type: 'password',
          name: 'repeatPassword',
          label: 'Repeat Password',
          validations: 'required',
        }];
      },
    },
  };
</script>
