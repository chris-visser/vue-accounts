/**
 * Simply transforms the dispatched Accounts actions to Vuex actions
 * @param {Vuex} store - Instance of the Vuex Store
 * @param {Object} options - Additional options
 * @param {String} options.namespace - A namespace in case your account store is namespaced
 * @returns {{action(*, *=): Promise<void>}}
 * @constructor
 */
export default (store, options) => {
  const { namespace } = options || {};

  if (!store) {
    throw new Error('A VueX store instance is required');
  }

  if (namespace && typeof namespace !== 'string') {
    throw new Error(`Expected namespace to be a string, ${typeof namespace} given`);
  }

  return {
    async action(name, payload) {
      const modulePath = namespace ? `${namespace}/` : '';

      return await store.dispatch(modulePath + name, payload);
    },

    config: {
      namespace,
    },
  };
};
