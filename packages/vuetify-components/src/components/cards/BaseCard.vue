<template>
  <v-card width="100%" max-width="450">
    <v-card-title primary-title>
      <div>
        <h2 class="headline mb-0">{{title}}</h2>
        <p>{{description}}</p>
      </div>
    </v-card-title>

    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      title: { type: String },
      description: { type: String },
    },
  };
</script>
