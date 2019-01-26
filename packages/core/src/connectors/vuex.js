

/**
 * Simply transforms the dispatched Accounts actions to Vuex actions
 * @param store
 * @param namespace
 * @returns {{dispatch(*, *=): Promise<void>}}
 * @constructor
 */
export default (store, namespace) => ({
  async dispatch(action, payload) {
    const modulePath = namespace ? `${namespace}/` : '';

    return await store.dispatch(modulePath + action, payload);
  },
});
