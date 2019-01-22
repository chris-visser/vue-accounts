<template>
  <slot :status="status" :error="error" :submit="submit">
    Add your form here!
  </slot>
</template>

<script>
  export default {
    props: {
      resetTimeout: { type: Number, default: 2500 },
      method: { type: String },
    },

    data() {
      return {
        error: '',
        status: 'idle',
      };
    },

    methods: {
      async submit(payload) {

        this.error = '';
        this.status = 'submitting';

        const mixedPayload = {
          ...payload,
          ...this.payload,
        };

        this.$emit('submit', mixedPayload); // Expose event to parent

        if (this.method) {
          await this.callMethod(mixedPayload);
        } else {
          this.triggerError('Method not specified. You need to set a method property on your form component');
        }
      },

      /**
       * Calls the login method that was added via a plugin, handling any error or success callback
       * @param {Object} payload - Key/value pairs
       * @returns {Promise<void>}
       */
      async callMethod(payload) {
        const method = this.$accounts[this.method];

        if (!method) {
          this.triggerError(`Method "${this.method}" not implemented. Did you forget to add a vue-accounts plugin?`);
        }


        await method(payload)
          .then((result) => {
            this.status = 'success';

            this.$emit('success', result);

            setTimeout(() => this.status = 'idle', this.resetTimeout); // Reset state after 3 seconds
          })
          .catch(this.triggerError);
      },

      /**
       * @param {String} error
       */
      triggerError(error) {
        this.status = 'error';
        this.error = error.toString();
        this.$emit('error', error);

        console.error(error);
      },
    },
  };
</script>
