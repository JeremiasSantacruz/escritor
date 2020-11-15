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
          <h1 v-if="error">No se pudo obtener los libros.</h1>
          <BooksCard
            v-bind:id="book.id"
            v-bind:title="book.title"
            v-bind:author="book.author"
            v-bind:description="book.description"
            v-bind:price="book.price"
          />
        </v-col>
      </v-row>
     
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import BooksCard from "@/components/BooksCard.vue";
import bookServices from "@/services/BookServices"

export default {
  name: "Home",
  data: () => ({
    books: null,
    error: false,
    }),
  components: {
    BooksCard,
  },
  async mounted () {
    try {
      this.books =  (await bookServices.index()).data
    } catch (error) {
      this.error = true
      
    }
    

  }

};
</script>
