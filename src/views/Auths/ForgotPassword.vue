<template>
  <div class="wrapper1 login-2 m-5">
        <div class="container1">
            <div class="col-left">
                <div class="login-form">
                    <h2>Enter Email</h2>
                    <form @submit.prevent="handleSubmit">
                        <error style="font-size: smaller;" v-if="error" :error="error" />
                        <p>
                            <input type="email" placeholder="Email" required name="email" v-model="email">
                        </p>
                       
                        <p>
                            <input class="btn" type="submit" value="Submit" />
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
            error: ''
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('forgot-password', {
                email: this.email
            });

            } catch (e) {
                this.error = 'The email you entered does not exist'
            }
            
            console.log(response);
        }
    }


}
</script>

<style>

</style>