<template>
  <v-container align>
    <v-row>
      <v-col cols="12" lg="6" sm="6">
        <v-card hover>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-card-title>Datos del libro</v-card-title>
              <v-text-field
                label="Titulo"
                v-model="book.title"
                :rules="rulesName"
                prepend-icon="mdi-book"
                require
              ></v-text-field>
              <v-text-field
                label="Autor"
                :rules="rulesName"
                v-model="book.author"
                prepend-icon="mdi-grease-pencil"
                require
              ></v-text-field>
              <v-textarea
                label="Descripcion"
                v-model="book.description"
                prepend-icon="mdi-format-align-left"
                :rules="[(v) => !!v || 'No puede estar vacia']"
                
              ></v-textarea>
              <v-text-field
                type="number"
                v-model="book.price"
                :rules="[(v) => !!v || 'No puede estar vacia']"
                label="Precio"
                prepend-icon="mdi-cash-usd-outline"
              ></v-text-field>
              <v-file-input
                accept=".pdf"
                :rules="[(v) => !!v || 'No puede estar vacia']"
                label="File input"
                v-model="book.pdf"
              ></v-file-input>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
      <v-col v-if="book.title">
        <BooksCard
          v-if="book.title"
          v-bind:title="book.title"
          v-bind:author="book.author"
          v-bind:description="book.description"
          v-bind:price="book.price"
        />
      </v-col>
    </v-row>
    <v-layout justify-space-around>
      <v-btn @click="register">Publicar</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import BooksCard from "@/components/BooksCard.vue";
import BookServices from "@/services/BookServices";

export default {
  data: () => ({
    book: {
      title: "",
      author: "",
      genre: "",
      descriptionription: "",
      price: "",
      pdf: "",
    },
    rulesName: [
      (v) => !!v || "Debe tener nombre",
      (v) => v.length <= 50 || "Maximo longitud 50",
    ],
  }),
  components: {
    BooksCard,
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async register() {
      try {
        const book = (await BookServices.create(this.book)).data
        setTimeout(() => this.$router.push({name: 'Book', params: {book_id: book.id}}))
      } catch (error) {
        this.error = error.response.data.error
      }
    },
  },
};
</script>

<style>
</style>