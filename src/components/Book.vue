<template>
  <v-container>
    <h1 class="text-left">{{title}}</h1>
      <p clas="subtitle-2 text-left">Author: {{author}}</p>
      <p>{{description}}</p>
      <v-layout  >
        <p>   Comprar</p>
        <v-spacer/>
        <v-btn color="green" >
        <v-icon dark>
          mdi-cart
        </v-icon>
        </v-btn>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    props: {
        title: String,
        author: String,
        genre: null,
        description: String,
        price: null,
    }

}
</script>

<style>

</style>