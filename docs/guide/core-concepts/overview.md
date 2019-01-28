# Overview

Vue Accounts consists of a tiny, but extendable core. The core itself does not 
contain any functionality, but does expose a global Vue object called `$accounts`. 

By default when you call the `$accounts` object from a component, you will see an empty object. 
this will hold methods that can be added via **strategy** addons.

The core allows 2 types of addons: [strategies](/guide/core-concepts/strategies.html) and 
[connectors](/guide/core-concepts/connectors.html). 

- **Strategies** add functionality in the form of methods. These methods are exposed via the 
`$accounts` object. Each method dispatches an event with the passed parameters as payload.
- **Connectors** listen to any events coming from the strategies and transforms these events into 
a storage specific call. For example the VuexConnector will dispatch actions on a given Vuex store module. 
The ApolloConnector will call mutations on the ApolloClient.
