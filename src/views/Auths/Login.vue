<template>
    <div class="wrapper1 login-2 m-5">
        <div class="container1">
            <div class="col-left">
                <div class="login-form">
                    <h2>Login</h2>
                    <form @submit.prevent="handleLogin">
                        <error style="font-size: smaller;" v-if="error" :error="error" />
                        <p>
                            <input type="email" placeholder="Email" required name="email" v-model="email">
                        </p>
                        <p>
                            <input :type="inputType" placeholder="Password" required v-model="password">
                            <i class="password-toggle-icon" :class="toggleIconClass" @click="togglePasswordVisibility"></i>
                        </p>

                        <p>
                            <input class="btn" type="submit" value="Sign In" />
                        </p>
                        <p>
                            <router-link to="">Forget Password?</router-link>
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
import axios from 'axios';
import Error from '../../components/ErrorComponent.vue';
export default {
    components: {
        Error
    },
    data() {
        return {
            email: '',
            password: '',
            error: '',
            showPassword: false,
            currentTime: new Date().toLocaleTimeString()
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
            this.handleLogin();
            this.refreshPage();
        },
        async handleLogin() {
            try {
                const response = await axios.post('login', {
                    email: this.email,
                    password: this.password,
                });

                localStorage.setItem('token', response.data.token);
                this.$router.push('/');
            } catch (e) {
                this.error = 'Inavalid username/password'
            }
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        async refreshPage() {
            location.reload();
        },
    },
};
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
