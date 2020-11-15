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
        <br> {{book.id}}
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
    }),
  components: {
    BooksCard,
  },
  async mounted () {
    this.books =  (await bookServices.index()).data

  }

};
</script>
