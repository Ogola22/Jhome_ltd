<template>
    <!-- content -->
    <section id="content" class="container pEqual">
        <div class="addProperty">
            <h1 class="fontNeuron">Add New Property</h1>
            <div class="formContent">
                <form @submit.prevent="addProperty()">
                    <header class="contentHead">
                        <h2 class="fontNeuron">Basic Info</h2>
                    </header>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group">
                                <label for="itemN-15">Property Title</label>
                                <input type="text" class="form-control" placeholder="House" id="itemN-15"
                                    v-model="property.title">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <label for="itemN-16">Price</label>
                                <input type="text" class="form-control" placeholder="Ksh.24.8 Million" id="itemN-16"
                                    v-model="property.price">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <label for="itemN-17">Location</label>
                                <input type="text" class="form-control" placeholder="" id="itemN-17"
                                    v-model="property.location">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="form-group">
                                <label for="itemN-18">Bedrooms</label>
                                <input type="number" class="form-control" placeholder="5" min="0" max="9999" id="itemN-18"
                                    v-model="property.bedroom">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="form-group">
                                <label for="itemN-19">Bathrooms</label>
                                <input type="number" class="form-control" placeholder="3" min="0" max="9999" id="itemN-19"
                                    v-model="property.bathroom">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="form-group">
                                <label for="itemN-20">Garages</label>
                                <input type="number" class="form-control" placeholder="8" min="0" max="9999" id="itemN-20"
                                    v-model="property.garage">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <label for="itemN-21">Area</label>
                                <input type="text" class="form-control" placeholder="1500" id="itemN-21"
                                    v-model="property.size">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <label for="itemN-22">Area Postfix</label>
                                <input type="text" class="form-control" placeholder="" id="itemN-22">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <label for="itemN-23">Property Type</label>
                                <select data-placeholder="Select Option" class="chosen-select" id="itemN-23"
                                    v-model="property.type">
                                    <option value="1">Villa</option>
                                    <option value="2">Apartment</option>
                                    <option value="2">Home</option>
                                    <option value="2">Office</option>
                                </select>
                            </div>
                        </div>
                        <!-- <div>
                            <input type="file" class="mb-3" @change="handleImageUpload">
                            
                        </div> -->
                        <div class="col-xs-12">
                            <div class="form-group">
                                <label for="itemN-25">Description</label>
                                <textarea class="form-control" id="itemN-25" placeholder=""
                                    v-model="property.desc"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="btnArea">
                        <button class="btn bt-success bg-info">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            property: {
                title: "",
                location: "",
                desc: "",
                price: "",
                bedroom: "",
                bathroom: "",
                size: "",
                type: "",
                garage: "",
            },
        };
    },

    methods: {
        // handleImageUpload(event) {
        //     this.selectedImage = event.target.files[0];
        // },
        // uploadImage() {
        //     // Create a FormData object
        //     let formData = new FormData();
        //     formData.append("image", this.selectedImage);
        // },
        addProperty() {
            axios.post('http://127.0.0.1:8000/api/property', this.property).then((res) => {
                alert(res.data);
                console.log(res);
                this.property = {
                    title: "",
                    location: "",
                    desc: "",
                    price: "",
                    bedroom: "",
                    bathroom: "",
                    size: "",
                    type: "",
                    garage: "",
                };
            });
            this.$router.replace("/propertyList")
        },
    }
};
</script>

<style></style>