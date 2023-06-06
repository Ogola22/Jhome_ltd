<template>
    <section id="content" class="container pabIndent">
        
        <!-- userProfile -->
        <div class="userProfile">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-lg-8">
                    <!-- accountData -->
                    <div class="accountData style2">
                        <div class="accountHolder">
                            <div class="imgProfile">
                                <div class="imgThumbnail">
                                    <img src="../../../src/assets/img/team-5.jpg" alt="image description">
                                </div>
                            </div>
                            <div class="accountContent">
                                <strong class="title fontNeuron">{{ agent.fName }} {{ agent.lName }}</strong>
                                <span class="sub-title">Sales Agent</span>
                                <p>Short description goes here</p>
                                <div class="contactInfo">
                                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>{{ agent.phone }}</p>
                                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>{{ agent.email }}</p>   
                                </div>
                                <ul class="list-unstyled socialNetworks profileColumnSocial">
                                    <li><a href="#" tabindex="0"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" tabindex="0"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#" tabindex="0"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#" tabindex="0"><i class="fab fa-google"></i></a></li>
                                </ul>
                                <span class="btn btnSmall btn-success text-capitalize">For Sale: 12</span>
                                <span class="btn btnSmall btn-info text-capitalize">For Rent: 14</span>
                            </div>
                        </div>
                    </div>
                    <div class="accountData">
                        <form>
                            <div class="head">
                                <h4 class="fontNeuron">Biography</h4>
                            </div>
                            <p>{{ agent.biography }}</p>
                        </form>
                    </div>
                    </div>
                <div class="col-xs-12 col-sm-12 col-lg-4">
                    <!-- contactFormPage -->
                    <div class="contactFormPage">
                        <h4 class="fontNeuron">Contact {{ agent.fName }}</h4>
                        <form>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <input type="text" placeholder="Your Name" class="form-control">
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <input type="tel" placeholder="Phone" class="form-control">
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <input type="email" placeholder="Email" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control"
                                    placeholder="Hi"></textarea>
                            </div>
                            <button type="submit" class="btn btnDark fontNeuron buttonXL">Submit</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            agent: {
                fName: "",
                lName: "",
                email: "",
                phone: "",
                age: "",
                gender: "",
                biography: "",
                facebook: "",
                tweeter: "",
                linkedin: "",
                instagram: "",
                dob: "",
                image: "",
            },
        };
    },
    created() {
        this.getAgent();
    },
    methods: {
        async getAgent() {
            let id = this.$route.params.id;
            await axios.get(`agent/${id}`).then((res) => {
                this.agent = res.data;
                console.log(res.data)
            });
        },
    }
}
</script>

<style></style>