<template>
  <v-app>
    <v-container>
      <v-layout justify-space-around column>
        <v-card hover>
          <v-container>
            <v-card-title>Login</v-card-title>
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
                v-model="password"
                label="Password"
                :rules="rulepass"
                prepend-icon="mdi-lock"
                type="password"
                required
              ></v-text-field>
              <v-layout justify-space-around>
                <v-btn @click="validateLogin" :disabled="!valid" align-center
                  >Login</v-btn>
                  <v-spacer v-if="error"></v-spacer>
                  <v-card-text class="red--text" v-if="error">{{error}}</v-card-text>
              </v-layout>
            </v-form>
          </v-container>
        </v-card>

        <div>
          <br />
          Need an Account? Register
          <v-btn to="/signup" flat small>Signup </v-btn>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import AuthServices from '../services/AuthService'

export default {
  data: () => ({
    email: "",
    password: "",
    valid: true,
    rulepass: [(v) => !!v || "Password is required"],
    error: '',
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
        const response = await AuthServices.login({
            email: this.email,
          password: this.password,
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/')
      } catch (error) {
        this.error = error.response.data.error
      }
  }
}
}
</script>

<style>
</style>