<template>
  <v-app>
    <v-container>
      <v-layout justify-space-around column>
        <v-card hover>
          <v-container>
            <v-card-title>Otorgar permisos.</v-card-title>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="email"
                :rules="rulesEmail"
                label="Email"
                type="email"
                prepend-icon="mdi-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="secret"
                label="Secreto"
                :rules="rulepass"
                prepend-icon="mdi-account-key"
                type="password"
                required
              ></v-text-field>

              <v-layout justify-space-around>
                
                <v-btn @click="validateLogin" :disabled="!valid" align-center
                  >Dar administrador</v-btn
                >
                <v-spacer v-if="error"></v-spacer>
                <v-card-text class="red--text" v-if="error">{{
                  error
                }}</v-card-text>
                <v-card-text class="green--text" v-if="sucess">Permiso administrador otorgado</v-card-text>

              </v-layout>
            </v-form>
          </v-container>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import AuthServices from "../services/AuthService";

export default {
  data: () => ({
    email: "",
    secret: "",
    valid: true,
    error: "",
    sucess: false,
  }),
  computed: {
    rulesEmail() {
      const rules = [];
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const rule1 = (v) => pattern.test(v) || `Email not allowed`;
      rules.push(rule1);
      return rules;
    },
  },
  methods: {
    async validateLogin() {
      try {
          await AuthServices.adminUp({
          email: this.email,
          secret: this.secret,
        });
        this.sucess = true,
        setTimeout( () => this.$router.push("/"), 700)
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style>
</style>