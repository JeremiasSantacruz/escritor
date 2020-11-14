<template>
  <v-container align>
      <v-row>
        <v-col
          cols="12"
          lg="6"
          sm="6"
          >
        <v-card hover>
          <v-container>
            <v-form ref="form"
            lazy-validation>
              <v-card-title>Datos del libro</v-card-title>
              <v-text-field
                label="Name"
                v-model="titule"
                :rules="rulesName"
                prepend-icon="mdi-book"
              ></v-text-field>
              <v-text-field
                label="Author"
                :rules="rulesName"
                v-model="author"
                prepend-icon="mdi-grease-pencil"
              ></v-text-field>
              <v-textarea
                label="Description"
                v-model="desc"
                prepend-icon="mdi-format-align-left"
                :rules="[v => !!v || 'No puede estar vacia']"
              ></v-textarea>
              <v-text-field
                type="number"
                v-model="price"
                :rules="[v => !!v || 'No puede estar vacia']"
                label="prices"
                prepend-icon="mdi-cash-usd-outline"
              ></v-text-field>
              <v-file-input
                accept=".pdf"
                :rules="[v => !!v || 'No puede estar vacia']"
                label="File input"
              ></v-file-input>
            </v-form>
          </v-container>
        </v-card>
        </v-col>
        <v-col v-if="titule" >
               <Books
          v-if="titule"
          v-bind:titule="titule"
          v-bind:author="author"
          v-bind:desc="desc"
          v-bind:price="price"
        />
        </v-col>
        </v-row>  
        <v-layout justify-space-around>
          <v-btn @click='validate'>Publicar</v-btn>
        </v-layout>
    </v-container>    
</template>

<script>
import Books from "@/components/Books.vue";
export default {
  data: () => ({
    titule: "",
    author: "",
    desc: "",
    price: "",
    rulesName:[ 
        (v) => !!v || 'Debe tener nombre',
        (v) => v.length <= 50 || 'Maximo longitud 50']
  }),
  components: {
    Books,
  },
  methods: {
      validate(){
          this.$refs.form.validate()
          
      }
  }
};
</script>

<style>
</style>