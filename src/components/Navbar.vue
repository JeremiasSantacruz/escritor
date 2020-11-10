<template>
      <v-app-bar
        color="teal darken-2"
        dense
        elevate-on-scroll
        app
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Escritor app</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon to="/" >
          <v-icon>mdi-home</v-icon>
        </v-btn>
  
        <v-btn icon to="/login" hover aria-label="Login">
          <v-icon>mdi-account-box</v-icon>
        </v-btn>
  
        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
  
          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
</template>

<script>
export default {
  data: () => ({ value: 1 }),

}
</script>

<style>

</style>