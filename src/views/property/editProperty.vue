<template>
   <!-- content -->
   <section id="content" class="container pEqual">
        <div class="addProperty">
            <h1 class="fontNeuron">Edit Property Details</h1>
            <div class="formContent">
                <form>
                    <header class="contentHead">
                        <h2 class="fontNeuron">Property Information</h2>
                    </header>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group">
                                <label for="itemN-15">Property Title*</label>
                                <input type="text" class="form-control" placeholder="House" id="itemN-15">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <label for="itemN-16">Price</label>
                                <input type="text" class="form-control" placeholder="Ksh.24.8 Million" id="itemN-16">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <label for="itemN-17">Price Postfix</label>
                                <input type="text" class="form-control" placeholder="" id="itemN-17">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="form-group">
                                <label for="itemN-18">Bedrooms</label>
                                <input type="number" class="form-control" placeholder="5" min="0" max="9999" id="itemN-18">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="form-group">
                                <label for="itemN-19">Bathrooms</label>
                                <input type="number" class="form-control" placeholder="3" min="0" max="9999" id="itemN-19">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="form-group">
                                <label for="itemN-20">Garages</label>
                                <input type="number" class="form-control" placeholder="8" min="0" max="9999" id="itemN-20">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <label for="itemN-21">Area</label>
                                <input type="text" class="form-control" placeholder="1500" id="itemN-21">
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
                                <select data-placeholder="Select Option" class="chosen-select" id="itemN-23">
                                    <option value="1">Villa</option>
                                    <option value="2">Apartment</option>
                                    <option value="2">Home</option>
                                    <option value="2">Office</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="form-group">
                                <label for="itemN-25">Description</label>
                                <textarea class="form-control" id="itemN-25" placeholder=""></textarea>
                            </div>
                        </div>
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

<style>

</style>