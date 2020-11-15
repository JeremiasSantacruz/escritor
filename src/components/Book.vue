<template>
  <v-container>
    <h1 class="text-left">{{title}}</h1>
      <p clas="subtitle-2 text-left">Author: {{author}}</p>
      <p>{{description}}</p>
      <v-layout  >
        <p>   Comprar</p>
        <v-spacer/>
        <v-btn color="green" @click="compra" >
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
    },
    methods: {
      compra(){
        // Implementar llamada  a compra
        if(this.$store.userLogIn){
          this.$router.push('/home') //implementar pdf
        }else {
          this.$router.push('/login')
        }
      }
    }

}
</script>

<style>

</style>