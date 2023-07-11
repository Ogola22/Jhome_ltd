<template>
  <div class="wrapper1 login-2 m-5">
        <div class="container1">
            <div class="col-left">
                <div class="login-form">
                    <h2>Login</h2>
                    <form @submit.prevent="handleClick()">
                        <error style="font-size: smaller;" v-if="error" :error="error" />
                        <p>
                            <input :type="inputType" placeholder="Password" required v-model="password">
                            <i class="password-toggle-icon" :class="toggleIconClass" @click="togglePasswordVisibility"></i>
                        </p>
                        <p>
                            <input :type="inputType" placeholder="Confirm Password" required v-model="password_confirmation">
                            <i class="password-toggle-icon" :class="toggleIconClass" @click="togglePasswordVisibility"></i>
                        </p>

                        <p>
                            <input class="btn" type="submit" value="Sign In" />
                        </p>
                        
                        <p>
                            Not created your account yet?<router-link to="/register">Register</router-link>
                        </p>
                    </form>
                </div>
            </div>
            <div class="col-right">
                <div class="login-social">
                    <h2>Login with</h2>
                    <router-link to="" class="btn btn-go">Google</router-link>
                    <router-link to="" class="btn btn-fb">Facebook</router-link>
                    <router-link to="" class="btn btn-tw">Twitter</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: '',
            password: '',
            password_confirmation: '',
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
        async handleClick() {
            this.handleSubmit();
            this.refreshPage();
        },
        async handleSubmit() {
            const response = await axios.post('reset-password', {
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                token: this.$route.params.token
            })
            console.log(response)
            this.$router.push('/login');
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        async refreshPage() {
            location.reload();
        },
    }

}
</script>

<style>

</style>