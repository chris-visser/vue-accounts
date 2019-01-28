# Stores
Stores take actions from the connector and handle the serverside calls + client state. 
An example of such store is a Vuex store module which ofcourse has to be connected using 
the `VuexConnector`. The flow is as follows:

The `PasswordStrategy` exposes a `login` method. This method is triggered from 
one of the components. The `VuexConnector` passes the result of this method to the 
Vuex Store Module as with a normal Vuex store action. The store then handles the serverside 
login call and after login in it will keep the logged in state in the Vuex store.

## Example Vuex store
Below is a very minimal example of a store that would fit right on top of the `PasswordStrategy`.
```javascript
export default {
  actions: {
    async register(context, { email, password, profile }) {},
    async login(context, { email, password }) {},
    async logout(context) {},
    async forgotPassword(context, { email }) {},
    async resetPassword(context, { token, password }) {},
    async verifyEmail(context, { token }) {},
  },
};
```
