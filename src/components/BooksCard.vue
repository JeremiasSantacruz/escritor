<template>
  <v-card>
       <v-img
            height="100px"
            :src="require('../assets/books.png')"
          >
    <v-card-title class="white--text" >{{ title }}</v-card-title>
    <v-card-subtitle class="white--text">{{ author }}</v-card-subtitle>
    </v-img>
    <v-card-actions>
      <v-btn color="orange--text lighten-2" text 
    :to="{name: 'Book', params: {book_id: this.id}}" > Description </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-card-actions>
        <v-card-text>Comprar</v-card-text>
        <v-spacer></v-spacer>
      <v-btn outlined rounded small color="sucess">
          <v-icon>mdi-cart</v-icon>
        $ {{ price }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({ show: false }),
  props: {
    id: Number  ,
    title: String,
    author: String,
    description: String,
    price: Number,
  },

};
</script>

<style>
</style>