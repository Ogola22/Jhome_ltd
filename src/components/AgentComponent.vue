<template>
    <!-- Team Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1 class="mb-3">Property Agents</h1>
                <p>Our agents consist of certified individuals who are always ready to deliver to your demands.
                    Get in touch with them to know more about Jhomes.</p>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" v-for="agent in agent" :key="agent.id">
                    <div class="team-item rounded overflow-hidden">
                        <div class="position-relative">
                            <img class="img-fluid" src="../../src/assets/img/team-5.jpg" alt="">
                            <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <a class="btn btn-square mx-1" href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href="javascript:void(0)"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href="javascript:void(0)"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4 mt-3">
                            <h5 class="fw-bold mb-0">{{ agent.fName }} {{ agent.lName }}</h5>
                            <router-link :to="'/agentDetails/' + agent.id" class="nav-item nav-link" v-if="user">View Agent Details</router-link>
                            <router-link to="/login" class="nav-item nav-link" v-if="!user">View Agent Details</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->


    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>

<script>
import axios from 'axios';
export default {
    props: ["agent", "user"],

    data() {
        return {
        user: null
       } 
    },
    async created() {
        const response = await axios.get('user');
        this.user = response.data
    }
}
</script>

<style></style>