# Connectors
Connectors connect the dispatch calls from strategies to a client state storage. An 
example of such storage is Vuex, but it might aswell be ApolloClient or Redux. 

## Actions
Connectors are objects with at least an `action` method. This method is triggered 
by core when strategies call the `dispatch` method. 

The action method is called with 2 parameters: `name` and `payload`. 
Name is the name of the action. For example `login`. The second is `payload` which 
is an object carrying the payload of the action to be fulfilled on the store.

The below example illustrates a connector with the action method:

```javascript
/**
 * Simply transforms the dispatched Accounts actions to Vuex actions
 * @param {Vuex} store - Instance of the Vuex Store
 * @param {String} namespace - A namespace in case your account store is namespaced
 * @returns {{dispatch(*, *=): Promise<void>}}
 * @constructor
 */
const VuexConnector = (store, namespace) => ({
  async action(name, payload) {
    const modulePath = namespace ? `${namespace}/` : '';

    return await store.dispatch(modulePath + name, payload);
  },
});
```
