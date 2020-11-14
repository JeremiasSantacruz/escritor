<template>
  <div>
    <v-container>
      <h1 class="text-center">{{title}}</h1>
      <p clas="subtitle-1"> {{author}}</p>
      <p>{{description}}</p>
      <v-layout center >
        <p>Buy</p>
        <v-btn color="green" >
        <v-icon dark>
          mdi-cart
        </v-icon>
        </v-btn>
    <v-container> 
  </div>
</template>

<script>
export default {
 
  data: () => ({

    })
}
</script>

<style>

</style>