<template>
  <div class="wrapper1 login-2">
    <div class="container1">
      <div class="col-left">
        <div class="login-form">
          <h2>Register</h2>
          <form @submit.prevent="handleSubmit()">
            <error v-if="error" :error="error" />
            <p>
              <input type="text" placeholder="First Name" required v-model="name">
            </p>
            <p>
              <input type="text" placeholder="Last Name" required v-model="lName">
            </p>
            <p>
              <input type="email" placeholder="Email" required v-model="email">
            </p>
            <p>
              <input :type="inputType" placeholder="Password" required v-model="password">
              <i class="password-toggle-icon" :class="toggleIconClass" @click="togglePasswordVisibility"></i>
            </p>
            <p>
              <input :type="inputType" placeholder="Confirm password" required v-model="password_confirmation">
              <i class="password-toggle-icon" :class="toggleIconClass" @click="togglePasswordVisibility"></i>
            </p>
            <p>
              <input type="text" placeholder="Phone Number" required v-model="phone">
            </p>
            <p>
              <input type="text" placeholder="Age" required v-model="age">
            </p>
            <select data-placeholder="Select Option" class="form-control show-tick m-2" id="itemN-23" v-model="role">
              <option value="">-- Role --</option>
              <option value="1">Agent</option>
              <option value="2">Client</option>
            </select>
            <select data-placeholder="Select Option" class="form-control show-tick m-2" id="itemN-23" v-model="gender">
              <option value="">-- Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <textarea rows="4" class="form-control no-resize m-2" placeholder="Biography"
              v-model="about"></textarea>
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
                <button class="btn btn-primary">Register</button>
              </div>
            </div>
            <p>
              Already have an account?<router-link to="/login"> Login</router-link>
            </p>
          </form>
        </div>
      </div>
      <div class="col-right">
        <div class="login-social">
          <h2>Sign Up with</h2>
          <router-link to="" class="btn btn-go">Google</router-link>
          <router-link to="" class="btn btn-fb">Facebook</router-link>
          <router-link to="" class="btn btn-tw">Twitter</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import Error from '../../components/ErrorComponent.vue';
export default {
  components: {
    Error
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      lName: '',
      about: '',
      phone: '',
      age: '',
      role: '',
      gender: '',
      error: '',
      showPassword: false,
    }
  },
  computed: {
    inputType() {
      return this.showPassword ? 'text' : 'password';
    },
    toggleIconClass() {
      return this.showPassword ? 'fa fa-eye-slash' : 'fa fa-eye';
    },
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('register', {
          name: this.name,
          email: this.email,
          lName: this.lName,
          about: this.about,
          phone: this.phone,
          age: this.age,
          role: this.role,
          gender: this.gender,
          password: this.password,
          password_confirmation: this.password_confirmation
        });

        console.log(response)
        this.$router.push('/');
      } catch (e) {
        this.error = 'Enter correct detail, ensure to use strong password'
      }

    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
}
</script>

<style>
.clearfix::after {
  content: '';
  clear: both;
  display: table;
}

.wrapper1 {
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container1 {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  background: #1a1818;
  box-shadow: 0 0 5px #2e2b2b;
}

div.register {
  position: relative;
  margin: 15px auto 0 auto;
  width: 100%;
  text-align: center;
  color: #666666;
  font-size: 16px;
  font-weight: 400;
}

div.register a {
  color: #222222;
  font-size: 16px;
  font-weight: 600;
}

/* * * * * Login 2 CSS * * * * */
.login-2 .container1 {
  background: #222222;
  box-shadow: none;
}

.login-2 .col-left,
.login-2 .col-right {
  position: relative;
  width: calc(50% - 1px);
  padding: 45px;
  display: flex;
}

.login-2 .col-left {
  margin-right: 2px;
  background: #ffffff;
  -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 5% 95%);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 5% 95%);
}

.login-2 .col-right {
  background: #ffffff;
  -webkit-clip-path: polygon(0 5%, 100% 0, 95% 95%, 0 100%);
  clip-path: polygon(0 5%, 100% 0, 95% 95%, 0 100%);
}

@media(max-width: 575.98px) {
  .login-2 .container1 {
    flex-direction: column;
  }

  .login-2 .col-left,
  .login-2 .col-right {
    width: 100%;
    margin: 0;
    padding: 30px;
    -webkit-clip-path: none;
    clip-path: none;
  }

  .login-2 .col-right {
    padding-top: 0;
  }
}

.login-2 .login-form,
.login-2 .login-social {
  position: relative;
  width: 100%;
}

.login-2 h2 {
  position: relative;
  margin: 0 0 15px 0;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: 700;
}

.login-2 h2::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  width: 30px;
  height: 2px;
  background: #666666;
}

.login-2 p {
  margin: 0 0 20px 0;
  text-align: left;
  color: #666666;
  font-size: 15px;
}

.login-2 p:last-child {
  margin: 0;
}

.login-2 p a {
  color: #44c7f5;
  font-size: 14px;
  text-decoration: none;
}

.login-2 .login-form input {
  display: block;
  width: 100%;
  height: 35px;
  padding: 0;
  outline: none;
  border-bottom: 1px solid;
  border-color: transparent transparent #44c7f5 transparent;
  font-size: 16px;
}

.login-2 .login-form input:focus {
  border-color: transparent transparent #ff574e transparent;
}

.login-2 .btn {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 15px;
  padding: 15px 0;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  background: #44c7f5;
  border: none;
  border-radius: 0;
  cursor: pointer;
  ;
  transition: .3s;
  -webkit-transition: .3s;
}

.login-2 .btn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}

.login-2 .btn.btn-go {
  background: #CF2C1F;
}

.login-2 .btn.btn-fb {
  background: #4064AC;
}

.login-2 .btn.btn-tw {
  background: #1C9CEB;
}
</style>
