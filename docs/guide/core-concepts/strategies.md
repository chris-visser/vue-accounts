# Strategies

Strategies are a set of methods that will be exposed via the `Vue.prototype.$accounts` object. 
This means that they will become available in all Vue components. For example 
when a strategy adds a `logout` method, you could call it like this in your template:

```vue
<template>
  <button @click="$accounts.logout()"></button>
</template>
```

Or in your component code:

```vue
<script>
  export default {
    methods: {
      handleClick() {
        this.$accounts.logout();
      }
    }
  }
</script>
```

Besides exposing the right methods, the strategy itself does'nt do much. In fact all 
methods on their turn call a `dispatch` method from the core which in turn dispatches the action 
to the store connector. This allows us to use any client side store mechanism.


