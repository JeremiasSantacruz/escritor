<template>
  <div class="home">
    <h1 v-if="this.$store.state.userLogIn">Bienvenido</h1>
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
import bookServices from "@/services/BookServices"

export default {
  name: "Home",
  data: () => ({
    books: null,
    }),
  components: {
    Books,
  },
  async mounted () {
    this.books = bookServices.index()
  }

};
</script>
