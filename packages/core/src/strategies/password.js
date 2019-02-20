/**
 * Exposes methods related to a regular password flow
 * @returns {{login(*=): Promise<*>, logout(*=): Promise<*>, register(*=): Promise<*>, verifyEmail(*=): Promise<*>, forgotPassword(*=): Promise<*>, resetPassword(*=): Promise<*>}}
 * @constructor
 */
export default () => ({
  async login(payload) {
    return await this.dispatch('login', payload);
  },
  async logout(payload) {
    return await this.dispatch('logout', payload);
  },
  async register(payload) {
    return await this.dispatch('register', payload);
  },
  async verifyEmail(payload) {
    return await this.dispatch('verifyEmail', payload);
  },
  async forgotPassword(payload) {
    return await this.dispatch('forgotPassword', payload);
  },
  async resetPassword(payload) {
    return await this.dispatch('resetPassword', payload);
  },
  async removeAccount(payload) {
    return await this.dispatch('removeAccount', payload);
  },
});
