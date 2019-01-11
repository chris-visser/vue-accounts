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
  import ForgotPasswordFormMixin from '../../mixins/ForgotPasswordFormMixin';

  export default {
    mixins: [ForgotPasswordFormMixin],

    components: {
      BaseForm,
    },
    data() {
      return {
        formFields: [{
          type: 'email',
          name: 'email',
          label: 'E-mail address',
          validations: 'required|email',
        }],
      };
    },
  };
</script>
