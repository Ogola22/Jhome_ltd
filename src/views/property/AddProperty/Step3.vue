<template>
    <section id="content" class="container pEqual">
        <div class="addProperty">
            <h1 class="fontNeuron">Add New Property</h1>
            <ol class="navSteps">
                <li class="completed">
                    <router-link to="/addProperty">
                        <span class="text">Basic Info</span>
                    </router-link>
                </li>
                <li class="completed">
                    <router-link to="/step2">
                        <span class="text">Photos &amp; EPC</span>
                    </router-link>
                </li>
                <li class="current">
                    <router-link to="/step3">
                        <span class="text">Location</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/step4">
                        <span class="text">Private Notes</span>
                    </router-link>
                </li>
            </ol>
            <div class="formContent">
                <form>
                    <header class="contentHead">
                        <h2 class="fontNeuron">Location</h2>
                        <div class="btnArea">
                            <router-link to="/step2" class="btn btn-lighter">Back</router-link>
                            <router-link to="/step4" class="btn btn-info">Next</router-link>
                        </div>
                    </header>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group">
                                <label>City / Town</label>
                                <select data-placeholder="Select Option" class="chosen-select">
                                    <option value="1">Nairobi</option>
                                    <option value="2">Mombasa</option>
                                    <option value="2">Kisumu</option>
                                    <option value="2">Nakuru</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xs-12">
                            <div class="form-group">
                                <label for="item-map">Address / Location</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="item-map" placeholder="Kenya / Nairobi">
                                    <button type="button" class="btn btnSecondary buttonL fontNeuron">Find On Map</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="map-area mapPlacer">
                        <div id="map-container">
                            <div id="map_div">&nbsp;</div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.401124903454!2d36.8069627!3d-1.2621655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17140770e9c5%3A0x5419c21a12dda63!2sWest%20point%20building%20Mpaka%20road!5e0!3m2!1sen!2ske!4v1681766321635!5m2!1sen!2ske"
                                width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div class="btnArea">
                        <router-link to="/step2" class="btn btn-lighter">Back</router-link>
                        <router-link to="/step4" class="btn btnDark">Next</router-link>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style></style>