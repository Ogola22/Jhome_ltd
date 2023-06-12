<template>
    <div>
        <main>
            <section class="container">
                
                <!-- contentFiltersHeadingWrap -->
                <header class="contentFiltersHeadingWrap row">
                    <div class="col-xs-12 col col-sm-8">
                        <h1 class="fontNeuron">{{property.title}}<a href="#"
                                class="btn btnSmall btn-success fontBase">{{ property.property_for }}</a></h1>
                        <!-- captionAddress -->
                        <address class="captionAddress">
                            <p>{{ property.location }}</p>
                        </address>
                    </div>
                    <div class="col-xs-12 col-sm-4 justify-end">
                        <strong class="elemenBlock price fwSemi fontNeuron w100">{{ property.price }}</strong>
                    </div>
                </header>
            </section>
            <!-- tabs -->
            <section class="container">
                <div class="row">
                    <div class="col-xs-8 col-sm-8">
                        <div class="tabSetholder tabschanges">
                            <div class="tab-content">
                                <div id="tab1-0">
                                    <div class="slick-thumbnailslider slickSlider postColumnImageSlider">                                                                       
                                        <div>
                                            <div class="imgHolder">
                                                <a href="#">
                                                    <img src="../../../../src/assets/img/property-1.jpg" alt="">
                                                    
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- twoColumns -->
            <div class="twoColumns container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-8">
                        <!-- content -->
                        <article id="content">
                            <!-- boxPanelBlock -->
                            <section id="Detail" class="accountData">
                                <div class="head">
                                    <h2 class="fontNeuron">Detail</h2>
                                </div>
                                <ul class="listpanel-head">
                                    <li>Area<span>{{ property.size }} m<sup>2</sup></span></li>
                                    <li>beds<span>{{ property.bedroom }}</span></li>
                                    <li>baths<span>{{ property.bathroom }}</span></li>
                                    <li>garages<span>{{ property.garage }}</span></li>
                                </ul>
                                <div class="listpanel-content">
                                    <ul>
                                        <li><span>Property ID</span><span class="righttext">: {{ property.id }}</span></li>
                                        <li><span>Garage Size</span><span class="righttext">: 580 SqFt</span></li>
                                        <li><span>Property Size</span><span class="righttext">: 32890 Sq Ft</span></li>
                                    </ul>
                                </div>
                            </section>
                            <section class="accountData">
                                <div class="head">
                                    <h4 class="fontNeuron">Description</h4>
                                </div>
                                <p>{{ property.desc }}</p>
                            </section>
                            <section class="accountData contactFormPage">
                                <div class="head">
                                    <h4 class="fontNeuron">Your Reviews</h4>
                                </div>
                                <form>
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <input type="text" placeholder="Your Name" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <input type="email" placeholder="Email" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <input type="tel" placeholder="Phone Number" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <input type="url" placeholder="Website" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Message"></textarea>
                                    </div>
                                    <button type="submit" class="btn btnDark fontNeuron buttonXL">Submit</button>
                                </form>
                            </section>
                        </article>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <aside id="sidebar">
                            <!-- contactFormPage -->
                            <section class="contactFormPage widget">
                                <div class="hb-headarea">
                                    <div class="holder">
                                        <div class="pull-left">
                                            <div class="hb-headcontent">
                                                <h3>Property Agent</h3>
                                                <span>Brian</span>
                                                <a href="#">View Listings</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hb-numberbox text-center">
                                        <h3><i class="fa fa-phone-alt me-3"></i>07004565899</h3>
                                    </div>
                                </div>
                                <form class="widgetCalcForm">
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
                                            placeholder="Hi Jennie Wilson, I saw your profile on LemanHouse and wanted to see if you could help me"></textarea>
                                    </div>
                                    <button type="submit" class="btn btnDark fontNeuron buttonXL">Submit</button>
                                </form>
                            </section>
                        </aside>
                    </div>
            </div>
        </div>
    </main>
</div>
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
                property_for: "",
                garage: "",
               
            },
        };
        
    },
    created() {
        this.getProperty();
    },
    methods: {
        async getProperty() {
            let id = this.$route.params.id;
            await axios.get(`property/${id}`).then((res) => {
                this.property = res.data;
                console.log(res.data)
            });
        },
    }
}
</script>

<style></style>