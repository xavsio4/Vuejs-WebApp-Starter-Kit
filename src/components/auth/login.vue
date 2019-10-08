<template>
  <section>
    <div class="login container">
      <div class="col-md-6">
        <h3>login</h3>

        <form class="login" @submit.prevent="login" >
          <p class="h4 text-center mb-4">Sign in</p>
          <label for="identity" class="grey-text">Your email</label>
          <input
            type="text"
            v-model="identity"
            id="identity"
            class="form-control"
            aria-describedby="input-identity"
          />
          <p variant="alert-danger" v-if="submitStatus === 'ERROR' && !$v.identity.required">Field is required</p>
          <br />
          <label for="password" class="grey-text">Your password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            class="form-control"
            aria-describedby="input-password"
          />
          <p variant="alert-danger" v-if="submitStatus === 'ERROR' && !$v.password.required">Field is required</p>
          <div class="text-center mt-4">
            <button
              class="btn btn-primary"
              :disabled="submitStatus === 'PENDING'"
              type="submit"
            >Login</button>
          </div>
          <div v-if="error" class="alert alert-danger">{{error}}</div>
          <div
            v-if="submitStatus === 'ERROR'"
            class="alert alert-warning"
          >Please fill the form correctly.</div>
        </form>
      </div>
      <div class="col-md-6">{{$v}}</div>
    </div>
    <!-- /container -->
  </section>
</template>
<script>
import UserService from "./../../services/UserService";
import { required, minLength } from "vuelidate/lib/validators";
//import { validationMixin } from 'vuelidate';

export default {
  conponents: {
    // Vuelidate,
  },
  data() {
    return {
      identity: "",
      password: "",
      error: "",
      loading: false,
      submitted: false,
      submitStatus: null,
      returnUrl: ""
    };
  }, //data
  methods: {
    login: function() {
      this.$v.touch;
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        this.loading = true;
        let identity = this.identity;
        let password = this.password;
        this.postCredentials(identity, password);
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    postCredentials(identity, password) {
      let response = UserService.login(identity, password);
      console.log(response);
      this.error = "Bad Request";
    }
  }, //methods
  validations: {
    identity: {
      required,
    },
    password: {
      required,
    }
  }
};
</script>