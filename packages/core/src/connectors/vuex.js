

/**
 * Simply transforms the dispatched Accounts actions to Vuex actions
 * @param {Vuex} store - Instance of the Vuex Store
 * @param {String} namespace - A namespace in case your account store is namespaced
 * @returns {{dispatch(*, *=): Promise<void>}}
 * @constructor
 */
export default (store, namespace) => ({
  async action(name, payload) {
    const modulePath = namespace ? `${namespace}/` : '';

    return await store.dispatch(modulePath + name, payload);
  },
});
