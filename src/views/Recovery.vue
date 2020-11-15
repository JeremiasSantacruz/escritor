<template>
  <div>
    <v-app>
      <v-container>
        <v-layout justify-space-around column>
          <v-card hover d-flex>
            <v-container>
              <v-card-title>Recuperar contraseña</v-card-title>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="email"
                  :rules="rulesEmail"
                  label="Email"
                  prepend-icon="mdi-mail"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :rules="rulesPassword"
                  label="Contraseña"
                  type="password"
                  prepend-icon="mdi-lock"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="passwordCheck"
                  :rules="rulesPassword"
                  label="Contraseña"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="secret"
                  :rules="rulesEmail"
                  label="Secreto"
                  prepend-icon="mdi-account-key"
                  required
                ></v-text-field>

                <v-layout justify-space-around row>
                  <v-btn @click="register">Recuperar</v-btn>
                  <row  class="red--text" v-if="error">{{error}}</row>
                  <row  class="green--text" v-if="succes">{{succes}}</row>
                </v-layout>
              </v-form>
            </v-container>
          </v-card>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<script>
import AuthServices from "@/services/AuthService"

export default {
  data: () => ({
    email: "",
    pass: "",
    min: 8,
    secret: "",
    error: null,
    succes: null,
  }),

  computed: {
    rulesPassword() {
      const rules = [];

      const ruleLowerCase = (v) =>
        /[a-z]/.test(v) || `Password must contain a lower case letter`;
      rules.push(ruleLowerCase);

      const ruleUpperCase = (v) =>
        /[A-Z]/.test(v) || `Password must contain a Upper Caser letter.`;
      rules.push(ruleUpperCase);

      const ruleDigit = (v) =>
        /[0-9]/.test(v) || `Password must contain number.`;
      rules.push(ruleDigit);

      const ruleSpecialChar = (v) =>
        /[!@#$%^&*]/.test(v) ||
        `Pasword must contain a special char(!@#$%^&*).`;
      rules.push(ruleSpecialChar);

      const rule2 = (v) =>
        (v || "").length >= 8 ||
        `A minimum of ${this.min} characters is needed.`;
      rules.push(rule2);

      const rule3 = (v) =>
        (!!v && v) === this.password || "Password do not match";
      rules.push(rule3);

      return rules;
    },
    rulesEmail() {
      // Array of treu, false or String error if false || string present
      const rules = [];
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const rule1 = (v) => pattern.test(v) || `Email not allowed`;
      rules.push(rule1);

      return rules;
    },
  },

  methods: {
    validateField() {
      this.$refs.form.validate();
    },
    async register () {
      try {
        await AuthServices.register({
        email: this.email,
        password: this.password,
        secret: this.secret,
      })
      this.succes = 'Contraseña cambiada'
      setTimeout( () => this.$router.push("/"), 700)
      }catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
      },
      
  },
};
</script>