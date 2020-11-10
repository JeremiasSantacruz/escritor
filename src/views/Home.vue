<template>
  <div class="home">
    <v-container align>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(book, index) in books"
          :key="index"
        > 
          <Books
            v-bind:titule="book.titule"
            v-bind:author="book.author"
            v-bind:desc="book.desc"
            v-bind:price="book.price"
          />
        </v-col>
      </v-row>
     
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Books from "@/components/Books.vue";

export default {
  name: "Home",
  data: () => ({
    books: [
      { titule: "Madascar", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar3", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar2", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar3", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar2", author: "Madrid", desc: "quien sabe", price: 8.0 },
      {
        titule: "Madascsdar",
        author: "Madrid",
        desc: "quien sabe",
        price: 8.0,
      },
      { titule: "Madascar3", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar2", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar3", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar2", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar3", author: "Madrid", desc: "quien sabe", price: 8.0 },
      { titule: "Madascar2", author: "Madrid", desc: "quien sabe", price: 8.0 },
    ],
  }),
  components: {
    Books,
  },
};
</script>
