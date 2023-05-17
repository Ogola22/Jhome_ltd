<template>
    <main>
        <div class="text-start mx-auto p-4 wow slideInLeft" data-wow-delay="0.1s">
            <h3 class="mb-3">Property Listing</h3>
        </div>
    <section id="content" class="container pabIndent">
    <div class="isoContentHolder">
        <div class="row">
            <div class="col-xs-12 col-sm-6  col-md-4 col isoCol sale">
                <!-- postColumn -->
                <article class="postColumn hasOver bgWhite"  v-for="properties in properties" :key="properties.id">
                    <div class="aligncenter">
                        
                        <div class="slick-carousel slickSlider postColumnImageSlider">
                            <div>
                                <div class="imgHolder">
                                    <a href="properties-single1.html">
                                        <img src="../../../../src/assets/img/property-3.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="linkToFavourite roundedCircle bg-primary textWhite icnHeartBeatAnim"><i
                                class="far fa-heart"></i></a>
                    </div>
                    <h2 class="fontNeuron text-capitalize"><a href="properties-single1.html">{{ properties.title }}</a></h2>
                    <address>
                       <!-- location -->
                        <p>{{ properties.location }}</p>
                    </address>
                    <span class="btn btnSmall btn-success text-capitalize">For Sale</span>
                    <h3 class="fontNeuron fwSemi"><span class="textSecondary">{{ properties.price }}</span> <span
                            class="textUnit fwNormal">/ monthly</span></h3>
                    <!-- postColumnFoot -->
                    <footer class="postColumnFoot">
                        <ul class="list-unstyled">
                            <li>
                                <strong class="fwNormal elemenBlock text-primary">Area</strong>
                                <strong class="fwNormal elemenBlock">{{ properties.size }} m<sup>2</sup></strong>
                            </li>
                            <li>
                                <strong class="fwNormal elemenBlock text-primary">Bed</strong>
                                <strong class="fwNormal elemenBlock">{{ properties.bedroom }}</strong>
                            </li>
                            <li>
                                <strong class="fwNormal elemenBlock text-primary">Bath</strong>
                                <strong class="fwNormal elemenBlock">{{ properties.bathroom }}</strong>
                            </li>
                            <li>
                                <strong class="fwNormal elemenBlock text-primary">Garage</strong>
                                <strong class="fwNormal elemenBlock">{{ properties.garage }}</strong>
                            </li>
                        </ul>
                    </footer>
                </article>
            </div>
        </div>
    </div>
</section>
</main>
</template>

<script>
export default {
    props:["properties"]
}

</script>

<style></style>