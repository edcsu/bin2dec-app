<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Binary to Decimal converter
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <BinConverter/>
    </v-content>
  </v-app>
</template>

<script>
import BinConverter from './components/BinConverter';

export default {
  name: 'App',

  components: {
    BinConverter,
  },

  data: () => ({
    //
  }),
};
</script>
