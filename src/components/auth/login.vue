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
            autocomplete="off"
            id="identity"
            :class="['form-control ', (submitStatus === 'ERROR' && $v.identity.$invalid) ? 'is-invalid' : '']"
            aria-describedby="input-identity"
          />
          <p class="text-danger" v-if="submitStatus === 'ERROR' && !$v.identity.required">Field is required</p>
          <br />
          <label for="password" class="grey-text">Your password</label>
          <input
            type="password"
            v-model="password"
            autocomplete="off"
            id="password"
            :class="['form-control ', (submitStatus === 'ERROR' && $v.password.$invalid) ? 'is-invalid' : '']"
            aria-describedby="input-password"
          />
          <p class="text-danger" v-if="submitStatus === 'ERROR' && !$v.password.required">Field is required</p>
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
//import toast from "vue-izitoast";
import { required, minLength } from "vuelidate/lib/validators";
//import { validationMixin } from 'vuelidate';

export default {
  conponents: {
     //toast,
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
      if (this.$v.$invalid) { //if form is invalid
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        this.loading = true;
        let identity = this.identity;
        let password = this.password;
        this.postCredentials(identity, password);
        /*setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);*/
      }
    },
    postCredentials(identity, password) {
      UserService.login(identity, password)
      .then((response) => {
        console.log(response.data);
        this.submitStatus = "OK";
        if (response.data.authorizationToken && response.data.userId) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
           localStorage.setItem('authorizationToken', JSON.stringify(response.data.authorizationToken));
           localStorage.setItem('user_id', JSON.stringify(response.data.userId));
           this.$router.push('/dashboard');
        }
        
        })
      .catch((error) => {
        this.submitStatus = "OK";
        this.toast.error(error.response.data.message, 'Please, Check your credentials again.');
        });
      
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