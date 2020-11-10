<template>
      <v-card>
          <v-card-title>{{titule}}</v-card-title>
          <v-card-subtitle>{{author}}</v-card-subtitle>
          <v-card-text>{{desc}}</v-card-text>
          <v-card-actions></v-card-actions>
      </v-card>
</template>

<script>
export default {
    data: () => ({ value: 1 }),
    props:{
        titule: String, 
        author: String, 
        desc: String, 
        price: Number
    }
    }
</script>

<style>

</style>