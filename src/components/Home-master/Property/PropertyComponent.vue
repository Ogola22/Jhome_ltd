<template>

    <!-- Property List Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 class="mb-3">Property Listing</h1>
                        <p>Welcome to Jhomes Ltd, your trusted real estate agency. 
                            We are a team of experienced real estate professionals dedicated to helping you find your dream home, sell your property or invest in real estate.</p>
                    </div>
                </div>
                <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                        </li>
                        <li class="nav-item me-0">
                            <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"  v-for="properties in properties" :key="properties.id">
                            <div class="property-item rounded overflow-hidden">
                                <div class="position-relative overflow-hidden">
                                    <a href=""><img class="img-fluid" src="../../../../src/assets/img/property-1.jpg" alt=""></a>
                                    <div
                                        class="bg-info rounded text-blue position-absolute start-0 top-0 m-4 py-1 px-3"><router-link :to="'/propertyDetails/' + properties.id">
                                            View
                                        </router-link></div>
                                        
                                    <div
                                        class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        {{ properties.type }}</div>
                                </div>
                                <div class="p-4 pb-0">
                                    <h5 class="text-primary mb-3">{{ properties.price }}</h5>
                                    <a class="d-block h5 mb-2" href="">{{ properties.title }}</a>
                                    <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{{ properties.location }}</p>
                                </div>
                                <div class="d-flex border-top">
                                    <small class="flex-fill text-center border-end py-2"><i
                                            class="fa fa-ruler-combined text-primary me-2"></i>{{ properties.size }} m<sup>2</sup></small>
                                    <small class="flex-fill text-center border-end py-2"><i
                                            class="fa fa-bed text-primary me-2"></i>{{ properties.bedroom }}</small>
                                    <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>
                                        {{ properties.bathroom }}</small>
                                    <small class="flex-fill text-center py-2"><i class="fa fa-car text-primary me-2"></i>
                                        {{ properties.garage }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["properties"]
}

</script>

<style></style>