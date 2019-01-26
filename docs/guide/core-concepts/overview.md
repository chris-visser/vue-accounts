# Overview

Vue Accounts consists of a tiny, but extendable core. The core itself does not 
contain any functionality, but does expose a global Vue object called `$accounts`. 
So called [strategies](/guide/core-concepts/strategies) add methods to this `$accounts` object. 

Each strategy method -

Strategies expose methods to components and connectors connect these methods to a client 
state library like Vuex or Apollo. The core is just there to connect everything.
