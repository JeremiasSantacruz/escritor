<template>
  <v-app>
    <v-card>
      <v-container>
        <v-btn @click="pingo">Hola hace click</v-btn>
        <div v-if="!error">{{ error }}</div>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import AuthServices from "../services/AuthService";

export default {
  data: () => ({
    error: '',
  }),
  methods: {
    async pingo() {
      console.log('Click');
      try {
        console.log("comenzando Post");
        await AuthServices.ping({
          ping: 'Hola'
        });
      } catch (err) {
        console.log(err)
        this.error = err.Response.error
      }
    },
  },
};
</script>

<style>
</style>