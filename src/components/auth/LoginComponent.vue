<template>
  <div class="container">
    <div class="row justify-content-center" style="margin-top: 20%">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header bg-primary text-white">Login Form</div>
          <div class="card-body">
            <div class="form-group">
              <label for="">EmailId:</label>
              <input
                type="email"
                class="form-control"
                name=""
                id=""
                v-model="email"
                aria-describedby="helpId"
                placeholder=""
              />
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              />
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              style="width: 100%"
              @click="handleSubmit()"
            >
              Submit
            </button>
          </div>
          <div class="card-footer text-muted">Footer</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    ...mapGetters("auth", [
      "authenticating",
      "authenticationError",
      "authenticationErrorCode",
    ]),
  },

  methods: {
    ...mapActions("auth", ["login"]),

    handleSubmit() {
     
      // Perform a simple validation that email and password have been typed in
      if (this.email != "" && this.password != "") {
        this.login({ email: this.email, password: this.password });
        this.password = "";
      }
    },
  },
};
</script>