/**
 * Makes global vue instance auth methods available and connects them
 * to a Vuex store
 */
if (typeof window !== 'undefined' && window.document) {
  window.$error = function (ex) {
    throw ex;
  };
}


export default class AccountsCore {
  constructor(connector, strategies = []) {
    if (!connector) {
      throw new Error('A store connector is required');
    }

    if (typeof connector !== 'object') {
      throw new Error(`Your connector must be an object with a dispatch method. ${typeof connector} given`);
    }

    if (!connector.dispatch) {
      throw new Error('Your connector must at least have a dispatch method');
    }

    this.connector = connector;
    this.strategies = strategies;
  }

  /**
   * Adds an empty $accounts object to Vue
   * @param Vue
   */
  install(Vue) {
    // Add the $accounts namespace
    Object.defineProperty(Vue.prototype, '$accounts', {
      value: {},
      writable: true,
    });

    for (let i = 0, count = this.strategies.length; i < count; i++) {
      this._addStrategy(Vue, this.strategies[i]);
    }
  }

  /**
   * Allows to add strategies. Strategies are a map of methods that will be attached to the Vue prototype
   * @param Vue
   * @param methods
   */
  _addStrategy(Vue, methods) {
    // Transform methods object into a format that can be defined to the $accounts object
    const props = Object.keys(methods).reduce((obj, key) => ({
      ...obj,
      [key]: {
        value: methods[key].bind(this), // All methods operate in the core context
      },
    }), {});

    Object.defineProperties(Vue.prototype.$accounts, props);
  }

  /**
   * Passes dispatched methods from each strategy to the store connector
   * The store will take care of any backend calls. Stores can be Vuex, Apollo or whatever
   * @param method
   * @param payload
   */
  dispatch(method, payload) {
    return this.connector.dispatch(method, payload);
  }
}
