<template>
    <!-- content -->
    <section id="content" class="container pabIndent m-3">
        <!-- userProfile -->
        <div class="userProfile">
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-lg-3">
                    <!-- profileSidebar -->
                    <aside class="profileSidebar">
                        <header class="head">
                            <div class="avatar-container">
                                <div class="avatar-placeholder">
                                    <i class="fas fa-user"></i>
                                    <img src="" alt="">
                                </div>
                            </div>
                        </header>
                        <div class="head">
                            <h4 class="fontNeuron">{{ user.name }} {{ user.lName }}</h4>
                        </div>
                        <div class="accountContent">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h5>Phone</h5>{{ user.phone }}
                                </li>
                                <li class="list-group-item">
                                    <h5>Email</h5> {{ user.email }}
                                </li>
                                <li class="list-group-item">
                                    <h5>Gender</h5> {{ user.gender }}
                                </li>
                            </ul>
                            <ul class="list-unstyled socialNetworks profileColumnSocial">
                                <li><a href="javascript:void(0)" tabindex="0"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="javascript:void(0)" tabindex="0"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)" tabindex="0"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="javascript:void(0)" tabindex="0"><i class="fab fa-google"></i></a></li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div class="col-xs-12 col-sm-8 col-lg-9">
                    <!-- accountData -->
                    <div class="accountData">
                        <form @submit.prevent="updateUser()">
                            <error style="font-size: smaller; margin: 2;" v-if="error" :error="error" />
                            <div class="head">
                                <h4 class="fontNeuron">Account Settings</h4>
                            </div>
                            <div class="accountHolder">
                                <div class="accountContent">
                                    <div class="form-group">
                                        <label for="itemN-1">First Name</label>
                                        <input type="text" class="form-control" v-model="user.name">
                                    </div>
                                    <div class="form-group">
                                        <label for="itemN-1">Last Name</label>
                                        <input type="text" class="form-control" v-model="user.lName">
                                    </div>
                                    <div class="form-group">
                                        <label for="itemN-2">Email</label>
                                        <input type="email" class="form-control" v-model="user.email">
                                    </div>
                                    <div class="form-group">
                                        <label for="itemN-3">Phone</label>
                                        <input type="tel" class="form-control" v-model="user.phone">
                                    </div>
                                    <div class="form-group">
                                        <label for="itemN-3"><i class="fa fa-angellist" aria-hidden="true"></i></label>
                                        <input type="tel" class="form-control" v-model="user.age">
                                    </div>
                                    <select data-placeholder="Select Option" class="form-control show-tick m-2"
                                        id="itemN-23" v-model="user.gender">
                                        <option value="">-- Gender --</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div class="form-group">
                                        <label for="itemN-4">About</label>
                                        <textarea id="itemN-4" class="form-control" v-model="user.about"></textarea>
                                    </div>
                                    <button type="submit" class="btn alighRight btnSecondary buttonL fontNeuron">Update
                                        Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
            user: {
                name: '',
                email: '',
                lName: '',
                about: '',
                phone: '',
                age: '',
                role: '',
                gender: '',
                error: ''
            },
        };
    },
    created() {
        this.getUser();
    },
    methods: {
        async getUser() {
            let id = this.$route.params.id;
            await axios.get(`user/${id}`).then((res) => {
                this.user = res.data;
                console.log(res.data)
            });
        },
        async updateUser() {
            try {
                let id = this.$route.params.id;
                await axios.put(`user/${id}`, this.user).then((res) => {
                    alert(res.data);
                    this.user = {
                        name: "",
                        lName: "",
                        email: "",
                        phone: "",
                        gender: "",
                        age: "",
                        about: "",
                        error: ""
                      
                    };
                });
                this.$router.replace("/")
            } catch (e) {
                this.error = 'All fields are Required'
            }


        }
    }

}
</script>

<style>
.avatar-container {
    width: 100px;
    height: 100px;
    background-color: #e0e0e0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar-placeholder {
    font-size: 48px;
    color: #757575;
}</style>