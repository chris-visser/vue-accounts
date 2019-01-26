/**
 * Simply pass the action calls to mutations of the same name
 * @param mutations
 * @constructor
 */

export default (mutations) => ({
  async dispatch(action, payload) {
    if (!mutations[method]) {
      throw new Error(`No mutation specified for method "${method}"`);
    }

    await mutations[action](payload);
  },
});


/**
 AccountsApollo({
  login: LoginMutation,
  register: RegisterMutation,
  forgotPassword: ForgotPasswordMutation
})
 */
