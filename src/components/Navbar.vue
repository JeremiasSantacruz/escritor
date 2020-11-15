<template>
  <v-app-bar color="blue darken-2" dense elevate-on-scroll app>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-navigation-drawer
        v-model="drawer"
        absolute app
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/"> 
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Home</v-list-item-title>
            </v-list-item>
  
            <v-list-item v-if="this.$store.state.userLogIn" to="/user">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Cuenta</v-list-item-title>
            </v-list-item> 

            <v-list-item v-if="isAdmin" to="/books/add">
              <v-list-item-icon>
                <v-icon>mdi-book-open-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Agregar Libro</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="this.$store.state.userLogIn" @click="logOut">
              <v-list-item-icon>
                <v-icon>mdi-account-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Cerrar sesion</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="!this.$store.state.userLogIn" to="/login">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Iniciar sesion</v-list-item-title>
            </v-list-item>

              <v-list-item v-if="!this.$store.state.userLogIn" to="/signup">
              <v-list-item-icon>
                <v-icon>mdi-account-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Registrarse</v-list-item-title>
            </v-list-item>


          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    <v-toolbar-title>
      <v-btn text to="/"> Escritor app </v-btn>
    </v-toolbar-title>
    <!---
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        v-if="!this.$store.state.userLogIn"
        icon
        to="/signup"
        hover
        pre
        aria-label="Login"
      >
       <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn
        v-if="!this.$store.state.userLogIn"
        icon
        to="/login"
        hover
        aria-label="Login"
      >
        <v-icon>mdi-account-arrow-right</v-icon>
      </v-btn>
      <v-btn
        v-if="this.$store.state.userLogIn"
        icon
        to="/login"
        hover
        aria-label="Login"
      >
        <v-icon left>mdi-account-box</v-icon>
      </v-btn> 
    </v-toolbar-items>
    ----->
  </v-app-bar>
  
</template>

<script>
export default {
  data: () => ({ drawer: false }),
  methods: {
    logOut () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name:'Home'})
    }
  },
  computed: {
    isAdmin (){
      if(this.$store.state.userLogIn){
        if(this.$store.state.user.role === 'Admin'){
          return true
        }
      }
      return false
      
    }
  },

};
</script>

<style>
</style>