<template>
  <v-form v-model="isValid" @submit.prevent="submit">

    <v-text-field
        v-for="field in formFields"
        :key="field.name"
        :autofocus="field.autofocus"
        v-model="field.value"
        v-show="field.type !== 'hidden'"
        v-validate="field.validations"
        :type="field.type"
        :color="field.color"
        :label="field.label"
        placeholder=" "
        :data-vv-name="field.name"
        data-vv-validate-on="blur"
        :error-messages="errors.collect(field.name)"
    />

    <slot />

    <v-alert :value="!!error" color="error" icon="warning" outline>
      {{ error }}
    </v-alert>

    <v-btn
        type="submit"
        :color="submitBtnProps.color"
        :dark="submitBtnProps.dark"
        :isLoading="submitBtnProps.isLoading"
        block
        class="mt-3"
    >
      {{ submitBtnProps.title }}
    </v-btn>

  </v-form>
</template>

<script>

  export default {
    props: {
      error: { type: String },
      submitBtnProps: { type: Object },
      formFields: { type: Array },
    },

    data() {
      return {
        isValid: false,
      }
    },

    methods: {
      async submit() {
        await this.$validator.validateAll(); // vee-validate validation

        if (!this.isValid) {
          return;
        }

        const payload = this.getFormFieldValues();

        this.$emit('submit', payload);
      },
      /**
       * Return an object with key/value pairs (name: value)
       * @returns {*}
       */
      getFormFieldValues() {
        return this.formFields.reduce((obj, field) => {
          return { ...obj, [field.name]: field.value };
        }, {});
      },
    },
  };
</script>

<style>
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>
