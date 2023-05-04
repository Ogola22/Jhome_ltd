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
                    <router-link to="/step1">
                        <span class="text">Photos &amp; EPC</span>
                    </router-link>
                </li>
                <li class="completed">
                    <router-link to="/step3">
                        <span class="text">Location</span>
                    </router-link>
                </li>
                <li class="current">
                    <router-link to="/step4">
                        <span class="text">Private Notes</span>
                    </router-link>
                </li>
            </ol>
            <div class="formContent">
                <form>
                    <header class="contentHead">
                        <h2 class="fontNeuron">Private Notes</h2>
                    </header>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group">
                                <textarea class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="btnArea">
                        <a href="#" class="btn btn-lighter"><i class="fi flaticon-arrows-1"></i> Back</a>
                        <button type="submit" class="btn btnDark">Submit Property <i
                                class="fi flaticon-arrows"></i></button>
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