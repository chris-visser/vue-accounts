# Introduction

Vue Accounts provides a set of plugins, components and mixins that 
work really well together to form a fully functional accounts system. 
This includes login, registration, password reset, forgot password and e-mail 
verification flows.

Vue accounts is:

- **Pluggable** Connect to any identity provider via pre-build Account Store Plugins, or build your own.
- **Composable** Can be used with popular component libraries like 
[Vuetify](https://vuetifyjs.com/en/) or [Vue Bootstrap](https://bootstrap-vue.js.org/) 
or you build your own components.
- **Custom strategies** Add a desired strategy for complete control over your required onboarding flow: 
  - **Redirect strategy** will add a redirect based login flow (putting forms on separate routes / pages).
  - **Modal strategy** will make a modal pop-up for un-authenticated users.
